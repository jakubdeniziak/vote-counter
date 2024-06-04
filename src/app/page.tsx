"use client";

import { useState } from 'react';
import Header from "./components/Header";
import VoteSetup from "./components/VoteSetup";
import Candidates from "./components/Candidates";
import VoteSummary from "./components/VoteSummary";
import ManageVote from "./components/ManageVote";
import Footer from "./components/Footer";

export default function Home() {
  const [voteTitle, setVoteTitle] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(null);
  const [percentageNeededToWin, setPercentageNeededToWin] = useState(null);

  const calculateVotesNeededToWin = () => {
    if (numberOfPeople && percentageNeededToWin) {
      return Math.ceil((percentageNeededToWin / 100) * numberOfPeople);
    }
  };

  const votesNeededToWin = calculateVotesNeededToWin()


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
        />
        <VoteSummary />
        <ManageVote />
      </main>
      <Footer />
    </div>
  );
}
