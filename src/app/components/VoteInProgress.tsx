import Candidates from "./Candidates";
import VoteSummary from "./VoteSummary";
import ManageVote from "./ManageVote";

const VoteInProgress = ({voteTitle, votesNeededToWin, numberOfPeople, totalVotes, setTotalVotes, candidates, setCandidates, votesPerVoter, percentageNeededToWin, resetVote, isSaved, setIsSaved, setIsSetUp}
    : {voteTitle: any, votesNeededToWin: any, numberOfPeople: any, totalVotes: any, setTotalVotes: any, candidates: any, setCandidates: any, votesPerVoter: any, percentageNeededToWin: any, resetVote: any, isSaved: any, setIsSaved: any, setIsSetUp: any}
) => {

    return (
        <>
            <h2 className='text-3xl mt-5'>{voteTitle}</h2>
            <Candidates
                votesNeededToWin={votesNeededToWin}
                numPeople={numberOfPeople}
                totalVotes={totalVotes}
                setTotalVotes={setTotalVotes}
                candidates={candidates}
                setCandidates={setCandidates}
                votesPerVoter={Number(votesPerVoter)}
            />
            <VoteSummary
                totalVotes={totalVotes}
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
                setIsSetUp={setIsSetUp}
                votesPerVoter={votesPerVoter}
            />
        </>
    )
}

export default VoteInProgress;
