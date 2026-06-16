import Footer from "@/pages/Shared/Footer";
import Navbar from "@/pages/Shared/Navbar";
import Offers from "@/pages/Shared/Offers";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#13231c]">
      <Offers />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
