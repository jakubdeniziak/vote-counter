import { useState } from 'react';

const VoteSetup = ({ voteTitle, setVoteTitle }) => {
    const [inputValue, setInputValue] = useState(voteTitle);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleTitleChange = () => {
        setVoteTitle(inputValue);
        setInputValue('');
    };

    return (
        <section className="text-center mt-4">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter vote title"
                className="text-primary border p-2 mr-2"
            />
            <button
                onClick={handleTitleChange}
                className="bg-accent text-secondary p-2 rounded"
            >
                Set Title
            </button>
        </section>
    )
}

export default VoteSetup