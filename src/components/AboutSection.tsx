import { Award, BookOpen, GraduationCap } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const stats = [
    {
      icon: Award,
      label: 'Current Role',
      value: 'Energy & Climate Analyst',
    },
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'LLM + BA',
    },
    {
      icon: BookOpen,
      label: 'Certifications',
      value: '10+',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-emerald-50 to-white">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-emerald-700">About Me</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1708622361402-cca8f7dd870d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZXMlMjBncmVlbiUyMGVuZXJneXxlbnwxfHx8fDE3NjE0MTgxODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Wind turbines"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
          </div>
          
          <div>
            <p className="mb-4 text-gray-700">
              Currently working within the international development space, I am focused on contributing meaningfully to global efforts that address some of the world's most urgent and complex challenges.
            </p>
            <p className="mb-4 text-gray-700">
              In my role at the African Energy Council, I focus on improving climate literacy and supporting data-informed strategies through in-depth research, ESG assessments, and analysis of industry trends and policy developments. Beyond research, I also contribute to initiatives aimed at building resilience in communities most vulnerable to climate and energy-related challenges.
            </p>
            <p className="mb-6 text-gray-700">
              My work in development touches on several areas I care about, including but not limited to energy, climate change, ESG, and gender equality. I am especially focused on shifting the way women are seen in these spaces, recognizing them not just as vulnerable groups but as powerful agents of change who are shaping a more sustainable and fair future.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat) => (
                <Card key={stat.label} className="p-6 text-center border-emerald-200 hover:border-emerald-400 transition-colors">
                  <stat.icon className="mx-auto mb-3 text-emerald-600" size={28} />
                  <div className="text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="p-8 border-emerald-200">
            <h3 className="mb-4 text-emerald-700">Current Position</h3>
            <div className="mb-3">
              <div className="text-gray-900 mb-1">Energy and Climate Change Analyst</div>
              <div className="text-gray-600">African Energy Council</div>
              <div className="text-gray-500">August 2023 – Present</div>
            </div>
            <p className="text-gray-700">
              My work involves improving climate literacy and supporting data-informed strategies through in-depth research, ESG assessments, and analysis of industry trends and policy developments. I also contribute to initiatives aimed at building resilience in communities most vulnerable to climate and energy-related challenges.
            </p>
          </Card>

          <Card className="p-8 border-emerald-200">
            <h3 className="mb-4 text-emerald-700">Education</h3>
            <div className="space-y-4">
              <div>
                <div className="text-gray-900 mb-1">Master of Laws - LLM</div>
                <div className="text-gray-600">International Law</div>
                <div className="text-gray-500">Near East University (NEU), 2019 – 2021</div>
                <div className="text-emerald-600">Grade: High Honours</div>
              </div>
              <div>
                <div className="text-gray-900 mb-1">Bachelor of Arts - BA</div>
                <div className="text-gray-600">International Relations</div>
                <div className="text-gray-500">Near East University (NEU), 2015 – 2019</div>
                <div className="text-emerald-600">Grade: Honours</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
