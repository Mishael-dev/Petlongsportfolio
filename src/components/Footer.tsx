import { Leaf, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="text-emerald-400" size={24} />
            <span>Petlong Dakhling</span>
          </div>
          <p className="text-gray-400 mb-4">
            Building a sustainable, equitable, and resilient future
          </p>
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart className="text-emerald-400" size={16} fill="currentColor" />
            <span>for our planet</span>
          </div>
          <div className="mt-6 text-gray-500">
            © {new Date().getFullYear()} Petlong Dakhling. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
