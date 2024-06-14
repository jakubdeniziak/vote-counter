import { useState, useEffect } from 'react';


const VoteSetup = ({ voteTitle, setVoteTitle, numberOfPeople, setNumberOfPeople, percentageToWin, setPercentageNeededToWin, setIsSetUp, resetVote }) => {
    const [inputValue, setInputValue] = useState(voteTitle);
    const [votesNeeded, setVotesNeeded] = useState(0);


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleVoteSetUp = () => {
        setVoteTitle(inputValue);
        setIsSetUp(true);
    };

    const handleNumberOfPeopleChange = (e) => {
        setNumberOfPeople(e.target.value);
    };

    const handlePercentageChange = (e) => {
        setPercentageNeededToWin(e.target.value);
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
        <section className="text-center mt-10">
            <div className="mb-4">
                <label htmlFor="voteTitle" className="block text-xl mb-2">Vote Title</label>
                <input
                    type="text"
                    id="voteTitle"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="text-primary border p-2 mr-2 w-80"
                />
            </div>
            <div>
                <label htmlFor="numberOfPeople" className="block text-xl mb-2">Number of people eligible to vote</label>
                <input
                    type="number"
                    id="numberOfPeople"
                    value={numberOfPeople}
                    onChange={handleNumberOfPeopleChange}
                    className="text-primary border p-2 mr-2 mb-4 w-80"
                />
            </div>
            <div>
                <label htmlFor="percentageToWin" className="block text-xl mb-2">Percentage of votes needed to win</label>
                <input
                        type="number"
                        id="percentageToWin"
                        value={percentageToWin}
                        onChange={handlePercentageChange}
                        className="text-primary border p-2 mr-2 w-80 mb-2"
                />
            </div>
            <p className="text-lg mt-2">
                Votes needed to win: {votesNeeded}
            </p>
            <div className="mt-5">
                <button
                    onClick={resetVote}
                    className="bg-accent2 text-secondary p-2 rounded mr-8"
                >
                    Reset
                </button>
                <button
                    onClick={handleVoteSetUp}
                    className="bg-accent text-secondary p-2 rounded"
                >
                    Accept
                </button>
            </div>
        </section>
    )
}

export default VoteSetup