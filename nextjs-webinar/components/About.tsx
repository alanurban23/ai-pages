export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Kto prowadzi?
          </h2>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6 flex items-center justify-center">
              <span className="text-5xl font-bold text-white">AU</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Alan Urban</h3>

            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              Nazywam się <strong className="text-white">Alan Urban</strong>. Od lat pracuję jako
              programista i konsultant, a <strong className="text-blue-400">od początku tego roku
              podpisałem 4 kontrakty B2B</strong> na usługi programistyczne.
            </p>

            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              Na tym webinarze nie będzie teorii z YouTube – pokażę Ci konkretny system zdobywania klientów IT,
              który pozwala mi nie martwić się o pracę, mieć bezpieczeństwo finansowe
              i samemu decydować, z kim pracuję i za ile.
            </p>

            <div className="grid md:grid-cols-3 gap-6 w-full mt-8">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                <div className="text-3xl mb-2">📝</div>
                <div className="text-2xl font-bold text-white mb-1">4</div>
                <p className="text-gray-400 text-sm">Kontrakty B2B w 2025</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                <div className="text-3xl mb-2">💼</div>
                <div className="text-2xl font-bold text-white mb-1">0</div>
                <p className="text-gray-400 text-sm">Wysłanych CV</p>
              </div>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                <div className="text-3xl mb-2">🎯</div>
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <p className="text-gray-400 text-sm">Powtarzalny system</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
