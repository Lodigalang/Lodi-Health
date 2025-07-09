export default async function handler(req, res) {
  const API_KEY = process.env.VITE_NEWSAPI_KEY;

  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=health`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Gagal ambil data dari NewsAPI" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
