import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "@mui/styles";
import SliderItem from "./sliderItem/SliderItem";

import {
  ArrowCircleRightOutlined,
} from "@mui/icons-material";
import Button from "@mui/material/Button";
import Typography from "@material-ui/core/Typography";
const SliderContainer = styled("div")({
  height: "100%",
  // margin:"2% 0.3%",
  overflow: "hidden",
  backgroundColor: "white",
  boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
  "@media (max-width: 1490px)": {
    //  margin:"2% -1.5%"
  },
  "@media (max-width: 480px)": {
    backgroundColor: "white",
  },
});
const SliderInnerContainer = styled("div")({
  width:"93.75vw",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
});

// const PreviousBtn = (props) =>{
//   const {className,onClick} = props;

//    return (
//          <div className={className}   onClick={onClick}>
//           <ArrowCircleLeftOutlined style={{color:'black',zIndex:'100',fontSize:'3rem' }} />
//          </div>
//    )
// }

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowCircleRightOutlined
        style={{ color: "black", zIndex: "20", fontSize: "3rem" }}
      />
    </div>
  );
};

const SwiggySlider1 = (props) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    // prevArrow:<PreviousBtn />,
    nextArrow: <NextBtn />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 300,
          arrows: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 300,
          arrows: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 300,
          arrows: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 300,
          arrows: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          arrows: false,
          autoplay: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <SliderContainer>
        <SliderInnerContainer>
          <Slider {...settings}>
            {props.sliderData.map((item) => (
              <SliderItem posterLinks={item} />
            ))}
          </Slider>
        </SliderInnerContainer>
      </SliderContainer>
      <Button
        variant="contained"
        color="secondary"
        style={{ borderRadius: "15px", fontWeight: "bold" , display:"flex", justifyContent: "center"}} >
        <Typography variant="h5"> GET STARTED---- </Typography>
      </Button>
    </>
  );
};

export default SwiggySlider1;
