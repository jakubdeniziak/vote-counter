import Candidates from "./Candidates";
import VoteSummary from "./VoteSummary";
import ManageVote from "./ManageVote";

const VoteInProgress = ({voteData, setVoteData, candidates, setCandidates }: {voteData: any, setVoteData: any, candidates: any, setCandidates: any }) => {
    
    const calculateVotesNeededToWin = () => {
        if (voteData.numberOfVoters && voteData.percentageNeededToWin) {
            return Math.ceil((voteData.percentageNeededToWin / 100) * voteData.numberOfVoters);
        }
    };
    const votesNeededToWin = calculateVotesNeededToWin()

    return (
        <>
            <h2 className='text-3xl mt-5'>{voteData.title}</h2>
            <Candidates
                voteData={voteData}
                setVoteData={setVoteData}
                votesNeededToWin={votesNeededToWin}
                candidates={candidates}
                setCandidates={setCandidates}
            />
            <VoteSummary
                voteData={voteData}
                votesToWin={votesNeededToWin}
                candidates={candidates}
            />
            <ManageVote
                voteData={voteData}
                setVoteData={setVoteData}
                candidates={candidates}
            />
        </>
    )
}

export default VoteInProgress;
