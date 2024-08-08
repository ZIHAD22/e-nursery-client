import Footer from "@/pages/Shared/Footer";
import Navbar from "@/pages/Shared/Navbar";
import Offers from "@/pages/Shared/Offers";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div>
      <Offers />
      <div className="container">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
