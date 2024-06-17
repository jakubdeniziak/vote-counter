import * as React from 'react';

import { PieChart } from '@mui/x-charts/PieChart';

const VoteSummary = ({ totalVotes, numPeople, votesToWin, candidates, theme }) => {
    const showPieChart = totalVotes > 0;
    const pieData = {
        data: candidates.map((candidate, index) => ({
            id: index,
            value: candidate.votes,
            label: candidate.name
        }))
    };

    return (
        <section className="mt-5">
            <h2 className="text-2xl font-semibold mb-3">Summary</h2>
            <div>
                <p className="text-lg font-semibold">Votes counted: {totalVotes}</p>
                <p className="text-lg font-semibold">Votes left: {numPeople - totalVotes}</p>
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