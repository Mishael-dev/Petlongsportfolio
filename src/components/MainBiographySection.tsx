import { ImageWithFallback } from './figma/ImageWithFallback';

export function MainBiographySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h1 className="text-emerald-700">About Me</h1>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-2">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTM0OTczOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Petlong Dakhling - Professional headshot"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[3/4]"
              />
            </div>
            
            <div className="md:col-span-3">
              <p className="mb-6 text-gray-700">
                Currently working within the international development space, I am focused on contributing meaningfully to global efforts that address some of the world's most urgent and complex challenges.
              </p>
              <p className="mb-6 text-gray-700">
                In my role at the African Energy Council, I focus on improving climate literacy and supporting data-informed strategies through in-depth research, ESG assessments, and analysis of industry trends and policy developments. Beyond research, I also contribute to initiatives aimed at building resilience in communities most vulnerable to climate and energy-related challenges.
              </p>
              <p className="text-gray-700">
                My work in development touches on several areas I care about, including but not limited to energy, climate change, ESG, and gender equality. I am especially focused on shifting the way women are seen in these spaces, recognizing them not just as vulnerable groups but as powerful agents of change who are shaping a more sustainable and fair future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
