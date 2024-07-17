import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

const DataLoader = ( { setVoteData, setCandidates }:
    { setVoteData: Dispatch<SetStateAction<any>>, setCandidates: Dispatch<SetStateAction<any>> } ) => {

    const loadVoteData = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const jsonData = JSON.parse(e.target?.result as string);
                    if (jsonData.voteData && jsonData.candidates) {
                        setVoteData(jsonData.voteData);
                        setCandidates(jsonData.candidates);
                    } else {
                        console.error('Invalid JSON structure');
                    }
                } catch (error) {
                    console.error('Error parsing JSON: ', error);
                }
            };
            reader.readAsText(file);
        }
    };

    return (
        <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-3">Load vote data from file</h2>
            <input
                type="file"
                accept=".json"
                onChange={loadVoteData}
                className="bg-accent text-secondary p-2 rounded"
            />
        </div>
    );
};

export default DataLoader;
