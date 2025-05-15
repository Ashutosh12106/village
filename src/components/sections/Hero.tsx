import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Search from '../ui/Search';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleSearch = (term: string) => {
    console.log('Searching for:', term);
    // In a real app, this would trigger a search function
  };

  return (
    <section className="bg-gradient-to-b from-green-700 to-green-900 text-white py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {t({
            en: 'Welcome to Our Village Portal',
            hi: 'हमारे गांव पोर्टल में आपका स्वागत है'
          })}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          {t({
            en: 'Your one-stop resource for all village information and services',
            hi: 'गांव की सभी जानकारी और सेवाओं के लिए आपका एकमात्र संसाधन'
          })}
        </p>
        <div className="max-w-xl mx-auto mb-8">
          <Search 
            onSearch={handleSearch} 
            placeholder={{ 
              en: 'Search for services, officials, or information...', 
              hi: 'सेवाओं, अधिकारियों या जानकारी के लिए खोजें...' 
            }} 
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a 
            href="#services" 
            className="bg-white text-green-800 hover:bg-green-100 px-6 py-3 rounded-md font-medium transition-colors"
          >
            {t({ en: 'Explore Services', hi: 'सेवाएं देखें' })}
          </a>
          <a 
            href="#contact" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-800 px-6 py-3 rounded-md font-medium transition-colors"
          >
            {t({ en: 'Contact Officials', hi: 'अधिकारियों से संपर्क करें' })}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;