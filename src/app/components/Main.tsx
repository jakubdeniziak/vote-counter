"use client";

import { useState, useEffect } from "react";

import VoteSetup from "./setup/VoteSetup";
import VoteInProgress from "./inprogress/VoteInProgress"

const Main = () => {
    const [voteData, setVoteData] = useState({
        title: "",
        numberOfVoters: null,
        percentageNeededToWin: null,
        votesPerVoter: 1
    });

    const [isSetUp, setIsSetUp] = useState(false);
    const [totalVotes, setTotalVotes] = useState(0);
    const [isSaved, setIsSaved] = useState(false);
    const [candidates, setCandidates] = useState([
        { name: 'INVALID VOTE', votes: 0 },
        { name: 'Blank', votes: 0 },
    ]);
  
    
  
    const resetVote = () => {
        setVoteData({
            title: "",
            numberOfVoters: null,
            percentageNeededToWin: null,
            votesPerVoter: 1
        })
        setTotalVotes(0);
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
                setVoteData={setVoteData}
                setIsSetUp={setIsSetUp}
                resetVote={resetVote}
                candidates={candidates}
                setCandidates={setCandidates}
            />
        :
            <VoteInProgress
                voteTitle={voteData.title}
                numberOfPeople={voteData.numberOfVoters}
                totalVotes={totalVotes}
                setTotalVotes={setTotalVotes}
                candidates={candidates}
                setCandidates={setCandidates}
                votesPerVoter={voteData.votesPerVoter}
                percentageNeededToWin={voteData.percentageNeededToWin}
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
