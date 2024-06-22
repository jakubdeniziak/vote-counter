import { useState } from 'react';
import BasicInfo from './BasicInfo';

const VoteSetup = ({ voteTitle, setVoteTitle, numberOfPeople, setNumberOfPeople, percentageToWin, setPercentageNeededToWin, setIsSetUp, resetVote, candidates, setCandidates, votesPerVoter, setVotesPerVoter }
    : { voteTitle: any, setVoteTitle: any, numberOfPeople: any, setNumberOfPeople: any, percentageToWin: any, setPercentageNeededToWin: any, setIsSetUp: any, resetVote: any, candidates: any, setCandidates: any, votesPerVoter: any, setVotesPerVoter: any }
) => {
    const [inputValue, setInputValue] = useState(voteTitle);
    const [newCandidateName, setNewCandidateName] = useState('');
    const [singleVotePerVoter, setSingleVotePerVoter] = useState(true);
    const [multipleVotesPerVoter, setMultipleVotesPerVoter] = useState(false);

    const handleVoteSetUp = () => {
        setVoteTitle(inputValue);
        setIsSetUp(true);
    };

    const handleVoteReset = () => {
        resetVote();
        setInputValue('');
        setNumberOfPeople('');
        setPercentageNeededToWin('');
        setSingleVotePerVoter(true);
        setMultipleVotesPerVoter(false);
    }

    const handleSingleVoteChange = () => {
        setSingleVotePerVoter(true);
        setMultipleVotesPerVoter(false);
        setVotesPerVoter(1);
    };

    const handleMultipleVotesChange = () => {
        setSingleVotePerVoter(false);
        setMultipleVotesPerVoter(true);
    };

    const handleVotesPerVoterChange = (e: any) => {
        setVotesPerVoter(e.target.value);
    };

    const handleNewCandidateChange = (e: any) => {
        setNewCandidateName(e.target.value);
    };

    const addNewCandidate = () => {
        if (newCandidateName.trim() !== '') {
            setCandidates([...candidates, { name: newCandidateName, votes: 0 }]);
            setNewCandidateName('');
        }
    };

    const removeCandidate = (index: any) => {
        const newCandidates = [...candidates];
        newCandidates.splice(index, 1);
        setCandidates(newCandidates);
    };


    return (
        <div className='text-center'>
            <BasicInfo
                inputValue={inputValue}
                setInputValue={setInputValue}
                numberOfPeople={numberOfPeople}
                setNumberOfPeople={setNumberOfPeople}
                percentageToWin={percentageToWin}
                setPercentageNeededToWin={setPercentageNeededToWin}
            />
            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-3">Advanced settings</h2>
                <div className="mb-4">
                    <label htmlFor="" className="mr-2">
                        Single vote per voter
                    </label>
                    <input
                        id="singleVote"
                        type="checkbox"
                        checked={singleVotePerVoter}
                        onChange={handleSingleVoteChange}
                        className="mr-2"
                    />
                    <br />
                    <label htmlFor="multiVote" className="mr-2">
                        Multiple votes per voter
                    </label>
                    <input
                        id="multiVote"
                        type="checkbox"
                        checked={multipleVotesPerVoter}
                        onChange={handleMultipleVotesChange}
                        className="mr-2"
                    />
                </div>
                {multipleVotesPerVoter && (
                <div className="mb-4">
                    <label className="mr-2">
                        Number of votes per voter
                        <input
                            type="number"
                            value={votesPerVoter}
                            onChange={handleVotesPerVoterChange}
                            className="text-primary border p-2 ml-2 w-40"
                        />
                    </label>
                </div>
                )}
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
                        {candidates.map((candidate: any, index: any) => (
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
