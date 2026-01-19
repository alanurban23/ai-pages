export default function Services() {
  const services = [
    {
      id: "dieta",
      icon: "🥗",
      title: "DIETA",
      subtitle: "Nauka poprawnego żywienia",
      description: "Zależnie od potrzeb otrzymujesz jadłospis lub schemat żywieniowy, wsparte konsultacjami telefonicznymi. Plan jest zapisywany w indywidualnym kalendarzu z dostępem online.",
      features: [
        "Jadłospis 7-dniowy lub schemat żywieniowy",
        "2 konsultacje telefoniczne miesięcznie",
        "Indywidualny kalendarz online",
        "Dostosowanie do Twoich potrzeb"
      ],
      color: "green"
    },
    {
      id: "ruch",
      icon: "🏃",
      title: "RUCH",
      subtitle: "Aktywność fizyczna i narząd ruchu",
      description: "Rozpiska treningów, rehabilitacja i suplementacja. Wspomagamy redukcję wagi, budowanie masy oraz walkę z dolegliwościami kręgosłupa i stawów.",
      features: [
        "Wykaz treningów z nagraniami",
        "Rehabilitacja i ćwiczenia",
        "Suplementacja",
        "Badanie niedoborów"
      ],
      color: "blue"
    },
    {
      id: "terapia",
      icon: "🔬",
      title: "TERAPIA",
      subtitle: "Diagnostyka i leczenie holistyczne",
      description: "Na podstawie diagnostyki kwantowej oraz wywiadu żywieniowego określamy stan Twojego organizmu i znajdujemy przyczynę dolegliwości. W modelu holistycznym opracowujemy zalecenia.",
      features: [
        "Diagnostyka kwantowa",
        "Testy alergii i nietolerancji",
        "Ocena niedoborów",
        "Zalecenia dietetyczne i suplementacyjne",
        "Terapie wspierające (akupunktura, masaż, refleksologia)"
      ],
      color: "purple"
    },
    {
      id: "profilaktyka",
      icon: "🛡️",
      title: "PROFILAKTYKA",
      subtitle: "Dla osób zdrowych",
      description: "Zdrowi ludzie również mogą czuć się lepiej, mieć więcej energii i zachować zdrowie na długie lata. Profilaktyka to klucz do długiego i zdrowego życia.",
      features: [
        "Badania profilaktyczne",
        "Plan żywieniowy prewencyjny",
        "Monitorowanie stanu zdrowia",
        "Edukacja zdrowotna"
      ],
      color: "orange"
    }
  ];

  const colorClasses: Record<string, { bg: string; text: string; light: string }> = {
    green: { bg: "bg-green-500", text: "text-green-600", light: "bg-green-50" },
    blue: { bg: "bg-blue-500", text: "text-blue-600", light: "bg-blue-50" },
    purple: { bg: "bg-purple-500", text: "text-purple-600", light: "bg-purple-50" },
    orange: { bg: "bg-orange-500", text: "text-orange-600", light: "bg-orange-50" }
  };

  return (
    <section id="uslugi" className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Nasze usługi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Kompleksowa opieka<br />
            <span className="text-gradient">dla Twojego zdrowia</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferujemy cztery główne obszary wsparcia, które pozwalają nam zapewnić
            kompleksową opiekę nad Twoim zdrowiem i dobrym samopoczuciem.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-3xl p-8 shadow-lg card-hover transition-smooth"
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 ${colorClasses[service.color].light} rounded-2xl flex items-center justify-center text-3xl flex-shrink-0`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${colorClasses[service.color].text}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{service.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-6 h-6 ${colorClasses[service.color].light} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <svg className={`w-4 h-4 ${colorClasses[service.color].text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#kontakt"
                className={`inline-flex items-center gap-2 ${colorClasses[service.color].text} font-semibold hover:gap-3 transition-all`}
              >
                Dowiedz się więcej
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Nie wiesz, który pakiet wybrać? Skontaktuj się z nami - pomożemy dobrać odpowiednią usługę.
          </p>
          <a href="#kontakt" className="btn-primary inline-block">
            Umów bezpłatną konsultację
          </a>
        </div>
      </div>
    </section>
  );
}
