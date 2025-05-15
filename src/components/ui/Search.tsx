import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface SearchProps {
  onSearch: (term: string) => void;
  placeholder?: {
    en: string;
    hi: string;
  };
}

const Search: React.FC<SearchProps> = ({ 
  onSearch, 
  placeholder = { en: 'Search...', hi: 'खोजें...' } 
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useLanguage();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md">
      <input
        type="text"
        className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
        placeholder={t(placeholder)}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon className="w-5 h-5 text-gray-400" />
      </div>
      <button 
        type="submit" 
        className="absolute inset-y-0 right-0 px-3 flex items-center bg-green-700 text-white rounded-r-md hover:bg-green-800 transition-colors"
      >
        {t({ en: 'Search', hi: 'खोजें' })}
      </button>
    </form>
  );
};

export default Search;