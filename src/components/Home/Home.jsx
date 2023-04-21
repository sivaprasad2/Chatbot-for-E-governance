import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { useState } from "react";
import styled from "styled-components";
import './Home.css'

const sliderItems = [
  {
    id: 1,
    img: "https://www.goodreturns.in/img/2021/06/schemes-1623581556.jpg",
  },
  {
    id: 2,
    img: "https://www.goodreturns.in/img/2021/06/latest-govt-schemes-2021-1623581025.jpg",
  },
  {
    id: 3,
    img: "https://www.goodreturns.in/img/600x90/2021/06/1-1623580930.jpg",
  },
];

const Wrapper = styled.div`
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  background-color: #${(props) => props.bg};
`;

const Arrow = styled.div`
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;


const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className='slider-container'>
      <Arrow direction="left" className='left' onClick={() => handleClick("left")}>
        <KeyboardArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex} className='wrapper'>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id} className='slide'>
            <div className='img-container'>
              <img src={item.img} />
            </div>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" className='right' onClick={() => handleClick("right")}>
        <KeyboardArrowRightOutlinedIcon />
      </Arrow>
    </div>
  );
};

export default Home;
