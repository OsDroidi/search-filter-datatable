import React, { createContext, useState, useRef } from 'react'

export const searchContext = createContext(null)

export function SearchContextProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [checked, setChecked] = useState(true)
  const inputRef = useRef(null)

  return (
    <searchContext.Provider
      value={{ searchTerm, setSearchTerm, checked, setChecked, inputRef }}
    >
      {children}
    </searchContext.Provider>
  )
}
