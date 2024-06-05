import { useState } from "react";

const ManageVote = ({ voteTitle, numberOfPeople, percentageNeededToWin, candidates, resetVote }) => {
    const [isSaved, setIsSaved] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    
    const serializeVoteData = (voteTitle, numberOfPeople, percentageNeededToWin, candidates) => {
        return JSON.stringify({
            voteTitle,
            numberOfPeople,
            percentageNeededToWin,
            candidates,
        }, null, 2);
    };

    const saveVoteData = () => {
        const jsonData = serializeVoteData(voteTitle, numberOfPeople, percentageNeededToWin, candidates);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${voteTitle}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setIsSaved(true);
        setShowWarning(false);
    };

    const handleResetVote = () => {
        if (!isSaved && !showWarning) {
            setShowWarning(true);
        } else {
            resetVote();
            setIsSaved(false);
            setShowWarning(false);
        }
    };


    return (
        <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-3">Manage</h2>
            {showWarning && <p className="text-red-500 mb-3">Unsaved data will be lost. Please confirm reset.</p>}
            <button
                onClick={saveVoteData}
                className="bg-accent text-secondary px-4 py-2 rounded mr-2"
            >
                Save vote data
            </button>
            <button
                onClick={handleResetVote}
                className="bg-red-500 text-secondary px-4 py-2 rounded ml-2"
            >
                Reset vote
            </button>
        </section>
    )
}

export default ManageVote;
