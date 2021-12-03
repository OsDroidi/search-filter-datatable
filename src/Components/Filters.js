import React, { useState, useContext, useEffect } from 'react'
import {
  Typography,
  Box,
  TextField,
  Stack,
  Fade,
  FormControl,
  Container,
  Divider,
} from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { LocalizationProvider, DesktopDatePicker } from '@mui/lab'
import Buttons from './Buttons'
import CountrySelector from './CountrySelector'
import { searchContext } from '../Context/Context'

const Filters = () => {
  const [value, setValue] = useState(new Date('2014-08-18T21:11:54'))

  const { setSearchTerm } = useContext(searchContext)
  const { checked } = useContext(searchContext)
  const { inputRef } = useContext(searchContext)

  useEffect(() => {
    inputRef.current.focus()
  }, [inputRef])

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
    console.log(event.target.value)
  }

  const handleChangeTwo = (event, newValue) => {
    setValue(newValue)
    setSearchTerm(event.target.value)
    console.log(event.target.value)
  }

  return (
    <React.Fragment>
      <Fade in={checked}>
        <Container fixed sx={{ pt: 3 }}>
          <Box
            sx={{ py: 3 }}
            style={{
              backgroundColor: '#fff',
            }}
          >
            <Typography
              variant='h4'
              component='h1'
              align='center'
              style={{ textTransform: 'uppercase', paddingBottom: 22 }}
            >
              Filters
            </Typography>
            <Divider />
            <Box component='form' noValidate autoComplete='off'>
              <FormControl fullWidth sx={{ p: 1 }}>
                <TextField
                  id='standard-basic'
                  label='Email'
                  variant='standard'
                  onChange={handleChange}
                  sx={{ mx: '20px', mb: 1 }}
                  inputRef={inputRef}
                />

                <TextField
                  id='standard-basic'
                  label='Phone'
                  variant='standard'
                  onChange={handleChange}
                  sx={{ mx: '20px', mb: 1 }}
                />

                <TextField
                  id='standard-basic'
                  label='Name'
                  variant='standard'
                  onChange={handleChange}
                  sx={{ mx: '20px', mb: 1 }}
                />

                <TextField
                  id='standard-basic'
                  label='Company'
                  variant='standard'
                  onChange={handleChange}
                  sx={{ mx: '20px', mb: 1 }}
                />
              </FormControl>
              <CountrySelector />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3} sx={{ mx: '20px', mt: 4 }}>
                  <DesktopDatePicker
                    label='Date'
                    inputFormat='MM/dd/yyyy'
                    value={value}
                    onChange={handleChangeTwo}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
              <Buttons paddingTop={{ pt: 15 }} />
            </Box>
          </Box>
        </Container>
      </Fade>
    </React.Fragment>
  )
}

export default Filters
