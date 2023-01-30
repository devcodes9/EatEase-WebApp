import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { List } from "./pages/list/List";
import { Home } from "./pages/home/Home";
import {Kitchen} from "./pages/kitchen/Kitchen";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kitchens" element={<List />} />
        <Route path="/kitchens/:id" element={<Kitchen />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
