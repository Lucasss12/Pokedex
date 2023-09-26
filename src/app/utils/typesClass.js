const getTypeClass = (type) => {
  switch (type) {
    case 'Plante':
      return ['bg-green-400', 'text-green-400'];
    case 'Feu':
      return ['bg-red-400', 'text-red-400'];
    case 'Eau':
      return ['bg-blue-400', 'text-blue-400'];
    case 'Insecte':
      return ['bg-yellow-400', 'text-yellow-400'];
    case 'Normal':
      return ['bg-gray-300', 'text-gray-300'];
    case 'Électrik':
      return ['bg-yellow-300', 'text-yellow-300'];
    case 'Poison':
      return ['bg-purple-400', 'text-purple-400'];
    case 'Fée':
      return ['bg-pink-300', 'text-pink-300'];
    case 'Vol':
      return ['bg-blue-200', 'text-blue-200'];
    case 'Combat':
      return ['bg-red-500', 'text-red-500']; 
    case 'Psy':
      return ['bg-purple-500 text-white', 'text-purple-500'];
    case 'Sol':
      return ['bg-yellow-600', 'text-yellow-600'];
    case 'Roche':
      return ['bg-yellow-500', 'text-yellow-500'];
    case 'Spectre':
      return ['bg-purple-600 text-white', 'text-purple-600'];
    case 'Dragon':
      return ['bg-red-700 text-white', 'text-red-700'];
    case 'Ténèbres':
      return ['bg-gray-800 text-white', 'text-gray-800'];
    case 'Acier':
      return ['bg-gray-600 text-white', 'text-gray-600'];
    case 'Glace':
      return ['bg-blue-300', 'text-blue-300'];
    default:
      return ['bg-gray-400', 'text-gray-400'];
  }
}

export default getTypeClass;
