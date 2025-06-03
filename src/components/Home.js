import { useState, useEffect } from "react";

export default function Home() {
    const features = ["Analyze Text", "Find Antonyms", "Find Synonyms", "Dictionary"];
    const [text, setText] = useState("");
    const [featureIndex, setFeatureIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
    const features = ["Analyze Text", "Find Antonyms", "Find Synonyms", "Dictionary"];

        const currentFeature = features[featureIndex];
        let timeout;

        if (!isDeleting && charIndex <= currentFeature.length) {
            // Typing
            timeout = setTimeout(() => {
                setText(currentFeature.substring(0, charIndex));
                setCharIndex(charIndex + 1);
            }, 100);
        } else if (isDeleting && charIndex >= 0) {
            // Deleting
            timeout = setTimeout(() => {
                setText(currentFeature.substring(0, charIndex));
                setCharIndex(charIndex - 1);
            }, 50);
        }

        if (charIndex === currentFeature.length + 1 && !isDeleting) {
            // Wait before starting to delete
            timeout = setTimeout(() => {
                setIsDeleting(true);
                setCharIndex(charIndex - 1);
            }, 1000);
        } else if (charIndex === 0 && isDeleting) {
            // Move to next feature after deleting
            setIsDeleting(false);
            setFeatureIndex((featureIndex + 1) % features.length);
            setCharIndex(1);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, featureIndex]);

    return (
        <div className="home">
            <div className="hero">
                <div className="texts">
                    <h1>Welcome to LEXTLENS...</h1>
                    <h2>
                        One place to <span className="text-primary">{text}</span>
                        <span className="blinking-cursor">|</span>
                    </h2>
                    <p>
                        Unlock the power of words with LEXTLENS — your all-in-one tool to analyze text, find synonyms and antonyms, and explore dictionary meanings effortlessly. Whether you're a writer, student, or language enthusiast, LEXTLENS helps you enhance your vocabulary and sharpen your writing.
                    </p>
                    <h3>OUR FEATURES: </h3>
                    <ul>{features.map((Element, index) =>{
                        return(
                            <li key={index} id={`feature${index}`} className="featureList">{Element}</li>
                        )
                    })}</ul>
                </div>
                <div className="image">
                    <img src="./background.jpeg" alt="background image" />
                </div>
            </div>

            <style>{`
        .blinking-cursor {
            animation: blink 1s step-start infinite;
        }

        @keyframes blink {
            50% {
            opacity: 0;
            }
        }
        `}</style>
        </div>
    );
}
