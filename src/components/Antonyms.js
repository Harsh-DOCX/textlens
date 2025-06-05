import { useState } from "react";

export default function Antonyms() {

    const [word, setWord] = useState("");
    const [antonyms, setAntonyms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchAntonyms = async () =>{
        if (!word.trim()) return;

        setLoading(true);
        setError("");
        try {
            const response = await fetch(`https://api.datamuse.com/words?rel_ant=${word.trim()}`);
            const data = await response.json()

            if (data.length > 0) {
                setAntonyms(data);
            }
            else {
                setAntonyms([]);
                setError("No antonym found! try another word")
            }
        }
        catch (err) {
            setError("Something went wrong! Please try again later")
        }
        finally {
            setLoading(false)
        }
    };

    return (
        <>
            <div className="antonyms">
                <div className="container">
                    <div className="mb-3 pt-5">
                        <h1 className='mb-5'>textlens - <span style={{fontSize:"2rem"}}>ANTONYMS</span></h1>
                        <h2>Enter word below:</h2>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a word"
                            value={word}
                            onChange={(e) => setWord(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-secondary my-2 mx-2" onClick={fetchAntonyms}>
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
                        {antonyms.length > 0 ? (
                            antonyms.map((item, index) => (
                                <li key={index} className="list-group-item antonymList bg-dark text-light">
                                    {item.word}
                                </li>
                            ))
                        ) : (
                            !error && <li className="list-group-item">No antonyms to display yet.</li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}