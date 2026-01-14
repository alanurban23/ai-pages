'use client';

import { useState } from 'react';

export default function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    level: '',
    goal: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form submission logic (e.g., send to API)
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <section id="zapis" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-12">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-3xl font-bold text-white mb-4">Dziękuję za zapis!</h3>
            <p className="text-gray-300 mb-6">
              Link do webinaru oraz przypomnienie zostanie wysłane na Twój e-mail przed startem.
            </p>
            <p className="text-purple-400 font-semibold">
              📧 Sprawdź swoją skrzynkę: {formData.email}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="zapis" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Zapisz się na darmowy webinar
            </h2>
            <p className="text-gray-300">
              Zostaw swoje dane, a wyślę Ci link do pokoju oraz przypomnienie przed startem.
              <br />
              <span className="text-purple-400 font-semibold">Liczba miejsc jest ograniczona.</span>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Imię
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="np. Karol"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                E-mail (link do webinaru)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="np. karol.dev@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Level */}
            <div>
              <label htmlFor="level" className="block text-sm font-medium text-gray-300 mb-2">
                Poziom doświadczenia
              </label>
              <select
                id="level"
                name="level"
                required
                value={formData.level}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Wybierz...</option>
                <option value="junior">Junior (0-2 lata)</option>
                <option value="mid">Mid (2-5 lat)</option>
                <option value="senior">Senior (5+ lat)</option>
                <option value="freelancer">Freelancer</option>
                <option value="bootcamp">Po bootcampie/kursie</option>
              </select>
            </div>

            {/* Goal */}
            <div>
              <label htmlFor="goal" className="block text-sm font-medium text-gray-300 mb-2">
                Twój główny cel
              </label>
              <select
                id="goal"
                name="goal"
                required
                value={formData.goal}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Wybierz...</option>
                <option value="first-clients">Zdobyć pierwsze zlecenia</option>
                <option value="better-rates">Lepsze stawki i kontrakty</option>
                <option value="stable-income">Stabilny dopływ klientów</option>
                <option value="leave-platforms">Uniezależnić się od platform</option>
                <option value="b2b-contracts">Kontrakty B2B</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Zapisz mnie na webinar
            </button>

            <p className="text-center text-sm text-gray-400">
              🚀 Twoje dane są w 100% bezpieczne.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
