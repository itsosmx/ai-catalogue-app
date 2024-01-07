import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Header } from "./components";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </main>
  );
}
