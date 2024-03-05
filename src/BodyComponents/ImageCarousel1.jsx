import Slider from "react-slick";
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo6'
import photo3 from '../assets/photo4'
import photo4 from '../assets/photo5'
import photo5 from '../assets/photo7'
import photo6 from '../assets/review1'
import photo7 from '../assets/review2'



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
          src={images[4]}
          alt="fustan 1}"
          style={{ width: "40%", height: "17%", margin: "auto", border:'1px solid grey', boxShadow: '3px 3px 15px 2px var(--secondary)', borderRadius: '24px'}}
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
          alt="fustan 1}"
          style={{ width: "40%", height: "17%", margin: "auto", border:'1px solid grey', boxShadow: '3px 3px 15px 2px var(--secondary)', borderRadius: '24px'}}
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
          alt="fustan 1}"
          style={{ width: "40%", height: "17%", margin: "auto", border:'1px solid grey', boxShadow: '3px 3px 15px 2px var(--secondary)', borderRadius: '24px', }}
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
          src={images[1]}
          alt="fustan 1}"
          style={{ width: "40%", height: "17%", margin: "auto", border:'1px solid grey', boxShadow: '3px 3px 15px 2px var(--secondary)', borderRadius: '24px'}}
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
          alt="fustan 1}"
          style={{ width: "40%", height: "17%", margin: "auto", border:'1px solid grey', boxShadow: '3px 3px 15px 2px var(--secondary)', borderRadius: '24px'}}
        />
      </div>
    </Slider>
  );
}