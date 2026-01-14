export default function WhoIsThisFor() {
  const audience = [
    {
      icon: "🌱",
      title: "Junior dev szukający pierwszych zleceń",
      description: "Nie wiesz, jak zacząć i gdzie szukać pierwszych klientów."
    },
    {
      icon: "📈",
      title: "Mid, który chce lepszych stawek",
      description: "Masz doświadczenie, ale nie wiesz, jak negocjować wyższe stawki."
    },
    {
      icon: "💼",
      title: "Freelancer szukający powtarzalnych klientów",
      description: "Męczysz się platformami jak Upwork i chcesz własnych, stałych klientów."
    },
    {
      icon: "🎓",
      title: "Osoby po bootcampach i kursach",
      description: "Skończyłeś kurs, ale nie wiesz, jak przełożyć to na realne zlecenia."
    }
  ];

  const painPoints = [
    "Masz dość wysyłania CV w próżnię i czekania na ogłoszenia",
    "Chcesz lepszych stawek, ale nie wiesz, jak je negocjować",
    "Twoje portfolio nie jest 'idealne' i boisz się pokazywać je klientom",
    "Nie wiesz, gdzie faktycznie są klienci w 2025 roku",
    "Chcesz przejąć kontrolę nad tym, skąd biorą się Twoje zlecenia",
    "Chcesz zbudować system, który daje spokój o pracę i pieniądze"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        {/* Pain Points */}
        <div className="text-center mb-16">
          <p className="text-gray-400 mb-4">
            Dla devów, którzy nie chcą już liczyć na „szczęście", tylko na własny system.
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            Ten webinar jest dla Ciebie, jeśli jesteś{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              juniorem, miderem lub freelancerem w IT
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-16">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 text-left bg-red-500/10 border border-red-500/20 rounded-lg p-4"
              >
                <span className="text-red-400 text-xl mt-1">✗</span>
                <p className="text-gray-300">{point}</p>
              </div>
            ))}
          </div>

          <div className="inline-block relative">
            <p className="text-2xl font-bold text-purple-400 transform -rotate-2">
              BRZMI ZNAJOMO?
            </p>
          </div>
        </div>

        {/* Target Audience */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Dla kogo jest ten webinar?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audience.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
