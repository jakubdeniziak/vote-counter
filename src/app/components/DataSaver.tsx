import React from 'react';

const DataSaver = ( { voteData, candidates, setVoteData }: { voteData: any, candidates: any, setVoteData: any } ) => {

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
        setVoteData((prev: any) => {
            return { ...prev, isSaved: true };
        });
    };

    return (
        <button
            onClick={saveVoteData}
            className="bg-accent text-secondary p-2 rounded"
        >
            Save Vote Data
        </button>
    );
};

export default DataSaver;
