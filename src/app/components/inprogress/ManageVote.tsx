import DataSaver from "../DataSaver";

const ManageVote = ({ voteData, setVoteData, candidates }: { voteData: any, setVoteData: any, candidates: any }) => {

    const handleResetVote = () => {
        window.location.reload();
    };

    return (
        <section className="mt-5 text-center">
            <h2 className="text-2xl font-semibold mb-3">Manage</h2>
            <button
                onClick={handleResetVote}
                className="bg-red-500 text-secondary px-4 py-2 rounded mr-2"
            >
                Reset vote
            </button>
            <DataSaver
                voteData={voteData}
                candidates={candidates}
                setVoteData={setVoteData}
            />
        </section>
    )
}

export default ManageVote;
