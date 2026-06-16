import { Heart, MessageCircle, Truck } from "lucide-react";

const Offers = () => {
  return (
    <div className="bg-[#49d33f] py-1.5 text-white">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-3 px-4 md:justify-end">
        {[
          { icon: Heart, label: "Family Business" },
          { icon: MessageCircle, label: "Friendly Advice" },
          { icon: Truck, label: "Nationwide Delivery" },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-1.5 rounded-full bg-[#173f2d] px-3 py-1 text-xs font-semibold"
          >
            <Icon size={14} strokeWidth={1.8} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
