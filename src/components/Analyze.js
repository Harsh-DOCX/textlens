import { useState, useEffect } from "react";

export default function Analyze() {
    const [input, setInput] = useState("enter text here");
    const [isSpeaking, setIsSpeaking] = useState(false);

    useEffect(() => {
        // When speech ends, reset the isSpeaking state
        const handleSpeechEnd = () => setIsSpeaking(false);

        speechSynthesis.addEventListener("end", handleSpeechEnd);
        speechSynthesis.addEventListener("error", handleSpeechEnd);

        return () => {
            speechSynthesis.removeEventListener("end", handleSpeechEnd);
            speechSynthesis.removeEventListener("error", handleSpeechEnd);
        };
    }, []);

    const handleCopy = () => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                // Modern clipboard API
                navigator.clipboard.writeText(input);
            } else {
                // Fallback for insecure or unsupported browsers
                const textarea = document.createElement("textarea");
                textarea.value = input;
                textarea.style.position = "fixed";  // Prevent scrolling to bottom on iOS
                document.body.appendChild(textarea);
                textarea.focus();
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
            }
            alert("Text copied to clipboard!");
        } catch (err) {
            alert("Failed to copy text.");
        }
    };


    const handleSpeakToggle = () => {
        if (isSpeaking) {
            speechSynthesis.cancel(); // Stop speaking
            setIsSpeaking(false);
        } else {
            if (input.trim() === "") return; // Don't speak empty input
            const utterance = new SpeechSynthesisUtterance(input);
            // Optional: set voice or other properties here

            utterance.onend = () => setIsSpeaking(false);
            utterance.onerror = () => setIsSpeaking(false);
            utterance.rate = 0.8;   // Slightly slower than normal
            utterance.pitch = 0.8;  // Slightly lower pitch
            utterance.volume = 0.8; // Softer volume
            speechSynthesis.speak(utterance);
            setIsSpeaking(true);
        }
    };

    return (
        <>
            <div className="analyze">
                <div className="container ">
                    <div className="mb-3 ">
                        <h3>Enter text below: </h3>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="9"
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value);
                            }}
                        ></textarea>
                    </div>
                    <button
                        className="btn btn-secondary my-2"
                        onClick={() => {
                            setInput(input.toUpperCase());
                        }}
                    >
                        convert to uppercase
                    </button>
                    <button
                        className="btn btn-secondary my-2 mx-2"
                        onClick={() => {
                            setInput(input.toLowerCase());
                        }}
                    >
                        convert to lowercase
                    </button>
                    <button
                        className="btn btn-secondary my-2 mx-2"
                        onClick={() => {
                            setInput("");
                        }}
                    >
                        clear text
                    </button>
                    <button
                        className="btn btn-secondary my-2 mx-2"
                        onClick={handleCopy}
                    >
                        copy text
                    </button>
                    <button className="btn btn-secondary my-2 mx-2" onClick={handleSpeakToggle}>
                        {isSpeaking ? "Stop Speaking" : "Speak Out Loud"}
                    </button>
                    <button
                        className="btn btn-secondary my-2 mx-2"
                        onClick={() => {
                            let newText = input.split(/\s+/).join(" ");
                            setInput(newText.trim());
                        }}
                    >
                        remove extra spaces
                    </button>
                    <button
                        className="btn btn-secondary my-2 mx-2"
                        onClick={() => {
                            setInput("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga in ad placeat nam aliquam, voluptate, excepturi, nobis molestias commodi corporis ea soluta optio reiciendis officia eveniet itaque debitis officiis rerum voluptas. Explicabo ratione sed eius possimus magnam architecto, ea, quibusdam odit cupiditate suscipit aperiam nobis. Ipsam molestiae magnam ex, ratione inventore minus, libero doloribus enim quam excepturi tempore velit unde quas delectus repellat sed odit commodi cumque quasi, nihil facere ut totam pariatur fugiat? Cumque facilis nostrum odio ullam doloribus sit, perspiciatis praesentium. Nulla impedit optio quis, error voluptas omnis ipsa cum molestiae eaque, ad id. Est porro distinctio accusantium ad exercitationem a nostrum veniam quia eligendi harum dolor ea consequatur quae blanditiis doloremque odit et iusto animi facilis perferendis, quibusdam ex, voluptatum provident optio? Illo, dignissimos ducimus?")
                        }}
                    >
                        generate random
                    </button>

                    <p className="wordDetails my-2">
                        <b>
                            {input.length} characters, {input.trim() === "" ? 0 : input.trim().split(/\s+/).length} words
                            and {input.trim() === "" ? 0 : input.trim().split(/[\n.]+/).filter((line) => line.trim() !== "").length}{" "}
                            lines.
                        </b>
                    </p>
                    <p>
                        <b>Average Time require to read : {(input.trim() === "" ? 0 : input.trim().split(/\s+/).length) * 0.33} seconds or{" "}
                            {Math.floor(((input.trim() === "" ? 0 : input.trim().split(/\s+/).length) * 0.33) / 60)} mitute and {" "}
                            {(((input.trim() === "" ? 0 : input.trim().split(/\s+/).length) * 0.33) % 60).toFixed(2)} seconds.
                        </b>
                    </p>
                    <hr style={{ height: "10px" }} />
                    <h2 style={{ marginTop: "3px" }}>Preview</h2>
                    <p>{input}</p>
                </div>
            </div>
        </>
    );
}
