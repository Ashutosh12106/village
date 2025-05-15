import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin } from 'lucide-react';

// In a real application, this would be implemented with a mapping library
// like Leaflet or Google Maps API. This is a simplified placeholder version.
const VillageMap: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {t({ en: 'Village Map', hi: 'गांव का नक्शा' })}
        </h2>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="bg-green-50 border-2 border-dashed border-green-300 rounded-lg h-80 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-green-700 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-700">
                {t({ 
                  en: 'Interactive map coming soon!', 
                  hi: 'इंटरैक्टिव नक्शा जल्द आ रहा है!' 
                })}
              </p>
              <p className="text-gray-500 mt-2">
                {t({ 
                  en: 'This will show important locations in the village.', 
                  hi: 'यह गांव के महत्वपूर्ण स्थानों को दिखाएगा।' 
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillageMap;