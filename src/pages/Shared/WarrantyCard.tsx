import { Switch } from "@/components/ui/switch";
import warrantyImg from "../../assets/icons/warranty-img.svg";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const WarrantyCard = () => {
  const [warrantyValue, setWarranty] = useState(false);
  return (
    <div className="bg-[#1e3045] text-white p-4 grid grid-cols-3">
      <div>
        <img src={warrantyImg} alt="" />
      </div>
      <div className="col-span-2">
        <h1 className="text-base">1 YEAR WARRANTY SECURED</h1>
        <h1 className="text-sm mt-6">3 plants guaranteed</h1>
        <div className="flex items-center space-x-2 mt-3">
          <Switch
            id="airplane-mode"
            checked={warrantyValue}
            onClick={() => setWarranty((pre) => !pre)}
          />
          <Label htmlFor="airplane-mode">{warrantyValue ? "Yes" : "No"}</Label>
        </div>
      </div>
    </div>
  );
};

export default WarrantyCard;
