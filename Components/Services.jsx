import React from "react";
import SubHead from "./Heading/SubHead";
import SectionHead from "./Heading/SectionHead";
import ServiceCard from "./ServiceCard/ServiceCard";
import { FaChessRook, FaDumbbell, FaNotesMedical } from "react-icons/fa";
const serviceCardsData = [
  {
    icon: "/1.gif",
    title: "Health Caring",
    description:
      "The sea freight service has grown considerably in recent years. We spend time getting to know...",
    path: "/services",
    content: "Discover more About us",
  },
  {
    icon: "/2.gif",
    title: "Quality Equipment",
    status: "active",
    description:
      "The sea freight service has grown considerably in recent years. We spend time getting to know...",
    path: "/services",
    content: "Discover more About us",
  },
  {
    icon: "/3.gif",
    title: "Gym Strategies",
    description:
      "The sea freight service has grown considerably in recent years. We spend time getting to know...",
    path: "/services",
    content: "Discover more About us",
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="bg-fixed bg-cover bg-center pt-20 pb-10"
      //   style={{ backgroundImage: `url(/assets/gallery/service.png)` }}
    >
      <div className="px-5 ">
        <div className="flex flex-col justify-center items-center text-center">
          <SubHead color="main" title="Our Services For You" />
          <div className="lg:flex items-center justify-between">
            <SectionHead
              color="black"
              title="Push Your Limits Forward We Offer To You "></SectionHead>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 flex-wrap mt-5">
        {serviceCardsData.map((data, index) => (
          <ServiceCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Services;
