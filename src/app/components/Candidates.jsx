import { useState } from "react";

const Candidates = () => {
    const [candidates, setCandidates] = useState([
        { name: 'Blank', votes: 0 },
    ]);

    return (
        <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-3">Candidates</h2>
            <ul>
                {candidates.map((candidate, index) => (
                    <li key={index} className="flex justify-center items-center mb-2 text-xl">
                        <p className="mr-5">{candidate.name}</p>
                        <p className="mr-2">{candidate.votes}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Candidates