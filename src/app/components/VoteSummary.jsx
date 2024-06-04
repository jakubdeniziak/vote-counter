const VoteSummary = ({ totalVotes, numPeople }) => {
    return (
        <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-3">Summary</h2>
            <div>
                <p className="text-lg font-semibold">Votes counted: {totalVotes}</p>
                <p className="text-lg font-semibold">Votes left: {numPeople - totalVotes}</p>
            </div>
        </section>
    )
}

export default VoteSummary;