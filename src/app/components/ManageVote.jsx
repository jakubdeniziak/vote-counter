const ManageVote = ({ voteTitle, numberOfPeople, percentageNeededToWin, candidates }) => {
    const serializeVoteData = (voteTitle, numberOfPeople, percentageNeededToWin, candidates) => {
        return JSON.stringify({
            voteTitle,
            numberOfPeople,
            percentageNeededToWin,
            candidates,
        }, null, 2);
    };

    const saveVoteData = () => {
        const jsonData = serializeVoteData(voteTitle, numberOfPeople, percentageNeededToWin, candidates);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${voteTitle}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };


    return (
        <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-3">Manage</h2>
            <button
                onClick={saveVoteData}
                className="bg-accent text-secondary px-4 py-2 rounded"
            >
                Save vote data
            </button>
        </section>
    )
}

export default ManageVote;
