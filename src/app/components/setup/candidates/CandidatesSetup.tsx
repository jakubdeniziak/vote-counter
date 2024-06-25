import React, { Dispatch, useState } from 'react';

import KnownCandidates from './KnownCandidates';
import Nominations from './Nominations';

const CandidatesSetup = ({candidates, setCandidates}: { candidates: Array<any>, setCandidates: Dispatch<Array<any>> }) => {

    const [candidateAdditionMode, setCandidateAdditionMode] = useState("")

    const handleChange = (e: any) => {
        setCandidateAdditionMode(e.target.value);
    };

    return (
        <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">Candidates</h2>
            <div className="my-6">
                <button
                    onClick={handleChange}
                    value={"nominations"}
                    className={`bg-accent text-secondary p-2 rounded mr-8 ${candidateAdditionMode === "nominations" ? "border border-accent2" : ""}`}
                >
                    Nominations
                </button>
                <button
                    onClick={handleChange}
                    value={"known"}
                    className={`bg-accent text-secondary p-2 rounded mr-8 ${candidateAdditionMode === "known" ? "border border-accent2" : ""}`}
                >
                    Known
                </button>
            </div>
            { candidateAdditionMode === "nominations" && (
                <Nominations/>
            )}
            { candidateAdditionMode === "known" && (
                <KnownCandidates
                    candidates={candidates}
                    setCandidates={setCandidates}
                />
            )}
        </section>
    );
};

export default CandidatesSetup;
