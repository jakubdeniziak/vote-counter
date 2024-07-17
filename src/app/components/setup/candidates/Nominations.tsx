import { Dispatch, useState } from 'react';

const Nominations = ({candidates, setCandidates}: { candidates: Array<any>, setCandidates: Dispatch<Array<any>> }) => {
    const [nominees, setNominees] = useState([
        // { name: '', accepted: '' }
    ]);
    const [newNomineeName, setNewNomineeName] = useState('');

    const handleNewNomineeChange = (e: any) => {
        setNewNomineeName(e.target.value);
    };

    const addNominee = () => {
        if (newNomineeName.trim() !== '') {
            setNominees([...nominees, { name: newNomineeName, accepted: '' }]);
            setNewNomineeName('');
        }
    };

    // TOOD: check logic
    const declineNomination = (index: number) => {
        nominees[index].accepted = false;
        setCandidates([...candidates]);
    }

    // TOOD: check logic
    const acceptNomination = (index: number) => {
        nominees[index].accepted = true;
        setCandidates([...candidates, { name: nominees[index].name, votes: 0 }]);
    }

    //TODO: style of ifs (spaces in react), make it a hook?
    const getColor = (index: number) => {
        if(nominees[index].accepted === true) {
            return "text-accent";
        } else if(nominees[index].accepted === false) {
            return "text-accent2";
        } else {
            return "text-primary";
        }
    }

    return (
        <div className="mb-4">
            <input
                type="text"
                value={newNomineeName}
                onChange={handleNewNomineeChange}
                placeholder="New candidate name"
                className="border p-2 mr-2 text-primary"
            />
            <button
                onClick={addNominee}
                className="bg-accent text-secondary px-4 py-2 rounded"
            >
                Add
            </button>
            <div className="mt-5">
                {nominees.map((nominee: any, index: any) => (
                    <div key={index} className="flex flex-row justify-center mb-2">
                        <button
                            onClick={() => declineNomination(index)}
                            className="bg-accent2 text-secondary px-4 py-2 rounded"
                        >
                            Decline
                        </button>
                        <input
                            type="text"
                            value={nominee.name}
                            readOnly
                            className={`border p-2 mx-2 ${getColor(index)} text-center`}
                        />
                        <button
                            onClick={() => acceptNomination(index)}
                            className="bg-accent text-secondary px-4 py-2 rounded"
                        >
                            Accept
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Nominations;
