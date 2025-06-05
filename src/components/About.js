export default function About() {
    return (
        <div className="About">
            <div
                className=" d-flex align-items-center justify-content-center text-dark"
                style={{
                    padding: "3rem 1rem",
                }}
            >
                <div
                    className="container shadow-lg rounded-4 p-5"
                    style={{
                        background: "rgba(255, 255, 255, 0.85)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <div className="row g-5">
                        <div className="col-md-8">
                            <h2 className="fw-bold mb-3">About TextLens</h2>
                            <p className="text-muted">
                                <strong>TextLens</strong> is a lightweight, browser-based tool designed to enhance your reading experience by providing instant summaries and AI-driven insights. Whether you're analyzing lengthy articles or complex documents, TextLens simplifies the process, ensuring you grasp the core ideas effortlessly.
                            </p>
                            <p className="text-muted">
                                Built with pure JavaScript and leveraging browser APIs, TextLens operates entirely on the client side, ensuring your data remains private and secure. Its intuitive interface allows for seamless interaction, making text analysis both efficient and user-friendly.
                            </p>
                            <p className="text-muted">

                                Key features include:
                            </p>

                            <ul>
                                <li>text changing</li>
                                <li>word manipulation</li>
                                <li>translation</li>
                                <li>word retriving(antonym/synonym/rhyming)</li>
                                <li>grammatic or spelling error identifying</li>
                                <li>Interactive AI Chat for deeper insights</li>
                                <li>Responsive and adaptive design</li>
                            </ul>

                        </div>

                        <div className="col-md-4">
                            <h4 className="fw-bold mb-3">Other projects</h4>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="https://harsh-docx.github.io/isaves" className="text-decoration-none text-muted" target="_blank" rel="noreferrer">
                                        iSAVES
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://harsh-docx.github.io/quizwhiz" className="text-decoration-none text-muted" target="_blank" rel="noreferrer">
                                        quizWHIZ
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://playmaps.netlify.app/moneyminded" className="text-decoration-none text-muted" target="_blank" rel="noreferrer">
                                        money minded
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://playmaps.netlify.app/memorymesh" className="text-decoration-none text-muted" target="_blank" rel="noreferrer">
                                        memoryMESH
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="https://playmaps.netlify.app/gridclashs" className="text-decoration-none text-muted" target="_blank" rel="noreferrer">
                                        grid clash
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
