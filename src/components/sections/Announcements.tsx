import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Card, { CardContent } from '../ui/Card';
import { Megaphone } from 'lucide-react';

const Announcements: React.FC = () => {
  const { t } = useLanguage();

  // Mock announcements data
  const announcements = [
    {
      id: 1,
      title: {
        en: 'COVID-19 Vaccination Camp',
        hi: 'कोविड-19 टीकाकरण शिविर'
      },
      content: {
        en: 'A vaccination camp will be held at the Village Health Center on June 15th from 9 AM to 4 PM. All villagers above 18 years are eligible.',
        hi: 'गांव के स्वास्थ्य केंद्र पर 15 जून को सुबह 9 बजे से शाम 4 बजे तक टीकाकरण शिविर आयोजित किया जाएगा। 18 वर्ष से अधिक आयु के सभी ग्रामीण पात्र हैं।'
      },
      date: {
        en: 'June 10, 2023',
        hi: '10 जून, 2023'
      }
    },
    {
      id: 2,
      title: {
        en: 'Agricultural Subsidy Program',
        hi: 'कृषि सब्सिडी कार्यक्रम'
      },
      content: {
        en: 'Government has announced new subsidies for organic farming. Farmers can apply at the Agricultural Resource Center before July 30th.',
        hi: 'सरकार ने जैविक खेती के लिए नई सब्सिडी की घोषणा की है। किसान 30 जुलाई से पहले कृषि संसाधन केंद्र पर आवेदन कर सकते हैं।'
      },
      date: {
        en: 'June 5, 2023',
        hi: '5 जून, 2023'
      }
    },
    {
      id: 3,
      title: {
        en: 'Village Council Meeting',
        hi: 'ग्राम परिषद की बैठक'
      },
      content: {
        en: 'The next village council meeting will be held on June 20th at 2 PM in the Panchayat Hall. All residents are welcome to attend.',
        hi: 'अगली ग्राम परिषद की बैठक 20 जून को दोपहर 2 बजे पंचायत हॉल में आयोजित की जाएगी। सभी निवासियों का स्वागत है।'
      },
      date: {
        en: 'June 1, 2023',
        hi: '1 जून, 2023'
      }
    },
  ];

  return (
    <section id="announcements" className="py-12 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <Megaphone className="w-8 h-8 text-amber-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-800">
            {t({ en: 'Important Announcements', hi: 'महत्वपूर्ण घोषणाएँ' })}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className="border-l-4 border-amber-500 hover:shadow-lg transition-shadow">
              <CardContent>
                <div className="text-sm text-amber-700 mb-2">{t(announcement.date)}</div>
                <h3 className="text-xl font-semibold mb-3">{t(announcement.title)}</h3>
                <p className="text-gray-600">{t(announcement.content)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;