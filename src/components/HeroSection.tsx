import { ArrowRight, Leaf } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-white to-green-50 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="mb-4 text-gray-900">
              Petlong Dakhling
            </h1>
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="text-emerald-600" size={24} />
              <span className="text-emerald-700 italic">
                "Born and raised in 'Energy Poverty', thankfully, I'm now working to Solve it."
              </span>
            </div>
            <p className="mb-8 text-gray-600 max-w-xl">
              Energy and Climate Change Analyst focused on building a sustainable, equitable, and resilient future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                Get in Touch
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button 
                variant="outline"
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-emerald-600 text-emerald-700 hover:bg-emerald-50"
              >
                View My Work
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="https://media.licdn.com/dms/image/v2/D4D03AQHj_NXhk6hjMg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714938478803?e=1762992000&v=beta&t=9e_LvCzsgFqzEPJx9JmD7MKSdytSfHMxkRNgQ5-gsOc" 
                alt="Profile photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-200 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
