import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown/with-html";

function App() {
  const [markdown, setMarkdown] = React.useState("");
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        "https://raw.githubusercontent.com/aijinet/bodoc-claim-contents/master/contents/example/test1.md"
      );
      setMarkdown(await result.text());
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        <ReactMarkdown source={markdown} escapeHtml={false} />
      </div>
    </div>
  );
}

export default App;
