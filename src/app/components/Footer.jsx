const Footer = ({theme}) => {
    return (
        <footer className={`footer border-t border-accent fixed bottom-0 w-screen bg-${theme === "dark" ? "primary" : "secondary"}`}>
            <p className="p-3">&copy; 2024 Jakub Deniziak</p>
        </footer>
    )
}

export default Footer