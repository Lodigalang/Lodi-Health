import CardBlog from "../UI/CardBlog";
import { getHealthArticles } from "../../Api/newsApi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getHealthArticles()
      .then((data) => {
        setPosts(data.slice(0, 3)); // tampilkan 3 artikel
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal memuat artikel:", err);
        setLoading(false);
      });
  }, []);
  return (
    <section
      className="max-w-full mx-auto px-4 py-20 bg-gradient-to-b from-[#82c182] to-[#7fb883]"
      id="blog"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white text-shadow-md mb-4">
            Wawasan & Tips Sehat Terkini
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Temukan tips , gaya hidup, dan berita terkait kesehatan
          </p>
        </div>
        {loading ? (
          <div className="text-center text-white py-10">Memuat artikel...</div>
        ) : (
          <CardBlog posts={posts} />
        )}

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-block bg-[#569b56] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#548254] shadow-[#569b56] transition shadow-md"
          >
            Lihat Semua Artikel
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blog;
