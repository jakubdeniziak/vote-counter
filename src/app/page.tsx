"use client";

import { useState } from 'react';
import Header from "./components/Header";
import VoteSetup from "./components/VoteSetup";
import Footer from "./components/Footer";

export default function Home() {
  const [voteTitle, setVoteTitle] = useState('');

  return (
    <div className="h-screen text-center">
      <Header />
      <main>
        <h2 className='text-3xl'>{voteTitle}</h2>
        <VoteSetup voteTitle={voteTitle} setVoteTitle={setVoteTitle} />
      </main>
      <Footer />
    </div>
  );
}
