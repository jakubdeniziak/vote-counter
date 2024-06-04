import { useState, useEffect } from "react";

const Candidates = ({ votesNeededToWin, numPeople, totalVotes, setTotalVotes, candidates, setCandidates }) => {
    
    const [newCandidateName, setNewCandidateName] = useState('');
    const [warning, setWarning] = useState('');


    useEffect(() => {
        const totalCandidateVotes = candidates.reduce((sum, candidate) => sum + candidate.votes, 0);
        setTotalVotes(totalCandidateVotes);

        if (totalCandidateVotes > numPeople) {
            setWarning("There should be no more votes left");
        } else {
            setWarning('');
        }
    }, [candidates, numPeople]);


    const addVote = (index) => {
        if (totalVotes < numPeople) {
            const newCandidates = [...candidates];
            newCandidates[index].votes += 1;
            setCandidates(newCandidates);
        } else {
            setWarning("There should be no more votes left");
        }
    };

    const removeVote = (index) => {
        const newCandidates = [...candidates];
        if (newCandidates[index].votes > 0) {
            newCandidates[index].votes -= 1;
        }
        setCandidates(newCandidates);
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


    return (
        <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-3">Candidates</h2>
            <p>
                {warning && <p className="text-red-500 mb-3">{warning}</p>}
            </p>
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
                    Add Candidate
                </button>
            </div>
            <ul>
                {candidates.map((candidate, index) => (
                    <li key={index} className="flex justify-center items-center mb-2 text-xl">
                        <p className={`mr-5 ${candidate.votes >= votesNeededToWin ? 'text-green-500' : ''}`}>
                            {candidate.name}
                        </p>
                        <button
                            onClick={() => addVote(index)}
                            className="bg-green-500 text-secondary px-2 py-1 rounded mr-2"
                        >
                            +
                        </button>
                        <p className="mr-2">{candidate.votes}</p>
                        <button
                            onClick={() => removeVote(index)}
                            className="bg-red-500 text-secondary px-2 py-1 rounded"
                        >
                            -
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Candidates
