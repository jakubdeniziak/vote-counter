const Header = ({ toggleTheme, currentTheme }) => {
    return (
        <header className="header relative border-b border-accent">
            <h1 className="text-5xl p-5">Vote Counter</h1>
            <button 
                onClick={toggleTheme}
                className="absolute bottom-3 right-3 bg-accent text-secondary px-4 py-2 rounded"
            >
                {currentTheme === "dark" ? "Light" : "Dark"}
            </button>
        </header>
    );
}

export default Header;