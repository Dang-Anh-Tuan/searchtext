import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import { useParams } from "react-router-dom";

function DetailArticlePage() {
  const { id } = useParams();

  const docs = [{ uri: require(`../static/science/science-${id}.docx`) }];

  return (
    <div>
      <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
    </div>
  );
}

export default DetailArticlePage;
