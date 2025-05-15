import { ServiceCategory } from '../types';

// Mock data for the village portal
export const villageData: ServiceCategory[] = [
  {
    id: 'education',
    name: {
      en: 'Education',
      hi: 'शिक्षा',
    },
    description: {
      en: 'Schools and educational institutions in our village',
      hi: 'हमारे गांव के स्कूल और शैक्षिक संस्थान',
    },
    icon: 'school',
    locations: [
      {
        name: {
          en: 'Village Primary School',
          hi: 'गांव का प्राथमिक विद्यालय',
        },
        description: {
          en: 'Our main primary school with classes from 1st to 5th standard',
          hi: 'हमारा मुख्य प्राथमिक विद्यालय जहां 1 से 5 तक की कक्षाएं हैं',
        },
        address: {
          en: 'Near Village Panchayat, Main Road',
          hi: 'गांव पंचायत के पास, मुख्य सड़क',
        },
        contactPerson: 'Ramesh Kumar',
        phone: '9876543210',
      },
      {
        name: {
          en: 'Secondary School',
          hi: 'माध्यमिक विद्यालय',
        },
        description: {
          en: 'Secondary school with classes from 6th to 12th standard',
          hi: 'माध्यमिक विद्यालय जहां 6 से 12 तक की कक्षाएं हैं',
        },
        address: {
          en: 'East End, Village Center',
          hi: 'पूर्वी छोर, गांव का केंद्र',
        },
        contactPerson: 'Sunita Devi',
        phone: '9876543211',
        email: 'secondary@villagemail.com',
      },
    ],
  },
  {
    id: 'healthcare',
    name: {
      en: 'Healthcare',
      hi: 'स्वास्थ्य सेवा',
    },
    description: {
      en: 'Medical facilities and healthcare services',
      hi: 'चिकित्सा सुविधाएं और स्वास्थ्य सेवाएं',
    },
    icon: 'stethoscope',
    locations: [
      {
        name: {
          en: 'Village Health Center',
          hi: 'गांव का स्वास्थ्य केंद्र',
        },
        description: {
          en: 'Primary healthcare center with basic medical facilities',
          hi: 'प्राथमिक स्वास्थ्य केंद्र जहां बुनियादी चिकित्सा सुविधाएं उपलब्ध हैं',
        },
        address: {
          en: 'Near Bus Stand, Main Road',
          hi: 'बस स्टैंड के पास, मुख्य सड़क',
        },
        contactPerson: 'Dr. Anita Singh',
        phone: '9876543212',
        email: 'health@villagemail.com',
      },
    ],
  },
  {
    id: 'agriculture',
    name: {
      en: 'Agriculture',
      hi: 'कृषि',
    },
    description: {
      en: 'Agricultural resources and farmer support',
      hi: 'कृषि संसाधन और किसान सहायता',
    },
    icon: 'wheat',
    locations: [
      {
        name: {
          en: 'Farmer Resource Center',
          hi: 'किसान संसाधन केंद्र',
        },
        description: {
          en: 'Information and resources for farmers including seeds, fertilizers, and farming techniques',
          hi: 'किसानों के लिए जानकारी और संसाधन, जिसमें बीज, उर्वरक और खेती तकनीक शामिल हैं',
        },
        address: {
          en: 'Agricultural Cooperative Building, West Village',
          hi: 'कृषि सहकारी भवन, पश्चिमी गांव',
        },
        contactPerson: 'Kishan Lal',
        phone: '9876543213',
      },
    ],
  },
  {
    id: 'transport',
    name: {
      en: 'Transport',
      hi: 'परिवहन',
    },
    description: {
      en: 'Transportation services and infrastructure',
      hi: 'परिवहन सेवाएं और बुनियादी ढांचा',
    },
    icon: 'bus',
    locations: [
      {
        name: {
          en: 'Village Bus Stand',
          hi: 'गांव का बस स्टैंड',
        },
        description: {
          en: 'Main bus stand with connections to nearby towns and cities',
          hi: 'मुख्य बस स्टैंड जहां से आसपास के कस्बों और शहरों के लिए कनेक्शन मिलते हैं',
        },
        address: {
          en: 'Central Village, Main Road',
          hi: 'केंद्रीय गांव, मुख्य सड़क',
        },
        contactPerson: 'Mohan Singh',
        phone: '9876543214',
      },
    ],
  },
  {
    id: 'finance',
    name: {
      en: 'Finance',
      hi: 'वित्त',
    },
    description: {
      en: 'Banking and financial services',
      hi: 'बैंकिंग और वित्तीय सेवाएं',
    },
    icon: 'building-bank',
    locations: [
      {
        name: {
          en: 'Village Cooperative Bank',
          hi: 'गांव का सहकारी बैंक',
        },
        description: {
          en: 'Local bank providing savings, loans, and other financial services',
          hi: 'स्थानीय बैंक जो बचत, ऋण और अन्य वित्तीय सेवाएं प्रदान करता है',
        },
        address: {
          en: 'Near Panchayat Office, Village Center',
          hi: 'पंचायत कार्यालय के पास, गांव का केंद्र',
        },
        contactPerson: 'Rajesh Gupta',
        phone: '9876543215',
        email: 'bank@villagemail.com',
      },
    ],
  },
  {
    id: 'administration',
    name: {
      en: 'Administration',
      hi: 'प्रशासन',
    },
    description: {
      en: 'Village administration and governance',
      hi: 'गांव प्रशासन और शासन',
    },
    icon: 'landmark',
    locations: [
      {
        name: {
          en: 'Village Panchayat Office',
          hi: 'गांव पंचायत कार्यालय',
        },
        description: {
          en: 'Main administrative office for the village',
          hi: 'गांव का मुख्य प्रशासनिक कार्यालय',
        },
        address: {
          en: 'Village Center',
          hi: 'गांव का केंद्र',
        },
        contactPerson: 'Sarpanch Rajendra Singh',
        phone: '9876543216',
        email: 'panchayat@villagemail.com',
      },
    ],
  },
];

export const officialContacts = [
  {
    name: { en: 'Rajendra Singh', hi: 'राजेंद्र सिंह' },
    position: { en: 'Village Head (Sarpanch)', hi: 'गांव प्रमुख (सरपंच)' },
    phone: '9876543216',
    email: 'sarpanch@villagemail.com',
    officeHours: {
      en: 'Monday to Friday, 10:00 AM - 4:00 PM',
      hi: 'सोमवार से शुक्रवार, सुबह 10:00 बजे - शाम 4:00 बजे',
    },
  },
  {
    name: { en: 'Meera Sharma', hi: 'मीरा शर्मा' },
    position: { en: 'Village Secretary', hi: 'गांव सचिव' },
    phone: '9876543217',
    email: 'secretary@villagemail.com',
    officeHours: {
      en: 'Monday to Friday, 10:00 AM - 4:00 PM',
      hi: 'सोमवार से शुक्रवार, सुबह 10:00 बजे - शाम 4:00 बजे',
    },
  },
];