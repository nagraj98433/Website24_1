import React from 'react'
import '../All styles/Available_page.css'
import SimpleImageSlider from "react-simple-image-slider";


function Available_page() {


  const sliderImages = [
    {
      url: "https://picsum.photos/200/300",
    },
    {
      url: "https://picsum.photos/300/300",
    },

  ];


  return (
    <>
      <div>

        <SimpleImageSlider
          width={500}
          height={250}
          images={sliderImages}
          showNavs={true}
        />
      </div>
    </>
  )
}

export default Available_page




