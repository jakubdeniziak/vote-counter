import { useState } from 'react';
import BasicInfo from './BasicInfoSetup';
import AdvancedSettings from './AdvancedSettingsSetup';
import CandidatesSetup from './CandidatesSetup';

const VoteSetup = ({ voteData, setVoteData, numberOfPeople, setNumberOfPeople, percentageToWin, setPercentageNeededToWin, setIsSetUp, resetVote, candidates, setCandidates, votesPerVoter, setVotesPerVoter }
    : { voteData: any, setVoteData: any, numberOfPeople: any, setNumberOfPeople: any, percentageToWin: any, setPercentageNeededToWin: any, setIsSetUp: any, resetVote: any, candidates: any, setCandidates: any, votesPerVoter: any, setVotesPerVoter: any }
) => {
    const [singleVotePerVoter, setSingleVotePerVoter] = useState(true);
    const [multipleVotesPerVoter, setMultipleVotesPerVoter] = useState(false);

    const handleVoteSetUp = () => {
        setIsSetUp(true);
    };

    const handleVoteReset = () => {
        resetVote();
        setNumberOfPeople('');
        setPercentageNeededToWin('');
        setSingleVotePerVoter(true);
        setMultipleVotesPerVoter(false);
    }


    return (
        <div className='text-center'>
            <BasicInfo
                setVoteData={setVoteData}
                numberOfPeople={numberOfPeople}
                setNumberOfPeople={setNumberOfPeople}
                percentageToWin={percentageToWin}
                setPercentageNeededToWin={setPercentageNeededToWin}
            />
            <AdvancedSettings
                singleVotePerVoter={singleVotePerVoter}
                multipleVotesPerVoter={multipleVotesPerVoter}
                votesPerVoter={votesPerVoter}
                setVotesPerVoter={setVotesPerVoter}
                setSingleVotePerVoter={setSingleVotePerVoter}
                setMultipleVotesPerVoter={setMultipleVotesPerVoter}
            />
            <CandidatesSetup
                candidates={candidates}
                setCandidates={setCandidates}
            />
            <div className="mt-12">
                <button
                    onClick={handleVoteReset}
                    className="bg-accent2 text-secondary p-2 rounded mr-8"
                >
                    Reset
                </button>
                <button
                    onClick={handleVoteSetUp}
                    className="bg-accent text-secondary p-2 rounded"
                >
                    Accept
                </button>
            </div>
      </div>
    )
}

export default VoteSetup
