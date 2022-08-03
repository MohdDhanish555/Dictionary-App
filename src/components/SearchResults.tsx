import { Box, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ searchResults, keyword }: any) => {
  console.log(searchResults);
  //   searchResults.map((meaning: any) => {
  //     console.log(meaning);
  //     console.log(meaning.definitions);
  //     meaning.definitions.map((definition: any) => {
  //       console.log("defintion : ", definition.definition);
  //     });
  //   });
  const navigate = useNavigate();

  return (
    <>
      {searchResults?.map((meaning: any) => {
        return meaning?.definitions?.map((definition: any, index: number) => {
        
          return (
            <Box
              data-testid="card"
              key={index}
              onClick={() => navigate("/details", { state:  definition  })}
              sx={{
                cursor: "pointer",
              }}
            >
              <Paper
                elevation={10}
                sx={{
                  p: "2rem",
                  m: "1rem",
                }}
              >
                <Typography variant="body1" fontWeight={"bold"}>{keyword}</Typography>
                <Typography variant="body2">
                  {definition?.definition}
                </Typography>
              </Paper>
            </Box>
          );
        });
      })}
    </>
  );
};

export default SearchResults;
