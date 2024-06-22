import { useState, useEffect } from "react";

const Candidates = ({ votesNeededToWin, numPeople, totalVotes, setTotalVotes, candidates, setCandidates, votesPerVoter }
    : { votesNeededToWin: any, numPeople: any, totalVotes: any, setTotalVotes: any, candidates: any, setCandidates: any, votesPerVoter: any }
) => {
    
    const [newCandidateName, setNewCandidateName] = useState('');
    const [warning, setWarning] = useState('');


    useEffect(() => {
        const totalCandidateVotes = candidates.reduce((sum: any, candidate: any) => sum + candidate.votes, 0);
        setTotalVotes(totalCandidateVotes);
        if (totalCandidateVotes > numPeople * votesPerVoter) {
            setWarning("There should be no more votes left");
        } else {
            setWarning('');
        }
    }, [candidates, numPeople]);


    const addVote = (index: any) => {
        if (totalVotes >= numPeople * votesPerVoter) {
            setWarning("There should be no more votes left");
            return;
        }

        const newCandidates = [...candidates];

        if (newCandidates[index].name == "INVALID VOTE") {
            if (totalVotes + votesPerVoter > numPeople * votesPerVoter) {
                setWarning("There should be no more votes left");
                return;
            }
            newCandidates[index].votes += votesPerVoter;
        } else {
            newCandidates[index].votes += 1;
        }        
        setCandidates(newCandidates);
    };

    const removeVote = (index: any) => {
        const newCandidates = [...candidates];
        if (newCandidates[index].votes > 0) {
            if (newCandidates[index].name == "INVALID VOTE") {
                newCandidates[index].votes -= votesPerVoter;
            } else {
                newCandidates[index].votes -= 1;
            }
        }
        setCandidates(newCandidates);
    };


    return (
        <section className="mt-5 text-center">
            <h2 className="text-2xl font-semibold mb-3">Candidates</h2>
            <p>
                {warning && <p className="text-accent2 mb-3">{warning}</p>}
            </p>
            <div className="mt-5">
                {candidates.map((candidate: any, index: any) => (
                    <div key={index} className="flex flex-row justify-center mb-2">
                        <p className={`grid place-items-center mr-2 ml-2 w-48 ${candidate.votes >= votesNeededToWin ? 'text-accent font-bold' : ''}`}>
                            {candidate.name}
                        </p>
                        <button
                            onClick={() => removeVote(index)}
                            className="bg-accent2 text-secondary px-4 py-1 rounded"
                        >
                            -
                        </button>
                        <p className="grid place-items-center mr-2 ml-2 w-8">
                            {candidate.votes}
                        </p>
                        <button
                            onClick={() => addVote(index)}
                            className="bg-accent text-secondary px-4 py-1 rounded"
                        >
                            +
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Candidates
