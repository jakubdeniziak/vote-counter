"use client";

import { useState, useEffect } from "react";

import VoteSetup from "./setup/VoteSetup";
import VoteInProgress from "./inprogress/VoteInProgress"

const Main = () => {
    const [voteData, setVoteData] = useState({
        isSetUp: false,
        title: "",
        numberOfVoters: null,
        percentageNeededToWin: null,
        votesPerVoter: 1,
        votesCounted: 0
    });

    const [isSaved, setIsSaved] = useState(false);
    const [candidates, setCandidates] = useState([
        { name: 'INVALID VOTE', votes: 0 },
        { name: 'Blank', votes: 0 },
    ]);
  
    const resetVote = () => {
        setVoteData({
            isSetUp: false,
            title: "",
            numberOfVoters: null,
            percentageNeededToWin: null,
            votesPerVoter: 1,
            votesCounted: 0
        })
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
        {voteData.isSetUp === false ?
            <VoteSetup
                setVoteData={setVoteData}
                resetVote={resetVote}
                candidates={candidates}
                setCandidates={setCandidates}
            />
        :
            <VoteInProgress
                voteData={voteData}
                setVoteData={setVoteData}
                candidates={candidates}
                setCandidates={setCandidates}
                resetVote={resetVote}
                isSaved={isSaved}
                setIsSaved={setIsSaved}
            /> 
        }
        </main>
    )
}

export default Main;
