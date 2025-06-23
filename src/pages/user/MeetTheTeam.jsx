import React from 'react';

const team = [
  {
    name: 'Juliet Esinam',
    role: 'Tech & Back end Developer',
    imageUrl: 'https://via.placeholder.com/150',
    bio: ' Juliet brings flavor and strategy together.',
  },
  {
    name: 'Jedidah Roberts',
    role: 'Tech & Front end Developer',
    imageUrl: 'https://via.placeholder.com/150',
    bio: 'Engineer with a love for recipes and systems that scale.',
  },
  {
    name: 'Jennifer',
    role: 'Chef Community Manager',
    imageUrl: 'https://via.placeholder.com/150',
    bio: 'Connecting culinary creatives from around the globe.',
  },
  {
    name: 'Ebo',
    role: 'Chef Community Manager',
    imageUrl: 'https://via.placeholder.com/150',
    bio: 'Connecting culinary creatives from around the globe.',
  },
];

const MeetTheTeam = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10">Meet the Team</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {team.map((member) => (
          <div key={member.name} className="text-center">
            <img
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              src={member.imageUrl}
              alt={member.name}
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-orange-600">{member.role}</p>
            <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
