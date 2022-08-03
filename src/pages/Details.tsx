import { Box, Typography } from "@mui/material"
import { useLocation } from "react-router-dom"

const Details = () => {
  const {state} : any = useLocation()
  console.log(state)
  return (
    <Box padding={"2rem"}>
      <Typography variant="body1" color="initial">
        {state?.definition}
      </Typography>
      <Typography variant="body1" color="initial">
        {state?.example}
      </Typography>
    </Box>
  )
}

export default Details