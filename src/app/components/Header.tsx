import ThemeToggle from "./ThemeToggle";

const Header = ( { theme, setTheme }: {theme: any, setTheme: any} ) => {
    return (
        <header className="header relative border-b border-accent text-center">
            <h1 className="text-5xl p-5">Vote Counter</h1>
            <ThemeToggle
                theme={theme}
                setTheme={setTheme}
            />
        </header>
    );
}

export default Header;
