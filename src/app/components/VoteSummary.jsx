import { useState } from "react";

const VoteSummary = () => {
    const [invalidVotes, setInvalidVotes] = useState(0);


    const addInvalidVote = () => {
        setInvalidVotes(invalidVotes + 1);
    };

    const removeInvalidVote = () => {
        if (invalidVotes > 0) {
            setInvalidVotes(invalidVotes - 1);
        }
    };


    return (
        <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-3">Summary</h2>
            <div className="mb-4 flex justify-center items-center text-xl">
                <p className="mr-5">INVALID</p>
                <button
                    onClick={() => addInvalidVote()}
                    className="bg-green-500 text-secondary px-2 py-1 rounded mr-2"
                >
                    +
                </button>
                <p className="mr-2">{invalidVotes}</p>
                <button
                    onClick={() => removeInvalidVote()}
                    className="bg-red-500 text-secondary px-2 py-1 rounded"
                >
                    -
                </button>
            </div>
        </section>
    )
}

export default VoteSummary;