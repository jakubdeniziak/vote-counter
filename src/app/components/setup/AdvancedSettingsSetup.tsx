import React, { Dispatch } from 'react';

const AdvancedSettings = ({ singleVotePerVoter, multipleVotesPerVoter, votesPerVoter, setVotesPerVoter, setSingleVotePerVoter, setMultipleVotesPerVoter }: 
    { singleVotePerVoter: boolean, multipleVotesPerVoter: boolean, votesPerVoter: number, setVotesPerVoter: Dispatch<number>, setSingleVotePerVoter: Dispatch<boolean>, setMultipleVotesPerVoter: Dispatch<boolean> }
) => {
    const handleSingleVoteChange = () => {
        setSingleVotePerVoter(true);
        setMultipleVotesPerVoter(false);
        setVotesPerVoter(1);
    };

    const handleMultipleVotesChange = () => {
        setSingleVotePerVoter(false);
        setMultipleVotesPerVoter(true);
    };

    const handleVotesPerVoterChange = (e: any) => {
        setVotesPerVoter(e.target.value);
    };

    return (
        <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">Advanced settings</h2>
            <div className="mb-4">
                <label htmlFor="singleVote" className="mr-2">
                    Single vote per voter
                </label>
                <input
                    id="singleVote"
                    type="checkbox"
                    checked={singleVotePerVoter}
                    onChange={handleSingleVoteChange}
                    className="mr-2"
                />
                <br />
                <label htmlFor="multiVote" className="mr-2">
                    Multiple votes per voter
                </label>
                <input
                    id="multiVote"
                    type="checkbox"
                    checked={multipleVotesPerVoter}
                    onChange={handleMultipleVotesChange}
                    className="mr-2"
                />
            </div>
            {multipleVotesPerVoter && (
                <div className="mb-4">
                    <label className="mr-2">
                        Number of votes per voter
                        <input
                            type="number"
                            value={votesPerVoter}
                            onChange={handleVotesPerVoterChange}
                            className="text-primary border p-2 ml-2 w-40"
                        />
                    </label>
                </div>
            )}
        </section>
    );
};

export default AdvancedSettings;
