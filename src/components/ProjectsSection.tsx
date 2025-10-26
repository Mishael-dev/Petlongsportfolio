import { ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Why You Should Care About Climate Change as a Nigerian',
      type: 'Public Advocacy',
      description: 'An op-ed written for a mainstream Nigerian audience to connect the abstract concept of climate change to tangible, local impacts and the urgent need for collective action.',
      image: 'https://images.unsplash.com/photo-1565011471985-8a450248b005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGltYXRlJTIwY2hhbmdlJTIwZW52aXJvbm1lbnRhbHxlbnwxfHx8fDE3NjE0NTY2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Climate Change', 'Public Writing', 'Nigeria'],
      source: 'BellaNaija',
      link: 'https://www.bellanaija.com/2025/06/petlong-care-about-climate-change-as-a-nigerian/',
    },
    {
      title: 'Egypt Discovers New Oil and Gas Reserves',
      type: 'Research & Analysis',
      description: 'An analytical brief on new oil and gas discoveries in Egypt, detailing their potential impact on the country\'s production and the national economy\'s dependence on imports.',
      image: 'https://images.unsplash.com/photo-1655300256486-4ec7251bf84e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHBhbmVsc3xlbnwxfHx8fDE3NjE0Mzc0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Energy Sector', 'Oil & Gas', 'Egypt'],
      source: 'African Energy Council',
      link: 'https://africanenergycouncil.org/egypt-discovers-new-oil-and-gas-reserves-2/',
    },
    {
      title: 'Libya Targets 1.6M bpd output by 2026',
      type: 'National Energy Strategy',
      description: 'A report on Libya\'s initiative to rejuvenate its energy sector, analyzing the investment required, discussions with international oil companies, and the political and security factors at play.',
      image: 'https://images.unsplash.com/photo-1708622361402-cca8f7dd870d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZXMlMjBncmVlbiUyMGVuZXJneXxlbnwxfHx8fDE3NjE0MTgxODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Energy Policy', 'Libya', 'Investment'],
      source: 'African Energy Council',
      link: 'https://africanenergycouncil.org/libya-targets-1-6m-bpd-output-by-2026/',
    },
    {
      title: 'Tullow Exits Kenya in $120M Gulf Deal',
      type: 'Energy Investment Analysis',
      description: 'A news analysis piece covering Tullow Oil\'s final deal to sell its entire stake in Kenya to a Gulf Energy affiliate, detailing the financial and strategic implications.',
      image: 'https://images.unsplash.com/photo-1487875961445-47a00398c267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxNDA3MTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Investment', 'Divestment', 'Kenya'],
      source: 'African Energy Council',
      link: 'https://africanenergycouncil.org/tullow-exits-kenya-in-120m-gulf-deal/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-emerald-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-emerald-700">Featured Analysis & Publications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of published research, articles, and analysis focusing on the intersection of energy, climate change, and international development in Africa
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-emerald-100">
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="text-emerald-600 mb-2">{project.source}</div>
                <h3 className="mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  Read Article
                  <ExternalLink size={16} />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
