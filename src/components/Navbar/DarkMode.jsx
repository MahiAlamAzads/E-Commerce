import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkMode = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-xl p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
      title="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <FaSun className="text-yellow-400" />
      ) : (
        <FaMoon className="text-gray-800" />
      )}
    </button>
  );
};

export default DarkMode;
