import { ArrowRight } from 'lucide-react';

export function IntroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-emerald-700">Contributing to Global Solutions</h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Currently working within the international development space, I am focused on contributing meaningfully to global efforts that address some of the world's most urgent and complex challenges. In my role at the African Energy Council, I focus on improving climate literacy and supporting data-informed strategies through in-depth research, ESG assessments, and analysis of industry trends and policy developments.
          </p>
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors group"
          >
            Read more about my journey
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
