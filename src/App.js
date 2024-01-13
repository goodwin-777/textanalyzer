import { useState } from "react";
import Paragraph from "./components/Paragraph";
import WordInput from "./components/WordInput";
import "./style.css";

function App () {

    const [isPara, setIsPara] = useState(false);

    const handleClick = () => {
        setIsPara(!isPara);
    }
    return (
       <div className="container mt-5">
            <h1 className="fs-1">Text Analyzer</h1>
            <p className="text-secondary fs-5">Text Analyzer is a simple free online tool that helps you find number of characters, words, sentences and paragraphs.</p>
            <div className="row border m-0 p-1 rounded-3 w-50 text-center bg" onClick={handleClick}>
                <div className={"col-6 w-50" + (isPara || " bg-white border rounded-3")} >Word Input</div>
                <div className={"col-6 w-50" + (isPara && " bg-white border rounded-3")}>Paragraph</div>
            </div>
            <div>{isPara ? <Paragraph/> : <WordInput/>}</div>
       </div>
    )
}

export default App;