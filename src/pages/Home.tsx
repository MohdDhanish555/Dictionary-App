import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import SearchResults from "../components/SearchResults";
import WordCard from "../components/WordCard";


const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setshowResults] = useState(false);

  const handleButtonClick = () => {
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
      .then((res) => setSearchResults(res.data[0].meanings));
    setshowResults(true);
  };

  // console.log(searchResults);

  return (
    <Box height="100vh">
      <Box display={"flex"} gap="1rem" justifyContent="flex-end" alignItems="center" bgcolor="white" padding={"1rem"}>
        <TextField
          data-testid="inputBox"
          variant="outlined"
          label="Enter Keyword"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
        <Button  variant="contained" onClick={handleButtonClick}>
          Search
        </Button>
      </Box>
      <Box  padding="2rem"  >
        {showResults ? (
          <SearchResults searchResults={searchResults} keyword={keyword} />
        ) : (
          <WordCard />
        )}
      </Box>
    </Box>
  );
};

export default Home;
