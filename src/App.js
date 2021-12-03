import Filters from './Components/Filters'
import Tables from './Components/Tables'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { SearchContextProvider } from './Context/Context'

function App() {
  return (
    <div className='App'>
      <SearchContextProvider>
        <Box>
          <Grid container columns={{ xs: 1, sm: 8, md: 8 }}>
            <Grid item xs={2} sm={2} md={2}>
              <Filters />
            </Grid>
            <Grid item xs={2} sm={6} md={6}>
              <Tables />
            </Grid>
          </Grid>
        </Box>
      </SearchContextProvider>
    </div>
  )
}

export default App
