import React, { Dispatch } from 'react';

const BasicInfo = ({ inputValue, setInputValue, numberOfPeople, setNumberOfPeople, percentageToWin, setPercentageNeededToWin }:
    { inputValue: string, setInputValue: Dispatch<string>, numberOfPeople: number, setNumberOfPeople: Dispatch<number>, percentageToWin: number, setPercentageNeededToWin: Dispatch<number> }
) => {
    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    };

    const handleNumberOfPeopleChange = (e: any) => {
        setNumberOfPeople(e.target.value);
    };

    const handlePercentageChange = (e: any) => {
        setPercentageNeededToWin(e.target.value);
    };

    return (
        <section className="text-center mt-10">
            <h2 className="text-2xl font-semibold mb-3">Basic info</h2>
            <div className="mb-4">
                <label htmlFor="voteTitle" className="block text-xl mb-2">Vote Title</label>
                <input
                    type="text"
                    id="voteTitle"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="text-primary border p-2 mr-2 w-80"
                />
            </div>
            <div>
                <label htmlFor="numberOfPeople" className="block text-xl mb-2">Number of people eligible to vote</label>
                <input
                    type="number"
                    id="numberOfPeople"
                    value={numberOfPeople}
                    onChange={handleNumberOfPeopleChange}
                    className="text-primary border p-2 mr-2 mb-4 w-80"
                />
            </div>
            <div>
                <label htmlFor="percentageToWin" className="block text-xl mb-2">Percentage of votes needed to win</label>
                <input
                    type="number"
                    id="percentageToWin"
                    value={percentageToWin}
                    onChange={handlePercentageChange}
                    className="text-primary border p-2 mr-2 w-80 mb-2"
                />
            </div>
        </section>
    );
};

export default BasicInfo;
