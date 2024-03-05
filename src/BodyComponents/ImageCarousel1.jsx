import Slider from "react-slick";
const images = [
  "src/assets/photo1.jpeg",
  "src/assets/photo6.jpeg",
  "src/assets/photo4.jpeg",
  "src/assets/photo5.jpeg",
  "src/assets/photo7.jpeg",
  "src/assets/review1.jpeg",
  "src/assets/review2.jpeg"
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