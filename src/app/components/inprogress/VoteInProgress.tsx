import Candidates from "./Candidates";
import VoteSummary from "./VoteSummary";
import ManageVote from "./ManageVote";

const VoteInProgress = ({voteData, setVoteData, voteTitle, numberOfPeople, candidates, setCandidates, votesPerVoter, percentageNeededToWin, resetVote, isSaved, setIsSaved}
    : {voteData: any, setVoteData: any, voteTitle: any, numberOfPeople: any, candidates: any, setCandidates: any, votesPerVoter: any, percentageNeededToWin: any, resetVote: any, isSaved: any, setIsSaved: any}
) => {

    const calculateVotesNeededToWin = () => {
        if (numberOfPeople && percentageNeededToWin) {
            return Math.ceil((percentageNeededToWin / 100) * numberOfPeople);
        }
    };
  
    const votesNeededToWin = calculateVotesNeededToWin()

    return (
        <>
            <h2 className='text-3xl mt-5'>{voteTitle}</h2>
            <Candidates
                voteData={voteData}
                setVoteData={setVoteData}
                votesNeededToWin={votesNeededToWin}
                numPeople={numberOfPeople}
                candidates={candidates}
                setCandidates={setCandidates}
                votesPerVoter={Number(votesPerVoter)}
            />
            <VoteSummary
                totalVotes={voteData.votesCounted}
                numPeople={numberOfPeople}
                votesToWin={votesNeededToWin}
                candidates={candidates}
                votesPerVoter={votesPerVoter}
            />
            <ManageVote
                voteTitle={voteTitle}
                numberOfPeople={numberOfPeople}
                percentageNeededToWin={percentageNeededToWin}
                candidates={candidates}
                resetVote={resetVote}
                isSaved={isSaved}
                setIsSaved={setIsSaved}
                votesPerVoter={votesPerVoter}
            />
        </>
    )
}

export default VoteInProgress;
