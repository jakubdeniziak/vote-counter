"use client";

import { useState, useEffect } from 'react';
import Header from "./components/Header";
import VoteSetup from "./components/VoteSetup";
import Candidates from "./components/Candidates";
import VoteSummary from "./components/VoteSummary";
import ManageVote from "./components/ManageVote";
import Footer from "./components/Footer";

export default function Home() {
  const [isSetUp, setIsSetUp] = useState(false);
  const [voteTitle, setVoteTitle] = useState('');
  const [totalVotes, setTotalVotes] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(null);
  const [percentageNeededToWin, setPercentageNeededToWin] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [theme, setTheme] = useState('dark');
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

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

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

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);


  return (
    <div className={`h-screen text-center ${theme}`}>
      <Header
        toggleTheme={toggleTheme}
        currentTheme={theme}
      />
      <main>
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
          />
          :
          <div>
            <h2 className='text-3xl mt-5'>{voteTitle}</h2>
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
              candidates={candidates}
              theme={theme}
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
            />
          </div>
        }
      </main>
      <Footer />
    </div>
  );
}
