export default function About() {
  return (
    <section id="o-nas" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image placeholder */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-green-50 to-green-100 rounded-3xl overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-40 h-40 mx-auto bg-gradient-avatar rounded-full flex items-center justify-center mb-6 shadow-xl">
                    <span className="text-6xl">👩‍⚕️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Lucyna Mieszek</h3>
                  <p className="text-gray-600">Dietoterapeutka</p>
                  <p className="text-sm text-gray-500 mt-1">Właścicielka Centrum Avatar</p>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-avatar rounded-2xl opacity-20"></div>
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold text-gradient">10+ lat</div>
              <div className="text-gray-600">doświadczenia</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              O nas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Centrum Zdrowia Avatar<br />
              <span className="text-gradient">od 2014 roku</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Centrum Zdrowia AVATAR zostało powołane w roku 2014. Firma powstała przy udziale środków unijnych,
              które w całości przeznaczono na zakup zaawansowanego urządzenia do diagnostyki.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Właścicielką Centrum Zdrowia AVATAR jest <strong>dietoterapeutka z powołania i zamiłowania</strong>.
              Od 10 lat łączy elementy medycyny chińskiej i ajurwedyjskiej w pracy z ludzkim organizmem.
              Dla przywrócenia równowagi organizmu korzysta zarówno z medycyny konwencjonalnej, jak i niekonwencjonalnej.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Naszym celem jest zapewnienie <strong>kompleksowej opieki medycznej</strong> i edukacja w zakresie profilaktyki.
              Kładziemy szczególny nacisk na połączenie naturalnego funkcjonowania organizmu z najnowszymi rozwiązaniami
              leczniczymi w formie terapii kwantowej.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Medycyna chińska</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Ajurweda</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Diagnostyka kwantowa</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Holistyczne podejście</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
