// dependencies
import { useEffect, useState } from 'react';

// Components
import Carousel from './carousel/Carousel'

const Content = () => {

  const TOTAL_NUMBER_OF_IMAGES = 5
  // initialize the initial state and its modifier function
  const [carouselData, setCarouselData] = useState(
    {
      active: 1,
      total: TOTAL_NUMBER_OF_IMAGES
    })

  // update the image when the arrow is clicked
  const updateImage = (e) => {
    let { id } = e.target
    let { active, total } = carouselData

    if (id == "left") {
      active = (active > 1) ? active - 1 : 1
    } else if (id == "right") {
      active = (active < total) ? active + 1 : total
    }
    setCarouselData({ ...carouselData, active })
  }

  const { active, total } = carouselData
  return (
    <div className="content">
      <Carousel srcNumber={active} total={total} updateImage={updateImage} />
    </div>
  );
};

export default Content;
