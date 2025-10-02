import { useState } from "react";

export default function Morse() {

    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")

    const codes = {
            ".-": "A","-...": "B","-.-.": "C","-..": "D",".": "E",
            "..-.": "F","--.": "G","....": "H","..": "I",".---": "J",
            "-.-": "K",".-..": "L","--": "M","-.": "N","---": "O",
            ".--.": "P","--.-": "Q",".-.": "R","...": "S","-": "T",
            "..-": "U","...-": "V",".--": "W","-..-": "X","-.--": "Y","--..": "Z",
            "-----": "0",".----": "1","..---": "2","...--": "3","....-": "4",
            ".....": "5","-....": "6","--...": "7","---..": "8","----.": "9",
            ".-.-.-": ".","--..--": ",","..--..": "?",".----.": "'","-.-.--": "!",
            "-..-.": "/","-.--.": "(","-.--.-": ")",".-...": "&","---...": ":",
            "-.-.-.": ";","-...-": "=",".-.-.": "+","-....-": "-","..--.-": "_",
            ".-..-.": '"',"...-..-": "$",".--.-.": "@","/": " ",
        };

    const convertToMorse = () => {
        let text = input.toUpperCase().split("");
        let morseTerm = ""
        text.forEach(e => {
            for (let key in codes) {
                if (e === codes[key]) {
                    morseTerm += key+" "
                }
            }
        });
        setOutput(morseTerm);
    }

    const convertToText = () => {
        let text = input.split(/(\s+|\/)/).filter((e) => e.trim() !== "");
        let stringTerm = ""
        text.forEach(e => {
            if(e in codes){
                stringTerm += codes[e]
            }
            else{
                alert("Invalid Morse code found. Please enter valid Morse code separated by spaces.");
                return;
            }
        })
        setOutput(stringTerm);
    }

    return (
        <>
            <div className="morse">
                <div className="container p-4 ">
                    <h1 className="text-center mb-4">Text to Morse code Converter</h1>

                    <div className="row">

                        {/* Input Column */}
                        <div className="col-md-6 mb-3">
                            <label htmlFor="inputField" className="form-label">Enter Text:</label>
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                name="enter-text"
                                id="inputField"
                                className="form-control"
                                rows="10"
                                placeholder="Type or paste your text or code here..."
                            ></textarea>
                        </div>

                        {/* Output Column */}
                        <div className="col-md-6 mb-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <label htmlFor="returnField" className="form-label">Result:</label>
                                <button className="btn btn-sm btn-outline-secondary mb-1" id="copyBtn" onClick={() => {
                                    navigator.clipboard.writeText(output);
                                }}>
                                    Copy
                                </button>
                            </div>
                            <textarea
                                name="outcome"
                                value={output}
                                id="returnField"
                                className="form-control"
                                rows="10"
                                placeholder="Conversion result will appear here..."
                                readOnly
                            ></textarea>
                        </div>
                    </div>

                    {/* Control Buttons */}
                    <div className="text-center mt-3 control-buttons">
                        <button className="btn btn-primary mx-2 darkButton" onClick={convertToMorse}>string to morse</button>
                        <button className="btn btn-success mx-2" onClick={convertToText}>morse to string</button>
                        <button className="btn btn-danger mx-2" onClick={() => {setInput(""); setOutput("")}}>Clear</button>
                    </div>
                </div>
            </div>
        </>
    )
}
