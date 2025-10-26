import { Battery, Scale, Leaf, Users } from 'lucide-react';

export function AreasOfFocus() {
  const areas = [
    {
      icon: Battery,
      title: 'Energy & Climate Policy',
      description: 'Analyzing the intersection of energy access and climate action.',
    },
    {
      icon: Leaf,
      title: 'ESG & Sustainability',
      description: 'Conducting ESG assessments and data-informed strategy.',
    },
    {
      icon: Users,
      title: 'Gender in Development',
      description: 'Championing women as powerful agents of sustainable change.',
    },
    {
      icon: Scale,
      title: 'International Law',
      description: 'Applying a legal framework to global development challenges.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-emerald-700">Core Expertise</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {areas.map((area, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg hover:bg-white transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4 mx-auto group-hover:bg-emerald-200 transition-colors">
                <area.icon className="text-emerald-600" size={28} />
              </div>
              <h3 className="mb-3 text-gray-900">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
