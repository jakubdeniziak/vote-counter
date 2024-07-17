import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const VoteSummary = ({ voteData, votesToWin, candidates, theme }: { voteData: any, votesToWin: any, candidates: any, theme: any }) => {

    const showPieChart = voteData.votesCounted > 0 && voteData.votesPerVoter == 1;
    const pieData = {
        data: candidates.map((candidate: any, index: any) => ({
            id: index,
            value: candidate.votes,
            label: candidate.name
        }))
    };
    const winners = candidates ? candidates.filter((candidate: any) => candidate.votes >= votesToWin) : [];
    const allVotesCounted = voteData.votesCounted == voteData.numberOfVoters * voteData.votesPerVoter;

    return (
        <section className="mt-5 text-center">
            <h2 className="text-2xl font-semibold mb-3">Summary</h2>
            {allVotesCounted && winners.length > 0 &&
            <div>
                <p className="text-xl">
                    The winner(s):
                </p>
                <p className="text-3xl font-semibold my-3 text-green-500">
                    {winners.map((winner: any) => winner.name).join(', ')}
                </p>
            </div>
            }
            <div>
                <p className="text-lg font-semibold">Votes counted: {voteData.votesCounted}</p>
                <p className="text-lg font-semibold">Votes left: {voteData.numberOfVoters * voteData.votesPerVoter - voteData.votesCounted}</p>
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
