import { useState } from "react";
import DataTable from "./DataTable";

function Paragraph (){
    const [word, setWord] = useState("");

    const handleChange = (event)=>{
        setWord(event.target.value);
    }

    const config = [
        {
            label: 'Characters',
            render: (word) => word.split(/\n/).filter(item => item !== "").join().length
        },
        {
            label: 'Words',
            render: (word) => noOfWords(word).length
        },
        {
            label: 'Sentences',
            render: (word) => word.split(".") === "" ? 0 : noOfSentences(word)
        },
        {
            label: 'Paragraphs',
            render: (word) => word.split(/\n\w/) === ""? 0 : word.split(/\n/).filter(item => item !== "").length
        },
        {
            label: 'Spaces',
            render: (word) => word.split(" ").length - 1
        },
        {
            label: 'Punctuations',
            render: (word) => word.split(/[^\p{L}\s]/gu) === "" ? 0: word.split(/[^\p{L}\s]/gu).length-1
        }
    ];

    const noOfWords = (words) => words.split(/[ .:;?!~,`"&|()<>{}[\]\r\n/\\]+/ ).filter(item => {
        item = item.replace(/[^\w\s']|_/g, '')
        return item !== ''; 
    });

    const noOfSentences = (words)=>{
        const array =  words.split(/[.!?]/);
        return array[array.length-1 ].trim() === "" ?  array.length-1 :  array.length
    }

    return(
        <>
            <div className="mb-4">
                <label className="form-label"></label>
                <textarea className="form-control" onChange={handleChange} rows="10 "></textarea>
            </div>
            <DataTable word={word} config={config}/>
        </>
    )
}
export default Paragraph;