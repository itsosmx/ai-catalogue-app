import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="h-[80px] flex items-center px-20 shadow-lg justify-between">
      <Link to="/">
        <h1 className="text-3xl font-bold text-primary">AI Catalogue.</h1>
      </Link>
      <nav className="flex gap-8 ">
        <a href="https://rapidapi.com/OsamaHu1277/api/ai-catalogue" target="_blank" className="text-xl text-primary p-2 flex-center gap-4">
          API
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <Link to="/post" className="text-xl text-white bg-primary p-2 rounded-2xl px-4">
          Post a tool
        </Link>
      </nav>
    </header>
  );
}
