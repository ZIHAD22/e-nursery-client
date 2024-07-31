import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import slider1 from "../../assets/images/1.jpg";

const Hero = () => {
  return (
    <div className="mx-auto">
      <Carousel className="w-full h-[10%] mx-auto">
        <CarouselContent>
          <CarouselItem key="1">
            <div className="p-1 h-[700px]">
              <img src={slider1} alt="" />
            </div>
          </CarouselItem>
          <CarouselItem key="1">
            <div className="p-1 h-[700px]">
              <img src={slider1} alt="" />
            </div>
          </CarouselItem>
          <CarouselItem key="1">
            <div className="p-1 h-[700px]">
              <img src={slider1} alt="" />
            </div>
          </CarouselItem>
          <CarouselItem key="1">
            <div className="p-1 h-[700px]">
              <img src={slider1} alt="" />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hover:bg-[var(--wGreen)] hover:text-[var(--bGreen)]" />
        <CarouselNext className="hover:bg-[var(--wGreen)] hover:text-[var(--bGreen)]" />
      </Carousel>
    </div>
  );
};

export default Hero;
