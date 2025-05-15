import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Card, { CardContent } from '../ui/Card';
import { Phone, Mail, Clock } from 'lucide-react';
import { ContactInfo } from '../../types';

interface ContactSectionProps {
  contacts: ContactInfo[];
}

const Contact: React.FC<ContactSectionProps> = ({ contacts }) => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {t({ en: 'Contact Village Officials', hi: 'गांव के अधिकारियों से संपर्क करें' })}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {contacts.map((contact, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent>
                <h3 className="text-xl font-semibold mb-3">{t(contact.name)}</h3>
                <p className="text-gray-700 mb-4">{t(contact.position)}</p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-green-700 mr-3 mt-0.5" />
                    <div>
                      <div className="font-medium">{t({ en: 'Phone', hi: 'फोन' })}</div>
                      <div>{contact.phone}</div>
                    </div>
                  </div>
                  
                  {contact.email && (
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-green-700 mr-3 mt-0.5" />
                      <div>
                        <div className="font-medium">{t({ en: 'Email', hi: 'ईमेल' })}</div>
                        <div>{contact.email}</div>
                      </div>
                    </div>
                  )}
                  
                  {contact.officeHours && (
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-green-700 mr-3 mt-0.5" />
                      <div>
                        <div className="font-medium">{t({ en: 'Office Hours', hi: 'कार्यालय समय' })}</div>
                        <div>{t(contact.officeHours)}</div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gray-100 p-6 rounded-lg max-w-xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">
            {t({ en: 'Submit Your Query', hi: 'अपना प्रश्न भेजें' })}
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t({ en: 'Your Name', hi: 'आपका नाम' })}
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t({ en: 'Phone Number', hi: 'फोन नंबर' })}
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t({ en: 'Your Query', hi: 'आपका प्रश्न' })}
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
            >
              {t({ en: 'Submit', hi: 'जमा करें' })}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;