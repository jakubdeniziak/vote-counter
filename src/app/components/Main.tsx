"use client";

import { useState, useEffect } from "react";

import VoteSetup from "./setup/VoteSetup";
import VoteInProgress from "./inprogress/VoteInProgress"

const Main = () => {
    const [isSetUp, setIsSetUp] = useState(false);
    const [voteTitle, setVoteTitle] = useState('');
    const [totalVotes, setTotalVotes] = useState(0);
    const [numberOfPeople, setNumberOfPeople] = useState(null);
    const [percentageNeededToWin, setPercentageNeededToWin] = useState(null);
    const [isSaved, setIsSaved] = useState(false);
    const [votesPerVoter, setVotesPerVoter] = useState(1);
    const [candidates, setCandidates] = useState([
        { name: 'INVALID VOTE', votes: 0 },
        { name: 'Blank', votes: 0 },
    ]);
  
    
  
    const resetVote = () => {
        setVoteTitle('');
        setTotalVotes(0);
        setNumberOfPeople(null);
        setPercentageNeededToWin(null);
        setVotesPerVoter(1);
        setCandidates([
            { name: 'INVALID VOTE', votes: 0 },
            { name: 'Blank', votes: 0 },
        ]);
    };
  
    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            if (!isSaved) {
                event.preventDefault();
                event.returnValue = '';
            }
        };
  
        window.addEventListener('beforeunload', handleBeforeUnload);
  
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isSaved]);


    return (
        <main className="mb-24 text-center">
        {isSetUp === false ?
            <VoteSetup
                voteTitle={voteTitle}
                setVoteTitle={setVoteTitle}
                numberOfPeople={numberOfPeople}
                setNumberOfPeople={setNumberOfPeople}
                percentageToWin={percentageNeededToWin}
                setPercentageNeededToWin={setPercentageNeededToWin}
                setIsSetUp={setIsSetUp}
                resetVote={resetVote}
                candidates={candidates}
                setCandidates={setCandidates}
                votesPerVoter={votesPerVoter}
                setVotesPerVoter={setVotesPerVoter}
            />
        :
            <VoteInProgress
                voteTitle={voteTitle}
                numberOfPeople={numberOfPeople}
                totalVotes={totalVotes}
                setTotalVotes={setTotalVotes}
                candidates={candidates}
                setCandidates={setCandidates}
                votesPerVoter={votesPerVoter}
                percentageNeededToWin={percentageNeededToWin}
                resetVote={resetVote}
                isSaved={isSaved}
                setIsSaved={setIsSaved}
                setIsSetUp={setIsSetUp}
            /> 
        }
        </main>
    )
}

export default Main;
