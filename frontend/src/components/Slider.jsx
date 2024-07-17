import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/WEBSITE_Pics/img1.jpeg'
import img2 from '../assets/WEBSITE_Pics/img2.jpeg'
import img3 from '../assets/WEBSITE_Pics/img3.jpg'
import img4 from '../assets/WEBSITE_Pics/img4.jpeg'
// import img5 from '../assets/WEBSITE_Pics/img5.JPG'


export default function Slider() {
  return (
    <Carousel>
       <Carousel.Item>
      <img src={img4} alt="" /> 
    </Carousel.Item>
    {/* <Carousel.Item>
      <img src={img5} alt="" /> 
    </Carousel.Item> */}
    <Carousel.Item>
      <img src={img1} alt="" />
    </Carousel.Item>
    <Carousel.Item>
      <img src={img2} alt="" />
    </Carousel.Item>
    <Carousel.Item>
      <img src={img3} alt="" />
    </Carousel.Item>
  </Carousel>
  )
}
