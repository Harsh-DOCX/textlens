import { useState } from "react";

export default function TextToBinary() {

    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")

    const changeInput = (e) => {
        setInput(e.target.value)
    }

    const getAscaii = (char) => {
        return char.charCodeAt(0);
    }

    const convertToBinary = (num) => {
        let binary = (num >>> 0).toString(2);
        while (binary.length < 8) {
            binary = 0 + binary;
        }
        return binary + " ";
    }
    const getBinary = () => {
        let text = input;
        text = text.split("");
        let ascaii = [];
        let binaryTerm = ""
        text.forEach(e => {
            ascaii.push(getAscaii(e))
        });
        ascaii.forEach(e => {
            binaryTerm += convertToBinary(e)
        })
        setOutput(binaryTerm)
    }

    function chunkString(str, length) {
        const chunks = [];
        for (let i = 0; i < str.length; i += length) {

            chunks.push(str.slice(i, i + length));
        }
        return chunks;
    }
    const getText = () => {
        for (let i = 0; i < input.length; i++) {
            if (input[i] !== '0' && input[i] !== '1' && input[i] !== ' ') {
                alert("Invalid binary term found. Please enter valid 8-bit binary terms and not separated by spaces.");
                return;
            }
        }
        let binary = input.trim();
        let terms;
        if (binary.includes(" ")) {
            terms = binary.split(" ")
        }
        else {
            terms = chunkString(binary, 8)
        }
        let result = ""
        terms.forEach(e => {
            if (e.length !== 8) {
                while (e.length < 8) {
                    e = "0" + e;
                }
            }
            result += String.fromCharCode(parseInt(e, 2));
        })
        setOutput(result)

    }

    return (
        <>

            <div className="binary">
                <div className="container p-4 ">
                    <h1 className="text-center mb-4">Text to Binary Converter</h1>

                    <div className="row">

                        {/* Input Column */}
                        <div className="col-md-6 mb-3">
                            <label htmlFor="inputField" className="form-label">Enter Text:</label>
                            <textarea
                                value={input}
                                onChange={changeInput}
                                name="enter-text"
                                id="inputField"
                                className="form-control"
                                rows="10"
                                placeholder="Type or paste your text here... for binary enter 8 bit binary terms or space seprated for better results..."
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
                        <button className="btn btn-primary mx-2 darkButton" onClick={getBinary}>Text to Binary</button>
                        <button className="btn btn-success mx-2" onClick={getText}>Binary to Text</button>
                        <button className="btn btn-danger mx-2" onClick={() => setInput("")}>Clear</button>
                    </div>
                </div>
            </div>
        </>
    )

}
