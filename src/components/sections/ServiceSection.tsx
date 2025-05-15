import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ServiceCategory } from '../../types';
import Card, { CardHeader, CardContent } from '../ui/Card';
import * as LucideIcons from 'lucide-react';

interface ServiceSectionProps {
  category: ServiceCategory;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ category }) => {
  const { t } = useLanguage();
  
  // Dynamically get icon from Lucide
  const IconComponent = (LucideIcons as any)[
    category.icon.charAt(0).toUpperCase() + category.icon.slice(1)
  ] || LucideIcons.FileQuestion;

  return (
    <section id={category.id} className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <IconComponent className="w-8 h-8 text-green-700 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800">{t(category.name)}</h2>
        </div>
        <p className="text-gray-600 mb-6">{t(category.description)}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.locations.map((location, index) => (
            <Card key={index} className="h-full transition-transform hover:scale-102 hover:shadow-lg">
              <CardHeader>
                <h3 className="text-lg font-semibold">{t(location.name)}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{t(location.description)}</p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-medium">{t({ en: 'Address:', hi: 'पता:' })}</span> {t(location.address)}
                  </p>
                  {location.contactPerson && (
                    <p className="text-sm">
                      <span className="font-medium">{t({ en: 'Contact Person:', hi: 'संपर्क व्यक्ति:' })}</span> {location.contactPerson}
                    </p>
                  )}
                  {location.phone && (
                    <p className="text-sm">
                      <span className="font-medium">{t({ en: 'Phone:', hi: 'फोन:' })}</span> {location.phone}
                    </p>
                  )}
                  {location.email && (
                    <p className="text-sm">
                      <span className="font-medium">{t({ en: 'Email:', hi: 'ईमेल:' })}</span> {location.email}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;