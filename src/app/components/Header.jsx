import Image from "next/image"

import Moon from "@/public/images/moon.svg"
import Sun from "@/public/images/sun.svg"


const Header = ({ toggleTheme, currentTheme }) => {
    return (
        <header className="header relative border-b border-accent text-center">
            <h1 className="text-5xl p-5">Vote Counter</h1>
            <button 
                onClick={toggleTheme}
                className="absolute bottom-4 right-5 w-10"
            >
                {currentTheme === "dark" ?
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
        </header>
    );
}

export default Header;