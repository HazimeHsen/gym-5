import React from "react";
import SubHead from "./Heading/SubHead";
import SectionHead from "./Heading/SectionHead";
import PlanCard from "./Plans/PlanCard";

const Plans = () => {
  const data = [
    {
      planName: "Basic Plan",
      price: 29.99,
      plans: [
        { title: "Access to cardio equipment" },
        { title: "Basic strength training" },
        { title: "Limited group classes" },
      ],
    },
    {
      planName: "Premium Plan",
      price: 49.99,
      plans: [
        { title: "Full access to all equipment" },
        { title: "Unlimited group classes" },
        { title: "Personalized training sessions" },
      ],
    },
    {
      planName: "Ultimate Plan",
      price: 79.99,
      plans: [
        { title: "VIP access to exclusive facilities" },
        { title: "Personalized nutrition plan" },
        { title: "24/7 personal trainer availability" },
      ],
    },
  ];

  return (
    <div id="plans" className="bg-white py-10 px-5">
      <div className="flex justify-center mb-5">
        <div className="flex items-center flex-col justify-center">
          <SubHead color="main" title="Be Our Member" />
          <SectionHead color="black" title="Our Plans"></SectionHead>
        </div>
      </div>
      <div className="flex justify-center gap-4 flex-wrap">
        {data &&
          data.map((plan) => (
            <PlanCard key={plan.planName} data={plan}></PlanCard>
          ))}
      </div>
    </div>
  );
};

export default Plans;
