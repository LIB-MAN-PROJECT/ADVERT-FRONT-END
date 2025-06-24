import React from "react";
import meet from "../../assets/meet.jpg";

const team = [
  {
    name: "Ebo",
    role: "Back-end Developer",
    imageUrl: "https://via.placeholder.com/150",
    bio: "Back-end developer learning and growing with every build.",
  },
  {
    name: "Juliet Esinam",
    role: "Back-end Developer",
    imageUrl: "https://via.placeholder.com/150",
    bio: "Back-end developer learning and growing with every build.",
  },
  {
    name: "Jedidah Roberts",
    role: "Front-end Developer",
    imageUrl: meet,
    bio: "Passionate about creating stunning UIs using React and Tailwind CSS.",
  },
  {
    name: "Jennifer",
    role: "Front-end Developer",
    imageUrl: "https://via.placeholder.com/150",
    bio: "Crafts clean user interfaces with React and Tailwind CSS.",
  },
  
];

const MeetTheTeam = () => {
  return (
    <section className="bg-orange-50 py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
        Meet the Team
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {team.map((member) => (
          <div
            key={member.name}
            className="text-center bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <img
              className="w-36 h-36 mx-auto rounded-full object-cover mb-6 border-4 border-orange-100"
              src={member.imageUrl}
              alt={member.name}
            />
            <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
            <p className="text-orange-600 font-semibold text-sm mb-2">{member.role}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
