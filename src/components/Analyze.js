import { useState, useEffect } from "react";

export default function Analyze() {
    const [input, setInput] = useState("enter text here");
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [alertMsg, setAlertMsg] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
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
                navigator.clipboard.writeText(input);
            } else {
                const textarea = document.createElement("textarea");
                textarea.value = input;
                textarea.style.position = "fixed";
                document.body.appendChild(textarea);
                textarea.focus();
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
            }

            setAlertMsg("Text copied to clipboard!");
            setShowAlert(true);

            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        } catch (err) {
            setAlertMsg("Failed to copy text.");
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        }
    };

    const handleSpeakToggle = () => {
        if (isSpeaking) {
            speechSynthesis.cancel();
            setIsSpeaking(false);
        } else {
            if (input.trim() === "") return;
            const utterance = new SpeechSynthesisUtterance(input);
            utterance.onend = () => setIsSpeaking(false);
            utterance.onerror = () => setIsSpeaking(false);
            utterance.rate = 0.8;
            utterance.pitch = 0.8;
            utterance.volume = 0.8;
            speechSynthesis.speak(utterance);
            setIsSpeaking(true);
        }
    };

    const capitalizeEach = () => {
        const titledCase = input.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        setInput(titledCase)
    }

    const convertToSentenceCase = () => {
        const sentenceCased = input
            .toLowerCase()
            .replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
        setInput(sentenceCased);
    };

    const removePunctuation = () => {
        const noPunct = input.replace(/[.,#!$%^&*;:{}=-_`~()"'?<>@[]|]/g, "");
        setInput(noPunct);
    };

    const convertToInverseCase = () => {
        const inverse = input
            .split("")
            .map(char =>
                char === char.toUpperCase()
                    ? char.toLowerCase()
                    : char.toUpperCase()
            )
            .join("");
        setInput(inverse);
    };

    const checkPalindrome = () => {
        const reverse = input.split("").reverse().join("");
        if (!(reverse === input)) {
            setAlertMsg("the given string is not palindrome string")
        }
        else {
            setAlertMsg("the given input is palindrome.")
        }
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false)
        }, 2000);
    }

    return (
        <div className="analyze">
            <div className="container">
                <div className="mb-3">
                    <h3>Enter text below: </h3>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="9"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    ></textarea>
                </div>

                {showAlert && (
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        {alertMsg}
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => setShowAlert(false)}
                        ></button>
                    </div>
                )}

                {/* Buttons */}
                <button className="btn btn-secondary my-2" onClick={() => setInput(input.toUpperCase())}>
                    convert to uppercase
                </button>
                <button className="btn btn-secondary my-2 mx-2" onClick={() => setInput(input.toLowerCase())}>
                    convert to lowercase
                </button>
                <button className="btn btn-secondary my-2 mx-2" onClick={convertToSentenceCase}>
                    convert to sentence case
                </button>
                <button className="btn btn-secondary mx-2 my-2" onClick={convertToInverseCase}>
                    inverse case
                </button>
                <button className="btn btn-secondary my-2 mx-2" onClick={removePunctuation}>
                    remove puncuations
                </button>
                <button className="btn btn-secondary my-2 mx-2" onClick={checkPalindrome}>
                    check palindrome
                </button>
                <button className="btn btn-secondary my-2 mx-2" onClick={() => setInput("")}>
                    clear text
                </button>
                <button className="btn btn-secondary my-2 mx-2" onClick={handleCopy}>
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
                        setInput(
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga in ad placeat nam aliquam, voluptate, excepturi, nobis molestias commodi corporis ea soluta optio reiciendis officia eveniet itaque debitis officiis rerum voluptas. Explicabo ratione sed eius possimus magnam architecto, ea, quibusdam odit cupiditate suscipit aperiam nobis. Ipsam molestiae magnam ex, ratione inventore minus, libero doloribus enim quam excepturi tempore velit unde quas delectus repellat sed odit commodi cumque quasi, nihil facere ut totam pariatur fugiat? Cumque facilis nostrum odio ullam doloribus sit, perspiciatis praesentium. Nulla impedit optio quis, error voluptas omnis ipsa cum molestiae eaque, ad id. Est porro distinctio accusantium ad exercitationem a nostrum veniam quia eligendi harum dolor ea consequatur quae blanditiis doloremque odit et iusto animi facilis perferendis, quibusdam ex, voluptatum provident optio? Illo, dignissimos ducimus?"
                        );
                    }}
                >
                    generate random
                </button>
                <button className="btn btn-secondary my-2 mx-2" onClick={capitalizeEach}>
                    capitalize each word
                </button>

                <p className="wordDetails my-2">
                    <b>
                        {input.length} characters,{" "}
                        {input.trim() === "" ? 0 : input.trim().split(/\s+/).length} words and{" "}
                        {input.trim() === "" ? 0 : input.trim().split(/[\n.]+/).filter((line) => line.trim() !== "").length} lines.
                    </b>
                </p>
                <p>
                    <b>
                        Average Time required to read:{" "}
                        {(input.trim() === "" ? 0 : input.trim().split(/\s+/).length * 0.33).toFixed(2)} seconds or{" "}
                        {Math.floor((input.trim() === "" ? 0 : input.trim().split(/\s+/).length * 0.33) / 60)} minute and{" "}
                        {((input.trim() === "" ? 0 : input.trim().split(/\s+/).length * 0.33) % 60).toFixed(2)} seconds.
                    </b>
                </p>

                <hr style={{ height: "10px" }} />
                <h2 style={{ marginTop: "3px" }}>Preview</h2>
                <p>{input}</p>
            </div>
        </div>
    );
}
