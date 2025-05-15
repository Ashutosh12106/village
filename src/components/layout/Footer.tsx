import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t({ en: 'Village Portal', hi: 'गांव पोर्टल' })}
            </h3>
            <p className="text-green-200">
              {t({
                en: 'Your one-stop resource for all village information and services.',
                hi: 'गांव की सभी जानकारी और सेवाओं के लिए आपका एकमात्र संसाधन।'
              })}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t({ en: 'Quick Links', hi: 'त्वरित लिंक' })}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-green-200 hover:text-white transition-colors">
                  {t({ en: 'Home', hi: 'मुख्य पृष्ठ' })}
                </a>
              </li>
              <li>
                <a href="#services" className="text-green-200 hover:text-white transition-colors">
                  {t({ en: 'Services', hi: 'सेवाएं' })}
                </a>
              </li>
              <li>
                <a href="#announcements" className="text-green-200 hover:text-white transition-colors">
                  {t({ en: 'Announcements', hi: 'घोषणाएँ' })}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-green-200 hover:text-white transition-colors">
                  {t({ en: 'Contact', hi: 'संपर्क' })}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t({ en: 'Emergency Contacts', hi: 'आपातकालीन संपर्क' })}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-medium mr-2">
                  {t({ en: 'Police:', hi: 'पुलिस:' })}
                </span>
                <span>100</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">
                  {t({ en: 'Ambulance:', hi: 'एम्बुलेंस:' })}
                </span>
                <span>108</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">
                  {t({ en: 'Fire:', hi: 'अग्निशमन:' })}
                </span>
                <span>101</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-green-800 text-center text-sm text-green-300">
          <p>
            &copy; {currentYear} {' '}
            {t({ en: 'Village Portal. All rights reserved.', hi: 'गांव पोर्टल। सर्वाधिकार सुरक्षित।' })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;