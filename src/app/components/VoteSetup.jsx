import { useState, useEffect } from 'react';


const VoteSetup = ({ voteTitle, setVoteTitle, numberOfPeople, setNumberOfPeople, percentageToWin, setPercentageNeededToWin, setIsSetUp, resetVote, candidates, setCandidates }) => {
    const [inputValue, setInputValue] = useState(voteTitle);
    const [votesNeeded, setVotesNeeded] = useState(0);
    const [newCandidateName, setNewCandidateName] = useState('');


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleVoteSetUp = () => {
        setVoteTitle(inputValue);
        setIsSetUp(true);
    };

    const handleVoteReset = () => {
        resetVote();
        setInputValue('');
        setNumberOfPeople('');
        setPercentageNeededToWin('');
    }

    const handleNumberOfPeopleChange = (e) => {
        setNumberOfPeople(e.target.value);
    };

    const handlePercentageChange = (e) => {
        setPercentageNeededToWin(e.target.value);
    };

    const handleNewCandidateChange = (e) => {
        setNewCandidateName(e.target.value);
    };

    const addNewCandidate = () => {
        if (newCandidateName.trim() !== '') {
            setCandidates([...candidates, { name: newCandidateName, votes: 0 }]);
            setNewCandidateName('');
        }
    };

    const removeCandidate = (index) => {
        const newCandidates = [...candidates];
        newCandidates.splice(index, 1);
        setCandidates(newCandidates);
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
        <div>
            <section className="text-center mt-10">
                <h2 className="text-2xl font-semibold mb-3">Basic info</h2>
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
            </section>
            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-3">Candidates</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        value={newCandidateName}
                        onChange={handleNewCandidateChange}
                        placeholder="New candidate name"
                        className="border p-2 mr-2 text-primary"
                    />
                    <button
                        onClick={addNewCandidate}
                        className="bg-accent text-secondary px-4 py-2 rounded"
                    >
                        Add
                    </button>
                    <div className="mt-5">
                        {candidates.map((candidate, index) => (
                            <div key={index} className="flex flex-row justify-center mb-2">
                                <input
                                    type="text"
                                    value={candidate.name}
                                    readOnly
                                    className="border p-2 mr-2 text-primary"
                                />
                                <button
                                    onClick={() => removeCandidate(index)}
                                    className="bg-accent2 text-secondary px-4 py-2 rounded"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="mt-12">
                <button
                    onClick={handleVoteReset}
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
      </div>
    )
}

export default VoteSetup