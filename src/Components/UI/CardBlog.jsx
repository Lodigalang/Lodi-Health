function CardBlog(props) {
  const categoryColors = {
    "Mental Health": "bg-purple-500",
    "Nutrition & Diet": "bg-green-500",
    "Exercise & Fitness": "bg-red-500",
    "Chronic Conditions": "bg-yellow-500",
    Prevention: "bg-teal-500",
    Treatment: "bg-blue-600",
    "General Health": "bg-blue-500",
    default: "bg-gray-400",
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {props.posts.map((post, index) => (
        <a
          key={index}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <article
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            data-aos-duration="1000"
          >
            <img
              src={post.image || "https://placehold.co/600x400"}
              alt={post.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <span
                className={`inline-block ${
                  categoryColors[post.category] || categoryColors.default
                } text-white px-3 py-1 rounded-full text-sm font-semibold mb-3`}
              >
                {post.category}
              </span>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {post.title.length > 80
                  ? post.title.slice(0, 80) + "..."
                  : post.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {post.excerpt
                  ? post.excerpt.length > 120
                    ? post.excerpt.slice(0, 100) + "..."
                    : post.excerpt
                  : "Tidak ada ringkasan."}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">{post.date || "Tanpa tanggal"}</span>
                <span className="flex items-center">
                  <img
                    src={post.authorImg || "https://placehold.co/40x40"}
                    alt={post.author || "Penulis"}
                    className="w-6 h-6 rounded-full mr-2 object-cover"
                  />
                  {post.author}
                </span>
              </div>
            </div>
          </article>
        </a>
      ))}
    </div>
  );
}

export default CardBlog;
