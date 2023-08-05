import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
function PrevArrow(props) {
    const {className, onClick, style}= props
  return (
    <div>
      <div
      className={className}
      style={{
        ...style,
        background:"grey",
        borderRadius: "50%",
        justifyContent:"center",
        alignContent: "center",
        padding: "4px"
       

      }}
      onclick={onClick}
      >
        <NavigateNextIcon/>
      </div>
    </div>
  )
}

export default PrevArrow
