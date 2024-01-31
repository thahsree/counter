import { Button, Container, Stack, Typography } from "@mui/material"
import { useState } from "react"
import styled from 'styled-components'


function App() {

  const [counter, setCounter] = useState(0)

  const addButton = ()=>{
    setCounter(counter+1)
  }
  const subtractButton = ()=>{
    setCounter(counter-1)
  }

  return (

    <Container>
      <StyledDiv>
        <ChildDiv>
          <Typography align="center" variant="h2">{counter}</Typography>
        
          <Stack spacing="10px" direction="row">
          {
            counter>0?<Button variant="contained" 
            onClick={subtractButton}
            >-</Button>:""
          }
          <Button variant="contained"
          onClick={addButton}
          >+</Button>
          </Stack>
        </ChildDiv>

      </StyledDiv>
    </Container>
  )
}




export default App;

const StyledDiv = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
  height:90vh

`

const ChildDiv = styled.div`

  border:1px solid grey;
  padding:5rem;
  border-radius:10px;
  box-shadow: 1px 1px grey;
`


