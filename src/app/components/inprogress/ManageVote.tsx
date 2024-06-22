import { useState } from "react";

const ManageVote = ({ voteData, candidates, resetVote, isSaved, setIsSaved }
    : { voteData: any, candidates: any, resetVote: any, isSaved: any, setIsSaved: any }) => {
    
    const [showWarning, setShowWarning] = useState(false);
    
    const serializeVoteData = () => {
        return JSON.stringify({
            voteData,
            candidates,
        }, null, 2);
    };

    const saveVoteData = () => {
        const jsonData = serializeVoteData();
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${voteData.title}.json`;
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
        <section className="mt-5 text-center">
            <h2 className="text-2xl font-semibold mb-3">Manage</h2>
            {showWarning && <p className="text-red-500 mb-3">Unsaved data will be lost. Please confirm reset.</p>}
            <button
                onClick={handleResetVote}
                className="bg-red-500 text-secondary px-4 py-2 rounded mr-2"
            >
                Reset vote
            </button>
            <button
                onClick={saveVoteData}
                className="bg-accent text-secondary px-4 py-2 rounded ml-2"
            >
                Save vote data
            </button>
        </section>
    )
}

export default ManageVote;
