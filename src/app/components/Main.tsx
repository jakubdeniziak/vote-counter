"use client";

import { useState } from "react";

import VoteSetup from "./setup/VoteSetup";
import VoteInProgress from "./inprogress/VoteInProgress"
import BeforeUnloadHandler from "./BeforeUnloadHandler";

const Main = () => {
    const [voteData, setVoteData] = useState({
        isSetUp: false,
        isSaved: false,
        title: "",
        numberOfVoters: null,
        percentageNeededToWin: null,
        votesPerVoter: 1,
        votesCounted: 0
    });
    const [candidates, setCandidates] = useState([
        { name: 'INVALID VOTE', votes: 0 },
        { name: 'Blank', votes: 0 },
    ]);

    return (
        <main className="mb-24 text-center">
        <BeforeUnloadHandler
            isVoteSaved={voteData.isSaved}
        />
        {voteData.isSetUp === false ?
            <VoteSetup
                setVoteData={setVoteData}
                candidates={candidates}
                setCandidates={setCandidates}
            />
        :
            <VoteInProgress
                voteData={voteData}
                setVoteData={setVoteData}
                candidates={candidates}
                setCandidates={setCandidates}
            /> 
        }
        </main>
    )
}

export default Main;
