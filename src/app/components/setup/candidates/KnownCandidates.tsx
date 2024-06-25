import React, { Dispatch, useState } from 'react';

const KnownCandidates = ({candidates, setCandidates}: { candidates: Array<any>, setCandidates: Dispatch<Array<any>> }) => {

    const [newCandidateName, setNewCandidateName] = useState('');

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
    )
}

export default KnownCandidates;
