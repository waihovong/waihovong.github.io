import React from "react"
import "../styles/photo.css"
const Photo = ({image1, image2, title, orientation}) => {
  if (orientation === 'vertical')
  {
    return (
      <div className="photography-container-grid vertical">
        <div>
          <img src={image1} alt={title}  />
          <img src={image2} alt={title}  />
        </div>
      </div>
    )
  }
  else if (orientation === 'horizontal')
  {
    return (
		<div className="photography-container-grid horizontal">
			<img src={image1} alt={title} />
		</div>
    )
  }
  else
  {
	return null; // Error message or error image
  }
}

export default Photo;