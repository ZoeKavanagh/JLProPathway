import { CheckCircle2, Clock, MapPin, Users } from 'lucide-react';

import { Card } from './ui/card';

export function Services() {
  const programs = [
    {
      title: '1-on-1 Elite Training',
      icon: Users,
      price: 'Custom Pricing',
      features: [
        'Personalized training plans',
        'Analysis & feedback',
        'Technical skill development',
        'Position-specific coaching',
        'Performance tracking',
      ],
      popular: false,
    },
    {
      title: 'Small Group Sessions',
      icon: Users,
      price: 'From £16/session',
      features: [
        'Max 8 players per group',
        '2 hour intense session',
        'Competitive training environment',
        'Team tactics & strategy',
        'Game situation drills',
        'Monthly progress reports',
      ],
      popular: true,
    },
    {
      title: 'May Half Term Pro Pathway 3 Day Program',
      icon: MapPin,
      price: '£30/day or £25/day for 3 days',
      features: [
        '11 - 14 years',
        '9am-3pm 27th May - 29th May',
        'Trial preparation & scouting',
        'Analysis & feedback',
        'Technical skill development',
        'Position-specific coaching',
        'Performance tracking',
      ],
      popular: false,
    },
  ];

  const schedule = [
    { day: 'Friday', time: '5:00 PM - 7:00 PM', type: 'Group Sessions' },
    { day: 'Monday - Thursday', time: '5:00 PM - 7:00 PM', type: '1-on-1 Training' },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the training path that fits your goals and ambitions
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`relative p-8 hover:shadow-2xl transition-shadow duration-300 ${
                program.popular
                  ? 'border-green-600 border-2 shadow-lg'
                  : 'border-gray-200'
              }`}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <program.icon className="text-green-600" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {program.title}
              </h3>
              <p className="text-3xl font-bold text-green-600 mb-6">
                {program.price}
              </p>

              <ul className="space-y-4">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Training Schedule */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="text-green-600" size={32} />
            <h3 className="text-3xl font-bold text-gray-900">
              Training Schedule
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {schedule.map((slot, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors"
              >
                <div>
                  <p className="font-bold text-gray-900 text-lg">{slot.day}</p>
                  <p className="text-green-600 font-semibold">{slot.type}</p>
                </div>
                <p className="text-gray-700 font-semibold">{slot.time}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8">
            All sessions held at premium facilities across the region. Specific locations provided upon booking.
          </p>
        </div>
      </div>
    </section>
  );
}
