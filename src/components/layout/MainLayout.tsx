import Home from "@/pages/Home/Home";
import Footer from "@/pages/Shared/Footer";
import Navbar from "@/pages/Shared/Navbar";

const MainLayout: React.FC = () => {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default MainLayout;
