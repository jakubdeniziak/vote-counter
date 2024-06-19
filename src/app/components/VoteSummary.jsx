import * as React from 'react';

import { PieChart } from '@mui/x-charts/PieChart';

const VoteSummary = ({ totalVotes, numPeople, votesToWin, candidates, theme, votesPerVoter }) => {
    const showPieChart = totalVotes > 0;
    const pieData = {
        data: candidates.map((candidate, index) => ({
            id: index,
            value: candidate.votes,
            label: candidate.name
        }))
    };

    const winners = candidates ? candidates.filter(candidate => candidate.votes >= votesToWin) : [];
    const allVotesCounted = totalVotes == numPeople * votesPerVoter;


    return (
        <section className="mt-5 text-center">
            <h2 className="text-2xl font-semibold mb-3">Summary</h2>
            {allVotesCounted && winners.length > 0 &&
            <div>
                <p className="text-xl">
                    The winner(s):
                </p>
                <p className="text-3xl font-semibold my-3 text-green-500">
                    {winners.map(winner => winner.name).join(', ')}
                </p>
            </div>
            }
            <div>
                <p className="text-lg font-semibold">Votes counted: {totalVotes}</p>
                <p className="text-lg font-semibold">Votes left: {numPeople * votesPerVoter - totalVotes}</p>
                <p className="text-lg font-semibold">Votes needed to win: {votesToWin}</p>
            </div>
            { showPieChart &&
            <div className="mt-5 w-1/5 mx-auto">
                <PieChart
                    series={[pieData]}
                    width={500}
                    height={200}
                    slotProps={{
                        legend: {
                            labelStyle: {
                                fill: theme === 'dark' ? 'white' : 'black',
                            },
                        },
                    }}
                />
            </div>
            }
        </section>
    )
}

export default VoteSummary;