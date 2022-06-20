import { createContext, useState } from "react";

export const ArticleContext = createContext();

function ArticleProvider({ children }) {
  const [articleDetail, setArticleDetail] = useState(null);

  const selectArticle = (article) => {
    console.log(article);
    setArticleDetail(article);
  };

  const value = {
    articleDetail,
    selectArticle,
  };

  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  );
}

export default ArticleProvider;
