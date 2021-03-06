import { useContext } from "react";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import { ArticleContext } from "../context/ArticleContext";

function DetailArticlePage() {
  const context = useContext(ArticleContext);
  const article = context.articleDetail;
  const folderName = article.fileName.split("-")[0];
  console.log(article);

  const docs = [
    {
      uri: require(`../static/${folderName}/${article.fileName}.docx`),
    },
  ];

  return (
    <div>
      <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
    </div>
  );
}

export default DetailArticlePage;
