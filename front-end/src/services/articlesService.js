import API from "../API";

export const createArticle = async (title, content) => {
  try {
    const response = await API.post("/api/articles", { title, content });
    return response.data;
  } catch (error) {
    throw new Error("Failed to create article");
  }
};

export const updateArticle = async (id, article) => {
  const { data } = await API.patch(`api/articles/${id}`, article);
  return data;
};

export const deleteArticle = async (id) => {
  const { data } = await API.delete(`/api/articles/${id}`);
  return data;
};
