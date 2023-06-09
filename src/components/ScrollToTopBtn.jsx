import { useState, useEffect } from "react";
import styled from "styled-components";

import { FaArrowUp } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const topOffset = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(topOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ButtonWrapper>
      {isVisible && (
        <Button onClick={scrollToTop}>
          <IconContext.Provider value={{ color: "#5736a3", size: "28px" }}>
            <FaArrowUp />
          </IconContext.Provider>
        </Button>
      )}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
`;

const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 13px;

  background-color: #e3ca3f;
  -webkit-box-shadow: 0px 1px 8px 4px rgba(190, 164, 210, 1);
  -moz-box-shadow: 0px 1px 8px 4px rgba(190, 164, 210, 1);
  box-shadow: 0px 1px 8px 4px rgba(190, 164, 210, 1);

  cursor: pointer;
  border: none;
  outline: none;
  transition: all 250ms linear;
  &:hover {
    background-color: #fcd929;
  }
`;
