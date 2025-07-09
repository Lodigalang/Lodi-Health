import { axiosNews } from "./axiosInstance";

const API_KEY = import.meta.env.VITE_NEWSAPI_KEY;

function detectCategory(article) {
  const text =
    (article.title || "") +
    " " +
    (article.description || "") +
    " " +
    (article.content || "");

  const lower = text.toLowerCase();

  if (
    lower.includes("mental") ||
    lower.includes("stress") ||
    lower.includes("anxiety") ||
    lower.includes("depression") ||
    lower.includes("psychology") ||
    lower.includes("trauma")
  ) {
    return "Mental Health";
  }

  if (
    lower.includes("nutrition") ||
    lower.includes("diet") ||
    lower.includes("obesity") ||
    lower.includes("food") ||
    lower.includes("calories") ||
    lower.includes("eating habits")
  ) {
    return "Nutrition & Diet";
  }

  if (
    lower.includes("exercise") ||
    lower.includes("fitness") ||
    lower.includes("workout") ||
    lower.includes("yoga") ||
    lower.includes("physical activity") ||
    lower.includes("training")
  ) {
    return "Exercise & Fitness";
  }

  if (
    lower.includes("diabetes") ||
    lower.includes("cancer") ||
    lower.includes("asthma") ||
    lower.includes("hypertension") ||
    lower.includes("chronic") ||
    lower.includes("cardiovascular") ||
    lower.includes("stroke")
  ) {
    return "Chronic Conditions";
  }

  if (
    lower.includes("prevention") ||
    lower.includes("vaccine") ||
    lower.includes("vaccination") ||
    lower.includes("immunization") ||
    lower.includes("preventive")
  ) {
    return "Prevention";
  }

  if (
    lower.includes("treatment") ||
    lower.includes("therapy") ||
    lower.includes("medication") ||
    lower.includes("rehabilitation") ||
    lower.includes("drug") ||
    lower.includes("medicine") ||
    lower.includes("recovery")
  ) {
    return "Treatment";
  }

  return "General Health";
}

function getHealthArticles() {
  return axiosNews
    .get("/top-headlines", {
      params: {
        country: "us",
        category: "health",
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
    .then((res) => {
      console.log("Artikel berhasil diambil:", res.data);

      if (!res.data.articles || res.data.articles.length === 0) {
        console.warn("Tidak ada artikel yang tersedia dari NewsAPI.");
        return [];
      }

      return res.data.articles.map((item) => {
        const category = detectCategory(item);

        return {
          title: item.title,
          excerpt: item.description || "",
          image: item.urlToImage,
          url: item.url,
          date: new Date(item.publishedAt).toLocaleDateString(),
          author: item.author,
          authorImg: null,
          category,
        };
      });
    })
    .catch((err) => {
      console.error("Gagal mengambil artikel:", err);
      return [];
    });
}

export { getHealthArticles };
