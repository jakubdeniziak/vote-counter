import { useState } from "react";

const Candidates = () => {
    const [candidates, setCandidates] = useState([
        { name: 'Blank', votes: 0 },
    ]);


    const addVote = (index) => {
        const newCandidates = [...candidates];
        newCandidates[index].votes += 1;
        setCandidates(newCandidates);
    };

    const removeVote = (index) => {
        const newCandidates = [...candidates];
        if (newCandidates[index].votes > 0) {
            newCandidates[index].votes -= 1;
        }
        setCandidates(newCandidates);
    };


    return (
        <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-3">Candidates</h2>
            <ul>
                {candidates.map((candidate, index) => (
                    <li key={index} className="flex justify-center items-center mb-2 text-xl">
                        <p className="mr-5">{candidate.name}</p>
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