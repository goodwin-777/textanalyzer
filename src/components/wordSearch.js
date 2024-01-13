import axios from "axios";

const wordSearch = async (word) => {
  try {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    return response.data[0];
  } catch (error) {
    return <div className="text-danger">error finding the meaning :( <br></br> make sure to type single word</div>
  }
  
}
export default wordSearch;