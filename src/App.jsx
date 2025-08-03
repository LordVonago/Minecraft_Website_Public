import "./App.css";
import Footer from "./components/Footer/Index.jsx";
import AppRoutes from "./Routes.jsx";

function App() {
  return (
    <div className="maincontainer">
      <AppRoutes />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
