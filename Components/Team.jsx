import SubHead from "./Heading/SubHead";
import SectionHead from "./Heading/SectionHead";
import TrainnerCard from "./TrainnerCard/TrainnerCard";

const Team = () => {
  // Array of team members
  const teamMembers = [
    {
      name: "Michael Johnson",
      title: "Certified Fitness Coach",
      image: "/assets/gallery/team1.png",
    },
    {
      name: "John Davis",
      title: "Strength and Conditioning Specialist",
      image: "/assets/gallery/team2.png",
    },
    {
      name: "David Martinez",
      title: "Personal Trainer and Nutrition Expert",
      image: "/assets/gallery/team3.png",
    },
    // Add more team members as needed
  ];

  return (
    <div id="team" className="bg-white py-10">
      <div className="px-5 flex justify-center flex-col items-center">
        <div className="flex flex-col text-center items-center justify-between">
          <SubHead color="main" title="Our Team Members" />
          <SectionHead
            color="black"
            title="Our Most Experienced Trainers"></SectionHead>
        </div>
      </div>
      <div className="md:flex justify-around">
        {/* Map over the teamMembers array to render TrainnerCard components */}
        {teamMembers.map((member, index) => (
          <TrainnerCard
            key={index}
            name={member.name}
            title={member.title}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
