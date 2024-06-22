import ThemeToggle from "./ThemeToggle";

const Header = () => {
    return (
        <header className="header relative border-b border-accent text-center">
            <h1 className="text-5xl p-5">Vote Counter</h1>
            <ThemeToggle />
        </header>
    );
}

export default Header;
