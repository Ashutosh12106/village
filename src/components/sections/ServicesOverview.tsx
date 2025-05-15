import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ServiceCategory } from '../../types';
import * as LucideIcons from 'lucide-react';

interface ServicesOverviewProps {
  categories: ServiceCategory[];
}

const ServicesOverview: React.FC<ServicesOverviewProps> = ({ categories }) => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          {t({ en: 'Village Services', hi: 'गांव की सेवाएं' })}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            // Dynamically get icon from Lucide
            const IconComponent = (LucideIcons as any)[
              category.icon.charAt(0).toUpperCase() + category.icon.slice(1)
            ] || LucideIcons.FileQuestion;
            
            return (
              <a 
                key={category.id}
                href={`#${category.id}`}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="bg-green-100 p-4 rounded-full mb-4">
                  <IconComponent className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-lg font-semibold text-center text-gray-800">{t(category.name)}</h3>
                <p className="text-sm text-center text-gray-600 mt-2 line-clamp-2">
                  {t(category.description)}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;