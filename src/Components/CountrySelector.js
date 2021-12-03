import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    padding: state.selectProps.padding,
  }),

  control: (provided, state) => ({
    ...provided,
    margin: state.selectProps.margin,
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'
    return { ...provided, opacity, transition }
  },
}

function CountrySelector() {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = (value) => {
    setValue(value)
  }

  return (
    <Select
      options={options}
      value={value}
      onChange={changeHandler}
      margin='20px'
      styles={customStyles}
    />
  )
}

export default CountrySelector
