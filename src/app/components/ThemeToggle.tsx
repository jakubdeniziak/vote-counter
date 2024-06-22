import { useEffect } from 'react';
import Image from "next/image"

import Moon from "@/public/images/moon.svg"
import Sun from "@/public/images/sun.svg"

const ThemeToggle = ( { theme, setTheme }: { theme: any, setTheme: any } ) => {

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme: any) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button 
        onClick={toggleTheme}
        className="absolute bottom-4 right-5 w-10"
    >
        {theme === "dark" ?
            <Image
                src={Sun}
                alt="Turn on light mode"
            />
            :
            <Image
                src={Moon}
                alt="Turn on dark mode"
            />
        }
    </button>
  );
};

export default ThemeToggle;
