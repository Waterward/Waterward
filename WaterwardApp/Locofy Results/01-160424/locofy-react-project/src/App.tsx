import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SplashScreen from "./pages/SplashScreen";
import Statistics from "./pages/Statistics";
import AddHubTank from "./pages/AddHubTank";
import TankDetails from "./pages/TankDetails";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/splash-screen":
        title = "";
        metaDescription = "";
        break;
      case "/statistics":
        title = "";
        metaDescription = "";
        break;
      case "/add-hubtank":
        title = "";
        metaDescription = "";
        break;
      case "/tank-details":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/splash-screen" element={<SplashScreen />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/add-hubtank" element={<AddHubTank />} />
      <Route path="/tank-details" element={<TankDetails />} />
    </Routes>
  );
}
export default App;
