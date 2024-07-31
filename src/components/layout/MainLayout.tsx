import Home from "@/pages/Home/Home";
import Footer from "@/pages/Shared/Footer";
import Navbar from "@/pages/Shared/Navbar";
import Offers from "@/pages/Shared/Offers";

const MainLayout: React.FC = () => {
  return (
    <div>
      <Offers />
      <div className="container">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
