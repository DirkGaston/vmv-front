import Navbar from "../layout/Navbar";
import MainLayout from "./MainLayout";
import Footer from "../layout/Footer";
import "../assets/css/Layout.css";

function PageLayout() {
  return (
    <div className="PageLayout">
      <div className="navbar-container sticky top-0 bg-black bg-opacity-60">
        <Navbar />
      </div>
      <MainLayout />
      <Footer />
    </div>
  );
}

export default PageLayout;
