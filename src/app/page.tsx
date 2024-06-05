"use client";

import { useState, useEffect } from 'react';
import Header from "./components/Header";
import VoteSetup from "./components/VoteSetup";
import Candidates from "./components/Candidates";
import VoteSummary from "./components/VoteSummary";
import ManageVote from "./components/ManageVote";
import Footer from "./components/Footer";

export default function Home() {
  const [voteTitle, setVoteTitle] = useState('');
  const [totalVotes, setTotalVotes] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(null);
  const [percentageNeededToWin, setPercentageNeededToWin] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [candidates, setCandidates] = useState([
    { name: 'INVALID VOTE', votes: 0 },
    { name: 'Blank', votes: 0 },
  ]);

  const calculateVotesNeededToWin = () => {
    if (numberOfPeople && percentageNeededToWin) {
      return Math.ceil((percentageNeededToWin / 100) * numberOfPeople);
    }
  };

  const votesNeededToWin = calculateVotesNeededToWin()

  const resetVote = () => {
    setVoteTitle('');
    setTotalVotes(0);
    setNumberOfPeople(null);
    setPercentageNeededToWin(null);
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
    <div className="h-screen text-center">
      <Header />
      <main>
        <h2 className='text-3xl'>{voteTitle}</h2>
        <VoteSetup
          voteTitle={voteTitle}
          setVoteTitle={setVoteTitle}
          numberOfPeople={numberOfPeople}
          setNumberOfPeople={setNumberOfPeople}
          percentageToWin={percentageNeededToWin}
          setPercentageNeededToWin={setPercentageNeededToWin}
        />
        <Candidates
          votesNeededToWin={votesNeededToWin}
          numPeople={numberOfPeople}
          totalVotes={totalVotes}
          setTotalVotes={setTotalVotes}
          candidates={candidates}
          setCandidates={setCandidates}
        />
        <VoteSummary
          totalVotes={totalVotes}
          numPeople={numberOfPeople}
        />
        <ManageVote
          voteTitle={voteTitle}
          numberOfPeople={numberOfPeople}
          percentageNeededToWin={percentageNeededToWin}
          candidates={candidates}
          resetVote={resetVote}
          isSaved={isSaved}
          setIsSaved={setIsSaved}
        />
      </main>
      <Footer />
    </div>
  );
}
