import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getArticles } from "../services/articlesService";  

export const fetchArticles = createAsyncThunk("articles/fetchAll", async () => {
  const response = await getArticles();
  return response; 
});

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
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.articles = action.payload;
    });
  }
});

export const { addArticle, editArticle, deleteArticle } = articleSlice.actions;

export default articleSlice.reducer;
