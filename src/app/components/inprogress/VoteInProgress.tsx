import Candidates from "./Candidates";
import VoteSummary from "./VoteSummary";
import ManageVote from "./ManageVote";

const VoteInProgress = ({voteData, setVoteData, candidates, setCandidates, resetVote, isSaved, setIsSaved}
    : {voteData: any, setVoteData: any, candidates: any, setCandidates: any, resetVote: any, isSaved: any, setIsSaved: any}
) => {

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
                candidates={candidates}
                resetVote={resetVote}
                isSaved={isSaved}
                setIsSaved={setIsSaved}
            />
        </>
    )
}

export default VoteInProgress;
