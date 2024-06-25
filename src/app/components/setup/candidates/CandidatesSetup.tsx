import React, { Dispatch } from 'react';
import KnownCandidates from './KnownCandidates';
import Nominations from './Nominations';

const CandidatesSetup = ({candidates, setCandidates}: { candidates: Array<any>, setCandidates: Dispatch<Array<any>> }) => {

    return (
        <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">Candidates</h2>
            <Nominations/>
            <KnownCandidates
                candidates={candidates}
                setCandidates={setCandidates}
            />
        </section>
    );
};

export default CandidatesSetup;
