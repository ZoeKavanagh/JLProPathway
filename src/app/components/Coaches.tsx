import { Award, BookOpen, Dumbbell } from 'lucide-react';

import judeImage from  '../../assets/49bf6d6361de35a75f64952ae8bc2c49fdb4b341.png';
import lewisImage from '../../assets/3f50f5be5e7467af64bb993a9d288352d0f816fc.png';

export function Coaches() {
  const coaches = [
    {
      name: 'Jude',
      image: judeImage,
      specialties: ['Strength & Conditioning', 'Tactical Awareness', 'Youth Development'],
      bio: 'Judah is a dedicated coach with a strong background in football, strength and conditioning, and amateur boxing. With experience leading football and boxing sessions at university level, he brings a disciplined and high-energy approach to athlete development. Passionate about helping young people grow, Judah creates an environment where players can build confidence, challenge themselves, and understand what it takes to reach the next level.',
    },
    {
      name: 'Lewis',
      image: lewisImage,
      specialties: ['Technical Skills', 'Mental Performance', 'Football IQ'],
      bio: 'Lewis is a dedicated coach with experience in high-level football, karate, and athletics. His background as both an elite athlete and coach gives him a well-rounded, performance-driven approach to player development. He combines technical knowledge, discipline, high-performance psychology and competitive experience to help athletes improve their skills, confidence, and understanding of the game.',
    },
  ];

  return (
    <section id="coaches" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Meet Your Coaches
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from experienced professionals dedicated to your success
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden bg-gray-800 hover:transform hover:scale-105 transition-all duration-300"
            >
              {/* Coach Image */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                    coach.name === 'Jude'
                      ? 'object-[center_18%] md:object-[center_22%]'
                      : 'object-center'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
              </div>

              {/* Coach Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold mb-2">{coach.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {coach.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-green-600 text-white text-sm rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed">{coach.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Credentials */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Award className="mx-auto mb-4 text-green-400" size={48} />
            <h4 className="text-xl font-bold mb-2">UEFA Licensed</h4>
            <p className="text-gray-400">Certified coaching qualifications</p>
          </div>
          <div className="text-center p-6">
            <BookOpen className="mx-auto mb-4 text-green-400" size={48} />
            <h4 className="text-xl font-bold mb-2">Proven Methods</h4>
            <p className="text-gray-400">Data-driven training approaches</p>
          </div>
          <div className="text-center p-6">
            <Dumbbell className="mx-auto mb-4 text-green-400" size={48} />
            <h4 className="text-xl font-bold mb-2">Holistic Development</h4>
            <p className="text-gray-400">Physical & mental performance</p>
          </div>
        </div>
      </div>
    </section>
  );
}