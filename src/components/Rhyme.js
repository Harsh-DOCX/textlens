import { useState } from 'react';

export default function Rhyme() {
    const [word, setWord] = useState("");
    const [rhyme, setRhyme] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const fetchRhyme = async () => {
        if (!word.trim()) return;

        setLoading(true);
        setError("");
        try {
            const response = await fetch(`https://api.datamuse.com/words?rel_rhy=${word.trim()}`);
            const data = await response.json();

            if (data.length > 0) {
                setRhyme(data);
            } else {
                setRhyme([]);
                setError("No Rhyming word found. Please try a different word.");
            }
        } catch (err) {
            setError("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="rhyme">
                <div className="container">
                    <div className="mb-3 pt-5">
                        <h1 className='mb-5'>textlens - <span style={{fontSize:"2rem"}}>RHYMING WORDS</span></h1>

                        <h2>Enter word below:</h2>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a word"
                            value={word}
                            onChange={(e) => setWord(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-secondary my-2 mx-2" onClick={fetchRhyme}>
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
                        {rhyme.length > 0 ? (
                            rhyme.map((item, index) => (
                                <li key={index} className="list-group-item rhymingList bg-dark text-light">
                                    {item.word}
                                </li>
                            ))
                        ) : (
                            !error && <li className="list-group-item">No rhyming word to display yet.</li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}
