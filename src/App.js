import Filters from './Components/Filters'
import Tables from './Components/Tables'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { SearchContextProvider } from './Context/Context'

const App = () => {
  return (
    <div className='App'>
      <SearchContextProvider>
        <Box>
          <Grid container columns={{ xs: 1, sm: 5, md: 8 }}>
            <Grid item xs={2} sm={2} md={2}>
              <Filters />
            </Grid>
            <Grid item xs={2} sm={3} md={6}>
              <Tables />
            </Grid>
          </Grid>
        </Box>
      </SearchContextProvider>
    </div>
  )
}

export default App
