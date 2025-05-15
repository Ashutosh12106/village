import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ServicesOverview from './components/sections/ServicesOverview';
import ServiceSection from './components/sections/ServiceSection';
import Announcements from './components/sections/Announcements';
import Contact from './components/sections/Contact';
import VillageMap from './components/VillageMap';
import { villageData, officialContacts } from './data/villageData';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Hero />
          <ServicesOverview categories={villageData} />
          
          {/* Render individual service sections */}
          {villageData.map(category => (
            <ServiceSection key={category.id} category={category} />
          ))}
          
          <Announcements />
          <VillageMap />
          <Contact contacts={officialContacts} />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;