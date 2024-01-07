import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Category() {
  let { id } = useParams();
  const [tools, setTools] = useState([]);

  useEffect(() => {
    document.title = "AI Catalogue | Category";

    (async () => {
      const options = {
        method: "GET",
        url: `https://ai-catalogue.p.rapidapi.com/tools/${id}`,
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_XRapidAPIKey,
          "X-RapidAPI-Host": import.meta.env.VITE_XRapidAPIHost,
        },
      };
      const response = await axios.request(options);

      if (response.status === 200) {
        setTools(response.data.data.tools);
      }
    })();
  }, [id]);

  function _renderTool(tool: any) {
    return (
      <a
        href={tool.link}
        target="_blank"
        key={tool.id}
        className="h-[300px] w-[300px] flex-center flex-col gap-4 hover:translate-y-3 ease-linear transition-all hover:text-primary">
        <img className="rounded-2xl" src={`https://ai-catalogue.cyclic.app${tool.thumbnail}`} alt={tool.name} />
        <h1 className="font-bold">{tool.name}</h1>
      </a>
    );
  }

  return <div className="flex flex-wrap items-center justify-center gap-4 p-8">{tools.map(_renderTool)}</div>;
}
