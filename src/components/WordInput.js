import { useState } from "react";
import DataTable from "./DataTable";
import WordDictionary from "./WordDictionary";
import wordSearch from "./wordSearch";

function WordInput (){

    const [word, setWord] = useState("");
    const [wordDesc, setWordDesc] = useState("");

    const handleChange = (event)=>{
        event.preventDefault();
        setWord(event.target.value);
    }

    const handleClick = async (event)=>{
        event.preventDefault();
        const response = await wordSearch(word);
        setWordDesc(response);
    }
    const noOfWords = (words) => words.split(/[ .:;?!~,`"&|()<>{}[\]\r\n/\\]+/ ).filter(item => {
        item = item.replace(/[^\w\s']|_/g, '')
        return item !== ''; 
    });

    // header and logic for data table
    const config = [
    {
        label: 'Characters',
        render: (word) => word.length
    },
    {
        label: 'Words',
        render: (word) => noOfWords(word).length
    }
    ];
      
    return(
       <>
            <form className="d-flex mb-3 mt-3">
                <input type="text" className="form-control me-3" placeholder="Type in a single word ex: developer " value={word} onChange = {handleChange}/>   
                <button className="btn text-nowrap text-white" style={{backgroundColor : "blueviolet"}} onClick={handleClick}>Process Word</button>
            </form>
            <DataTable word={word} config={config}/> 
            <div className="border p-2">
                {wordDesc === "" ? null : <WordDictionary data={wordDesc}/>}
            </div>
       </>
    )
}
export default WordInput;