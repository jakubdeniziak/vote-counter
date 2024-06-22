import React, { Dispatch } from 'react';

const BasicInfo = ({ setVoteData }: { setVoteData: Dispatch<any> }) => {
    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setVoteData((prev: any) => {
            return {...prev, [name]: value}
        });
    };

    return (
        <section className="text-center mt-10">
            <h2 className="text-2xl font-semibold mb-3">Basic info</h2>
            <div className="mb-4">
                <label htmlFor="voteTitle" className="block text-xl mb-2">Vote Title</label>
                <input
                    type="text"
                    id="voteTitle"
                    name="title"
                    onChange={handleChange}
                    className="text-primary border p-2 mr-2 w-80"
                />
            </div>
            <div>
                <label htmlFor="numberOfPeople" className="block text-xl mb-2">Number of people eligible to vote</label>
                <input
                    type="number"
                    id="numberOfPeople"
                    name="numberOfVoters"
                    onChange={handleChange}
                    className="text-primary border p-2 mr-2 mb-4 w-80"
                />
            </div>
            <div>
                <label htmlFor="percentageToWin" className="block text-xl mb-2">Percentage of votes needed to win</label>
                <input
                    type="number"
                    id="percentageToWin"
                    name="percentageNeededToWin"
                    onChange={handleChange}
                    className="text-primary border p-2 mr-2 w-80 mb-2"
                />
            </div>
        </section>
    );
};

export default BasicInfo;
