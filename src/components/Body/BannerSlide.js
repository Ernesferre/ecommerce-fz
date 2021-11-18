import { Box, Link } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/image";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Banner_1 from "../../assets/Banners/Banner_1.png";
import Banner_2 from "../../assets/Banners/Banner_2.png";
import Banner_3 from "../../assets/Banners/Banner_3.png";
import Banner_4 from "../../assets/Banners/Banner_4.png";

const BannerSlide = () => {
  const [banners, setBanners] = useState([]);

  const NextArrow = ({ onClick }) => {
    return (
      <Box
        color="white"
        onClick={onClick}
        position="absolute"
        top="180px"
        right="20px"
      >
        <IoIosArrowForward size="40px" />
      </Box>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <Box
        color="white"
        onClick={onClick}
        position="absolute"
        top="180px"
        left="20px"
        zIndex="1"
      >
        <IoIosArrowBack size="40px" />
      </Box>
    );
  };

  const settings = {
    Type: "bool",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  useEffect(() => {
    axios
      .get("http://remote.fizzmod.com/body.json")
      .then((res) => setBanners(res.data.slides));
  }, []);

  const images = [Banner_1, Banner_2, Banner_3, Banner_4];

  // console.log(banners);
  // console.log(images);

  const [href] = banners;
  // console.log(href);

  return (
    <>
      <Slider {...settings}>
        {images.map((slide, index) => (
          <Link
            Key={index}
            href={href}
            // color="black"
          >
            <Img
              key={index}
              src={slide}
              alt="Banner"
              // href={href}
              objectFit={["fill", "cover"]}
              h={["160px", "400px"]}
              w={["360px", "1280px"]}
            />
            {slide.imgName}
          </Link>
        ))}
      </Slider>
    </>
  );
};

export default BannerSlide;
