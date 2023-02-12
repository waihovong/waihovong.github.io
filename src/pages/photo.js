import React from "react"
import "../styles/photo.css"
const Photo = ({image1, image2, title, orientation}) => {
  if (orientation === 'vertical')
  {
    return (
      <div className="photography-container-grid pv">
        <div className="vertical">
          <div className="col-half">
            <img src={image1} alt={title} loading="lazy"/>
          </div>
          <div className="col-half">
            <img src={image2} alt={title} loading="lazy" />
          </div>
        </div>
      </div>
    )
  }
  else if (orientation === 'horizontal')
  {
    return (
		<div className="photography-container-grid ph">
      <div className="horizontal">
			  <img src={image1} alt={title} loading="lazy"/>
      </div>
		</div>
    )
  }
  else
  {
	return null; // Error message or error image
  }
}

export default Photo;