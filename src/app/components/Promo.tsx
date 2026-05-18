import { Award, Calendar, Clock, MapPin, Phone, TrendingUp } from 'lucide-react';

import promoImage from '../../assets/ChatGPT_Image_May_11__2026__05_03_49_PM__1_.png';

export function Promo() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
            LIMITED SPACES - BOOK NOW!
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            May Half Term Football Camp 2026
          </h2>
          <p className="text-xl text-gray-300">
            Intensive 3-day training program for serious young footballers
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Poster Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src={promoImage}
                alt="May Half Term Football Camp 2026 Poster"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Camp Details */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Key Info Cards */}
            <div className="bg-gray-800 rounded-xl p-6 border-l-4 border-orange-500">
              <div className="flex items-start gap-4">
                <Calendar className="text-orange-500 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Dates</h3>
                  <p className="text-gray-300">Wednesday 27th May - Friday 29th May</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border-l-4 border-green-500">
              <div className="flex items-start gap-4">
                <Clock className="text-green-500 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Time</h3>
                  <p className="text-gray-300">9:00 AM - 3:00 PM daily</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border-l-4 border-blue-500">
              <div className="flex items-start gap-4">
                <MapPin className="text-blue-500 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-gray-300">
                    Nork Park<br />
                    The Drive, Banstead<br />
                    Surrey, SM7 1DQ
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">Pricing</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-sm mb-1">Single Day</p>
                  <p className="text-3xl font-bold">£30</p>
                  <p className="text-xs opacity-90">per day</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 backdrop-blur border-2 border-white/50">
                  <p className="text-sm mb-1 flex items-center gap-1">
                    All 3 Days
                    <span className="bg-green-500 text-xs px-2 py-0.5 rounded-full">SAVE £15!</span>
                  </p>
                  <p className="text-3xl font-bold">£25</p>
                  <p className="text-xs opacity-90">per day</p>
                </div>
              </div>
            </div>

            {/* What You'll Get */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="text-green-500" size={28} />
                What You'll Get
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <TrendingUp className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Focused drills & Football IQ development</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Technical skills & game intelligence training</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Fitness training & progression</span>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">
                    <strong>Full Scout Report:</strong> Attend all 3 days and receive a comprehensive report detailing your strengths, weaknesses, and development areas
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-3">Ready to Level Up?</h3>
              <div className="flex items-center justify-center gap-3 mb-4">
              <Phone className="text-white" size={24} />
                <a
                  href="https://wa.me/447476811213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl font-bold hover:underline"
                >
                  07476 811213
                </a>
              </div>
              <p className="text-sm opacity-90">
                WhatsApp Lewis & Judah to confirm or ask questions
              </p>
              <p className="text-lg font-bold mt-4 animate-pulse">
                Ages 11-14 • Limited Spaces Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
