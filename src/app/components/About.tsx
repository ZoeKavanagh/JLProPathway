import { Target, Trophy, Users } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Precision Training',
      description: 'Every session is meticulously planned to maximize skill development and performance gains.',
    },
    {
      icon: Trophy,
      title: 'Winning Mindset',
      description: 'We build mental resilience and confidence to help you excel under pressure.',
    },
    {
      icon: Users,
      title: 'Personal Development',
      description: 'Individual attention and tailored programs designed for your unique journey.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why JL Pro Pathway?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just about football skills—we're about building complete athletes who are ready to compete at the highest levels.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-green-50 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6">
                <value.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1715277559756-2c667f3ec983?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMGNvYWNoaW5nJTIwdHJhaW5pbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc1MTM4NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Training session"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center">
            <div className="max-w-2xl mx-auto px-8 text-white">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed">
                At JL Pro Pathway, we're committed to transforming aspiring footballers into elite athletes. Through innovative training methods, personalized coaching, and an unwavering focus on development, we create pathways to professional success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
