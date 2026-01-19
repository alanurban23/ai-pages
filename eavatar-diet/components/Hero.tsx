export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-nature">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-50 rounded-full blur-3xl opacity-60"></div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fadeInUp">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
              Centrum Zdrowia w Rzeszowie
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Holistyczne podejście<br />
              <span className="text-gradient">do Twojego zdrowia</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Łączymy medycynę konwencjonalną z mądrością medycyny chińskiej i ajurwedyjskiej.
              Znajdziemy przyczynę Twoich dolegliwości i przywrócimy równowagę organizmu.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#kontakt" className="btn-primary">
                Umów konsultację
              </a>
              <a href="#uslugi" className="btn-secondary">
                Poznaj nasze usługi
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gradient">10+</div>
                <div className="text-sm text-gray-500">lat doświadczenia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">1000+</div>
                <div className="text-sm text-gray-500">zadowolonych klientów</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">4</div>
                <div className="text-sm text-gray-500">obszary specjalizacji</div>
              </div>
            </div>
          </div>

          {/* Right content - Visual */}
          <div className="relative hidden md:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main circle */}
              <div className="absolute inset-0 bg-gradient-avatar rounded-full opacity-10 animate-pulse-slow"></div>
              <div className="absolute inset-8 bg-gradient-avatar rounded-full opacity-20"></div>
              <div className="absolute inset-16 bg-gradient-avatar rounded-full opacity-30"></div>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gradient-avatar rounded-full flex items-center justify-center mb-4 shadow-2xl">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-700">Zdrowie</p>
                  <p className="text-sm text-gray-500">w równowadze</p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-12 right-8 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600">🌿</span>
                  </div>
                  <span className="text-sm font-medium">Naturalne metody</span>
                </div>
              </div>

              <div className="absolute bottom-12 left-0 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600">⚖️</span>
                  </div>
                  <span className="text-sm font-medium">Holistyczne podejście</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
