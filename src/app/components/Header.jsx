const Header = ({ toggleTheme, currentTheme }) => {
    return (
        <header className="header w-screen">
            <h1 className="text-5xl p-5">Vote counter</h1>
            <button 
                onClick={toggleTheme}
                className="bg-accent text-white px-4 py-2 rounded mb-3"
            >
                Switch to {currentTheme === 'dark' ? 'Light' : 'Dark'} Theme
            </button>
        </header>
    )
}

export default Header