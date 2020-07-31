import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('Hello World')

  const handleInputChange = e => {
    e.preventDefault()
    setInputValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setCategories(cats => [{name: inputValue}, ...cats])
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={inputValue} onChange={handleInputChange} />
    </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
