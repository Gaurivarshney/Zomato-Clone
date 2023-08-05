import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
function NextArrow(props) {
    const {className, onClick, style}= props
  return (
    <div>
      <div
      className={className}
      style={{
        ...style,
        background:"black",
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

export default NextArrow
