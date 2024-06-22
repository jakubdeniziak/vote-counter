"use client";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Home() {
    const [theme, setTheme] = useState('dark');

    return (
        <>
            <Header
                theme={theme}
                setTheme={setTheme}
            />
            <Main
                theme={theme}
            />
            <Footer/>
        </>
  );
}
