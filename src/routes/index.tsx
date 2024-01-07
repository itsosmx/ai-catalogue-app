import { Routes as DomRoutes, Route } from "react-router-dom";
import Home from "./home";
import Category from "./category";

export default function Routes() {
  return (
    <DomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:id" element={<Category />} />
    </DomRoutes>
  );
}
