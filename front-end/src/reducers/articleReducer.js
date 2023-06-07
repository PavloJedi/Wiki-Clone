import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    addArticle: (state, action) => {
      state.articles.push(action.payload);
    },
    editArticle: (state, action) => {
      const { id, updatedArticle } = action.payload;
      const article = state.articles.find((article) => article.id === id);
      if (article) {
        Object.assign(article, updatedArticle);
      }
    },
    deleteArticle: (state, action) => {
      const articleIndex = state.articles.findIndex(
        (article) => article.id === action.payload
      );
      if (articleIndex !== -1) {
        state.articles.splice(articleIndex, 1);
      }
    },
  },
});

export const { addArticle, editArticle, deleteArticle } = articleSlice.actions;

export default articleSlice.reducer;
