import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { Box } from "@mui/system"
import axios from "axios";
import { useEffect, useState } from "react";
import { RANDOM_WORD_URL } from "../constants/url";




const WordCard = () => {
    const [wordOfTheDay, setWordOfTheDay] = useState<any>({});
    
    useEffect(() => {
        axios
          .get(RANDOM_WORD_URL)
          .then((res) => setWordOfTheDay(res.data[0]));
      }, []);
    

  return (
    <Card sx={{ minWidth: 275 }}>
    <Box key={wordOfTheDay?.word}>
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          {wordOfTheDay?.word}
        </Typography>
        <Typography variant="body2">
                  {wordOfTheDay?.definition}
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Box>

</Card>
  )
}

export default WordCard
