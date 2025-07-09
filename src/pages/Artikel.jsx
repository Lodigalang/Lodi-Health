import React, { useEffect, useState } from "react";
import { getHealthArticles } from "../Api/newsApi.jsx";
import CardBlog from "../Components/UI/CardBlog";

function Artikel() {
  const [search, setSearch] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  const categories = [
    "All",
    "Mental Health",
    "Nutrition & Diet",
    "Exercise & Fitness",
    "Chronic Conditions",
    "Prevention",
    "Treatment",
    "General Health",
  ];
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const cached = localStorage.getItem("cached_articles");
    const cachedTime = localStorage.getItem("cached_time");

    if (cached && cachedTime && Date.now() - cachedTime < 3600000) {
      const data = JSON.parse(cached);
      setAllPosts(data);
      setFilteredPosts(data);
      setLoading(false);
    } else {
      getHealthArticles()
        .then((data) => {
          setAllPosts(data);
          setFilteredPosts(data);
          localStorage.setItem("cached_articles", JSON.stringify(data));
          localStorage.setItem("cached_time", Date.now());
          setLoading(false);
        })
        .catch((err) => {
          console.error("Gagal mengambil artikel:", err);
          setLoading(false);
        });
    }
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category]);

  useEffect(() => {
    const keyword = search.toLowerCase();
    const results = allPosts.filter((post) => {
      const matchKeyword =
        post.title?.toLowerCase().includes(keyword) ||
        post.excerpt?.toLowerCase().includes(keyword);
      const matchCategory = category === "All" || post.category === category;
      return matchKeyword && matchCategory;
    });
    setFilteredPosts(results);
  }, [search, allPosts, category]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <section>
      <header className="mb-10 text-center py-40 bg-gradient-to-b from-[#82c182] to-[#7fb883]">
        <h1 className="text-7xl font-bold text-white mb-4">
          Pusat Artikel Kesehatan
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Telusuri artikel kesehatan berbasis bukti yang dikurasi oleh para
          profesional medis.
        </p>
      </header>
      <div className="px-5 mb-10">
        <div className="mb-5 py-5">
          <div className="flex flex-col md:flex-row gap-4 mb-10 justify-between items-start md:items-center md:justify-center">
            <div className="relative w-full md:w-200">
              <input
                type="text"
                placeholder="Cari topik kesehatan..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition 
        ${
          category === cat
            ? "bg-green-600 text-white border-green-600"
            : "bg-white text-gray-600 border-gray-300 hover:border-green-500"
        }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards */}
        {loading ? (
          <p className="text-center text-gray-500">Memuat artikel...</p>
        ) : currentPosts.length === 0 ? (
          <p className="text-center text-gray-500">
            Tidak ada artikel ditemukan.
          </p>
        ) : (
          <>
            <CardBlog posts={currentPosts} />

            {/* Pagination */}
            <div className="flex justify-center mt-8 gap-2 flex-wrap">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded border ${
                    currentPage === i + 1
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-green-400"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Artikel;
