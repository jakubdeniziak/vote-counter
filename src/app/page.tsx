"use client";

import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


export default function Home() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className={`text-center ${theme}`}>
            <Header
                toggleTheme={toggleTheme}
                currentTheme={theme}
            />
            <Main
                theme={theme}
            />
            <Footer
                theme={theme}
            />
        </div>
  );
}
