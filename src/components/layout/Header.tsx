import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const menuItems = [
    { id: 'home', label: { en: 'Home', hi: 'मुख्य पृष्ठ' } },
    { id: 'services', label: { en: 'Services', hi: 'सेवाएं' } },
    { id: 'announcements', label: { en: 'Announcements', hi: 'घोषणाएँ' } },
    { id: 'contact', label: { en: 'Contact', hi: 'संपर्क' } },
  ];

  return (
    <header className="bg-green-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold">
              {t({ en: 'Village Portal', hi: 'गांव पोर्टल' })}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-white hover:text-green-200 transition-colors"
              >
                {t(item.label)}
              </a>
            ))}
            <Button
              onClick={toggleLanguage}
              variant="outline"
              className="flex items-center space-x-2 text-white border-white hover:bg-green-700"
            >
              <Globe size={16} />
              <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              onClick={toggleLanguage}
              variant="outline"
              className="mr-2 flex items-center space-x-1 text-white border-white hover:bg-green-700 px-2 py-1"
            >
              <Globe size={14} />
              <span className="text-xs">{language === 'en' ? 'हिंदी' : 'Eng'}</span>
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-green-700">
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="block text-white hover:text-green-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;