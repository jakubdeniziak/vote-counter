import { useState, useEffect } from 'react';

const VoteSetup = ({ voteTitle, setVoteTitle }) => {
    const [inputValue, setInputValue] = useState(voteTitle);
    const [numberOfPeople, setNumberOfPeople] = useState('');
    const [percentageToWin, setPercentageToWin] = useState('');
    const [votesNeeded, setVotesNeeded] = useState(0);


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleTitleChange = () => {
        setVoteTitle(inputValue);
    };

    const handleNumberOfPeopleChange = (e) => {
        setNumberOfPeople(e.target.value);
    };

    const handlePercentageChange = (e) => {
        setPercentageToWin(e.target.value);
    };


    useEffect(() => {
        if (numberOfPeople && percentageToWin) {
            const calculatedVotes = Math.ceil((numberOfPeople * percentageToWin) / 100);
            setVotesNeeded(calculatedVotes);
        } else {
            setVotesNeeded(0);
        }
    },[numberOfPeople, percentageToWin]);


    return (
        <section className="text-center mt-4">
            <div className="mb-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter vote title"
                    className="text-primary border p-2 mr-2 w-80"
                />
                <button
                    onClick={handleTitleChange}
                    className="bg-accent text-secondary p-2 rounded"
                >
                    Set Title
                </button>
            </div>
            <input
                type="number"
                value={numberOfPeople}
                onChange={handleNumberOfPeopleChange}
                placeholder="Number of people eligible to vote"
                className="text-primary border p-2 mr-2 mb-4 w-80"
            />
            <br />
            <input
                    type="number"
                    value={percentageToWin}
                    onChange={handlePercentageChange}
                    placeholder="Percentage of votes needed to win"
                    className="text-primary border p-2 mr-2 w-80 mb-2"
            />
            <p className="text-lg">
                Votes needed to win: {votesNeeded}
            </p>
        </section>
    )
}

export default VoteSetup