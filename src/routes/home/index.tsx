import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    document.title = "AI Catalogue | Home";
    (async () => {
      const options = {
        method: "GET",
        url: "https://ai-catalogue.p.rapidapi.com/categories",
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_XRapidAPIKey,
          "X-RapidAPI-Host": import.meta.env.VITE_XRapidAPIHost,
        },
      };
      const response = await axios.request(options);
      if (response.status === 200) {
        setCategories(response.data.data);
      }
    })();
  }, []);

  function _renderCategory(category: any) {
    return (
      <Link
        to={`category/${category.id}`}
        key={category.id}
        className="h-[300px] w-[300px] flex-center flex-col gap-4 hover:translate-y-3 ease-linear transition-all hover:text-primary">
        <img className="rounded-2xl" src={`https://ai-catalogue.cyclic.app${category.thumbnail}`} alt={category.title} />
        <h1 className="font-bold">{category.title}</h1>
      </Link>
    );
  }

  return <div className="flex flex-wrap items-center justify-center gap-4 p-8">{categories.map(_renderCategory)}</div>;
}
