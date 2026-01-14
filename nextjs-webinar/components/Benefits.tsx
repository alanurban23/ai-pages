export default function Benefits() {
  const benefits = [
    {
      icon: "🎯",
      title: "Gdzie faktycznie są klienci w 2025",
      description: "Nie teoria z YouTube, tylko konkretne miejsca i strategie, które działają w 2025 roku."
    },
    {
      icon: "💬",
      title: "Jak pisać wiadomości, które otwierają drzwi",
      description: "Sprawdzone szablony i techniki cold outreach, które prowadzą do rozmów."
    },
    {
      icon: "🚀",
      title: "Jak zdobyć pierwsze zlecenia",
      description: "Nawet jeśli Twoje portfolio nie jest 'idealne' - pokażę Ci, co naprawdę przekonuje klientów."
    },
    {
      icon: "🔄",
      title: "Jak zbudować system na spokój",
      description: "System, który daje Ci pewność co do pracy i pieniędzy, bez ciągłego stresu."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-400 font-semibold mb-4">Co dostaniesz na webinarze</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Konkretne strategie <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">zdobywania klientów IT</span> w 2025
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
