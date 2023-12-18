"use client";
import React, { useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import ClientReviewCard from "./ClientReviewCard/ClientReviewCard";
import TrainnerCard from "./TrainnerCard/TrainnerCard";
import SubHead from "./Heading/SubHead";
import Button from "./Buttons/Button";
import PlanCard from "./Plans/PlanCard";
import SectionHead from "./Heading/SectionHead";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChessRook,
  FaDumbbell,
  FaNotesMedical,
} from "react-icons/fa";
const serviceCardsData = [
  {
    icon: FaNotesMedical,
    title: "Health Caring",
    description:
      "The sea freight service has grown considerably in recent years. We spend time getting to know...",
    path: "/services",
    content: "Discover more About us",
  },
  {
    icon: FaDumbbell,
    title: "Quality Equipment",
    status: "active",
    description:
      "The sea freight service has grown considerably in recent years. We spend time getting to know...",
    path: "/services",
    content: "Discover more About us",
  },
  {
    icon: FaChessRook,
    title: "Gym Strategies",
    description:
      "The sea freight service has grown considerably in recent years. We spend time getting to know...",
    path: "/services",
    content: "Discover more About us",
  },
];

const Landing = () => {
  // Handle Our Plans
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

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Turner",
      feedback:
        "I love this gym! The trainers are knowledgeable and motivating, the equipment is top-notch, and the atmosphere is always welcoming. I've seen fantastic results since I joined.",
      title: " Fitness Enthusiast",
    },
    {
      name: "David Rodriguez",
      feedback:
        "I've been a member of this gym for a year, and I couldn't be happier. The cleanliness and hygiene standards are excellent, and the staff is friendly and helpful.",
      title: "Loyal Member",
    },
    {
      name: "Emily Foster",
      feedback:
        "The group fitness classes at this gym are outstanding. The instructors are passionate and energetic, and the variety of classes keeps me engaged and motivated to work out regularly. ",
      title: "Group Fitness Fanatic",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex(
      (currentTestimonialIndex + 1) % testimonials.length
    );
  };

  const previousTestimonial = () => {
    setCurrentTestimonialIndex(
      (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Handel Video Status
  const [video, setVideo] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-fixed h-screen bg-cover bg-center md:bg-center pt-40 pb-6 md:pb-40 xl:h-screen md:flex items-center justify-between"
        style={{ backgroundImage: `url(/assets/hero/h1_hero.png)` }}>
        <div className="px-4 md:px-10">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-main"></div>
            <SubHead color="white" title="With Patric Potter" />
          </div>
          <h2
            className="text-white text-extraLarge md:text-[50px] md:leading-none md:w-[80%] xl:w-[70%] font-bold uppercase py-16"
            style={{ fontFamily: "'Teko', sans-serif" }}>
            Build Perfect body Shape for good and Healthy life.
          </h2>
          <Button>
            <Link href="/dashboard" className="md:px-2">
              Become A Member
            </Link>
          </Button>
        </div>
      </div>
      <div
        id="about"
        className="my-20 lg:flex items-center justify-between xl:my-40">
        <div className="px-5 lg:w-1/2">
          <Image
            width={300}
            height={300}
            className="block w-full md:w-fit max-w-[300px] md:max-w-[500px] mx-auto"
            src="/assets/gallery/about.png"
            alt="Fitness one About"
          />
        </div>
        <div className="py-10 px-4 md:px-10 lg:w-1/2">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-orange"></div>
            <SubHead color="main" title="About our gym" />
          </div>
          <SectionHead
            color="black"
            title="Build Perfect Body Shape For Good And Healthy Life."></SectionHead>
          <p className="text-base text-blackGray">
            Brook presents your services with flexible, convenient and cdpose
            layouts. You can select your favorite layouts & elements for cular
            ts with unlimited ustomization possibilities. Pixel-perfect
            replication of the designers is intended.
          </p>
          <p className="text-base text-blackGray my-6">
            Brook presents your services with flexible, convefnient and chient
            anipurpose layouts. You can select your favorite layouts.
          </p>
          <div className="my-10">
            <Button>
              <Link href="/dashboard" className="md:px-2">
                Become A Member
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Service Section */}
      <div
        id="services"
        className="bg-fixed bg-cover bg-center pt-20 pb-10"
        style={{ backgroundImage: `url(/assets/gallery/service.png)` }}>
        <div className="px-5 ">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-white"></div>
            <SubHead color="main" title="Our Services For You" />
          </div>
          <div className="lg:flex items-center justify-between">
            <SectionHead
              color="white"
              title="Push Your Limits Forward We Offer To You "></SectionHead>
          </div>
        </div>
        <div className="flex justify-center gap-4 flex-wrap mt-5">
          {serviceCardsData.map((data, index) => (
            <ServiceCard key={index} {...data} />
          ))}
        </div>
      </div>
      {/* Feedback Section */}
      <div
        id="testemoials"
        className="mt-20 lg:flex items-center justify-between ">
        <div className="px-5 lg:w-1/2">
          <Image
            className="block w-full md:w-fit max-w-[300px] md:max-w-[500px] mx-auto"
            src="/assets/gallery/feedback.png"
            alt="Fitness one Feedback"
            height={300}
            width={300}
          />
        </div>
        <div className="py-10 px-4 md:px-10 lg:w-1/2">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-main"></div>
            <SubHead color="main" title="Client Feedback" />
          </div>

          <SectionHead
            color="black"
            title="What Our Client Think About Our Gym"></SectionHead>
          <div>
            <ClientReviewCard
              {...testimonials[currentTestimonialIndex]}></ClientReviewCard>
            <div className="flex  space-x-4 mt-10">
              <button onClick={previousTestimonial}>
                <FaArrowLeft size={25} color="#f04e3c" />
              </button>
              <button onClick={nextTestimonial}>
                <FaArrowRight size={25} color="#f04e3c" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Our Plans */}
      <div id="plans" className="bg-white py-10 px-5">
        <div className="flex justify-center mb-5">
          <div>
            <div className="flex items-center">
              <div className="h-[2px] w-[100px] bg-main"></div>
              <SubHead color="main" title="Be Our Member" />
            </div>
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

      {/* Team Members */}
      <div id="team" className="bg-white py-10">
        <div className="px-5 flex justify-center flex-col items-center">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-main"></div>
            <SubHead color="main" title="Our Team Members" />
          </div>
          <div className="lg:flex items-center justify-between">
            <SectionHead
              color="black"
              title="Our Most Exprienced Trainers"></SectionHead>
          </div>
        </div>
        <div className="md:flex justify-around">
          <TrainnerCard
            name="Michael Johnson"
            title="Certified Fitness Coach"
            image="/assets/gallery/team1.png"></TrainnerCard>
          <TrainnerCard
            name="John Davis"
            title="Strength and Conditioning Specialist"
            image="/assets/gallery/team2.png"></TrainnerCard>
          <TrainnerCard
            name="David Martinez"
            title="Personal Trainer and Nutrition Expert"
            image="/assets/gallery/team3.png"></TrainnerCard>
        </div>
      </div>
      {/* Time Schedule */}
      {/* <div className="bg-white pt-20 pb-10">
        <div className="px-5 text-center ">
          <div className="flex items-center justify-center">
            <div className="h-[2px] w-[100px] bg-main"></div>
            <SubHead color="main" title="Our Time Schedule" />
          </div>
          <div className="w-full lg:w-[60%] mx-auto">
            <SectionHead
              color="black"
              title="Select The Perfect Time You Need Now "
            ></SectionHead>
          </div>
        </div>
        <div className="my-20 font-popins">
          <ul className="bg-sky px-4 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:px-20 gap-4">
            <li className="px-6 py-2 text-[24px]  text-center">Suturday</li>
            <li className="px-6 py-2 text-[24px]  text-center">Sunday</li>
            <li className="px-6 py-2 text-[24px]  text-center">Monday</li>
            <li className="px-6 py-2 text-[24px] bg-main text-white text-center">
              Tuesday
            </li>
            <li className="px-6 py-2 text-[24px]  text-center">Wednesday</li>
            <li className="px-6 py-2 text-[24px]  text-center">Thursday</li>
            <li className="px-6 py-2 text-[24px]  text-center">Friday</li>
          </ul>
          <ul className="bg-sky px-4 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:px-20 gap-4">
            <li className="px-6 py-6 text-[24px]  text-center  ">
              <div>
                <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
            <li className="px-6 py-6 text-[24px]  text-center bg-main ">
              <div className="text-white">
                <h5 className="bg-white text-black px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
            <li className="px-6 py-6 text-[24px]  text-center  ">
              <div>
                <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
            <li className="px-6 py-6 text-[24px]  text-center  ">
              <div>
                <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
            <li className="px-6 py-6 text-[24px]  text-center  ">
              <div>
                <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Landing;
