import Slider from "react-slick";
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo6.jpg'
import photo3 from '../assets/photo4.jpg'
import photo4 from '../assets/photo5.jpg'
import photo5 from '../assets/photo7.jpg'
import photo6 from '../assets/review1.jpg'
import photo7 from '../assets/image1.png'
import photo8 from '../assets/product9.png'



const images = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7
];

export default function ImageCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={images[6]}
          style={{ width: "220px", height: "17%", margin: "auto", border:'1px solid grey', boxShadow: '3px 3px 15px 2px var(--secondary)', borderRadius: '24px'}}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={images[5]}
          style={{ width: "220px", height: "17%", margin: "auto", border:'1px solid grey', boxShadow: '3px 3px 15px 2px var(--secondary)', borderRadius: '24px'}}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={images[2]}
          style={{ width: "220px", height: "17%", margin: "auto", border:'1px solid grey', boxShadow: '3px 3px 15px 2px var(--secondary)', borderRadius: '24px', }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={images[4]}
          style={{ width: "220px", height: "17%", margin: "auto", border:'1px solid grey', boxShadow: '3px 3px 15px 2px var(--secondary)', borderRadius: '24px'}}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={images[3]}
          style={{ width: "220px", height: "17%", margin: "auto", border:'1px solid grey', boxShadow: '3px 3px 15px 2px var(--secondary)', borderRadius: '24px'}}
        />
      </div>
    </Slider>
  );
}