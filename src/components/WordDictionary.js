import "../style.css";

function WordDictionary({data}){
    const items = [
        {
            title : "Definition:",
            content : data.meanings[0].definitions[0].definition
        },
        {
            title : "Parts of speech:",
            content : data.meanings[0].partOfSpeech
        },
        {
            title : "Synonyms:",
            content : data.meanings[0].synonyms[0]
        },
        {
            title : "Antonyms:",
            content : data.meanings[0].antonyms[0]
        }
    ]
    const renderedItems = items.map(item=>{
        return(
            <tr key={item.title}>
                <td className="text-secondary my-table">{item.title}</td>
                <td>{item.content}</td>
            </tr>
        )
    })
    return(
        <table className="fs-6">
            <tbody>{renderedItems}</tbody>
        </table>
    )
}
export default WordDictionary;