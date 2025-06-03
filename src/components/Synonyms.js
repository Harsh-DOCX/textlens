import { useState } from 'react';

export default function Synonyms() {
    const [word, setWord] = useState("");
    const [synonyms, setSynonyms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const fetchSynonyms = async () => {
        if (!word.trim()) return;

        setLoading(true);
        setError("");
        try {
            const response = await fetch(`https://api.datamuse.com/words?rel_syn=${word.trim()}`);
            const data = await response.json();

            if (data.length > 0) {
                setSynonyms(data);
            } else {
                setSynonyms([]);
                setError("No synonyms found. Please try a different word.");
            }
        } catch (err) {
            console.error("Error fetching synonyms:", err);
            setError("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="synonyms">
                <div className="container">
                    <div className="mb-3 pt-5">
                        <h2>Enter word below:</h2>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a word"
                            value={word}
                            onChange={(e) => setWord(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-secondary my-2 mx-2" onClick={fetchSynonyms}>
                        {loading ? "loading" : "Search"}
                    </button>

                    {error && (
                        <div className="alert alert-warning alert-dismissible fade show my-3" role="alert">
                            <strong>Oops!</strong> {error}
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                                onClick={() => setError("")}
                            ></button>
                        </div>
                    )}

                    <ul className="list-group mt-3">
                        {synonyms.length > 0 ? (
                            synonyms.map((item, index) => (
                                <li key={index} className="list-group-item synonymList bg-dark text-light">
                                    {item.word}
                                </li>
                            ))
                        ) : (
                            !error && <li className="list-group-item">No synonyms to display yet.</li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}
