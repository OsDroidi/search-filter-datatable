import React from 'react'
import PropTypes from 'prop-types'
import { Button, Stack } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'

function Buttons({ paddingTop }) {
  return (
    <>
      <Stack
        direction='column'
        justifyContent='center'
        alignItems='center'
        spacing={2}
        sx={paddingTop}
      >
        <Button variant='contained' startIcon={<FilterListIcon />}>
          Filter
        </Button>
      </Stack>
    </>
  )
}

Buttons.propTypes = {
  paddingTop: PropTypes.object.isRequired,
}

export default Buttons
