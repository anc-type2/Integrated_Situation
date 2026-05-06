import React from 'react'

const Button = ({text, type = "button"}) => {
  return (
    <button type={type} className='w-full bg-blue-600-white py-2 rounded-lg hover:br-blue-700 transition duration-200'>
        {text}
    </button>
  )
}

export default Button;