import { useState } from 'react';
import BasicInfo from './BasicInfoSetup';
import AdvancedSettings from './AdvancedSettingsSetup';
import CandidatesSetup from './CandidatesSetup';
import DataLoader from '../DataLoader';

const VoteSetup = ({ setVoteData, candidates, setCandidates }: { setVoteData: any, candidates: any, setCandidates: any }) => {
    
    const [singleVotePerVoter, setSingleVotePerVoter] = useState(true);
    const [multipleVotesPerVoter, setMultipleVotesPerVoter] = useState(false);

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setVoteData((prev: any) => {
            return {...prev, [name]: value}
        });
    };

    const handleVoteReset = () => {
        window.location.reload();
    }

    return (
        <div className='text-center'>
            <BasicInfo
                setVoteData={setVoteData}
            />
            <AdvancedSettings
                setVoteData={setVoteData}
                singleVotePerVoter={singleVotePerVoter}
                multipleVotesPerVoter={multipleVotesPerVoter}
                setSingleVotePerVoter={setSingleVotePerVoter}
                setMultipleVotesPerVoter={setMultipleVotesPerVoter}
            />
            <CandidatesSetup
                candidates={candidates}
                setCandidates={setCandidates}
            />
            <div className="mt-12">
                <DataLoader
                    setVoteData={setVoteData}
                    setCandidates={setCandidates}
                />
                <button
                    onClick={handleVoteReset}
                    className="bg-accent2 text-secondary p-2 rounded mr-8"
                >
                    Reset
                </button>
                <button
                    onClick={handleChange}
                    name="isSetUp"
                    className="bg-accent text-secondary p-2 rounded"
                >
                    Accept
                </button>
            </div>
      </div>
    )
}

export default VoteSetup
