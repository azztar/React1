import React from 'react'

const ButtonQuo = ({objStyleBtn, click}) => {
  return (
    <button style={objStyleBtn} className='card__button' onClick={click}> &gt;</button>
  )
}

export default ButtonQuo