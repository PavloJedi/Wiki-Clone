import API from "../API";

export const createArticle = async (title, content, authorId) => {
  try {
    const response = await API.post("/api/articles", {
      title,
      content,
      author: authorId,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to create article");
  }
};

export const updateArticle = async (id, article) => {
  const { data } = await API.patch(`/api/articles/${id}`, article);
  return data;
};

export const deleteArticle = async (id) => {
  const { data } = await API.delete(`/api/articles/${id}`);
  return data;
};

export const searchArticles = async (query) => {
  try {
    const response = await API.get("/api/articles/search", {
      params: { q: query },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to search articles: " + error.message);
  }
};

export const getArticleById = async (id) => {
  try {
    const response = await API.get(`/api/articles/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch article: " + error.message);
  }
};

export const getArticles = async () => {
  try {
    const response = await API.get("/api/articles");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch articles: " + error.message);
  }
};

export const getReport = async (startDate, endDate) => {
  try {
    const response = await API.get("/api/articles/report", {
      params: { startDate, endDate },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error("Failed fetch article report" + error.message);
  }
};
