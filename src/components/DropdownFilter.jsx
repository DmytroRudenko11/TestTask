import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { BiFilterAlt, BiSolidFilterAlt } from "react-icons/bi";

const options = ["All tweets", "Not followed", "Followed by you"];

export const DropdownFilter = ({ filterHandler }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    filterHandler(value);
    setIsOpen(false);
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {selectedOption || `Apply filter `}
        {selectedOption ? <BiSolidFilterAlt /> : <BiFilterAlt />}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

DropdownFilter.propTypes = {
  filterHandler: PropTypes.func.isRequired,
};

const DropDownContainer = styled.div``;

const DropDownHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  width: 215px;
  height: 50px;
  margin-bottom: 10px;

  color: #5736a3;
  background-color: #e3ca3f;

  border-radius: 8px;
  -webkit-box-shadow: 0px 1px 8px 4px rgba(190, 164, 210, 1);
  -moz-box-shadow: 0px 1px 8px 4px rgba(190, 164, 210, 1);
  box-shadow: 0px 1px 8px 4px rgba(190, 164, 210, 1);

  font-weight: 500;
  font-size: 21px;

  cursor: pointer;
  transition: all 250ms linear;
  &:hover {
    background-color: #fcd929;
  }
`;

const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 20;
`;

const DropDownList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 215px;
  padding: 10px;
  box-sizing: border-box;
  margin: 0;
  color: #5736a3;
  background-color: #e3ca3f;
  border-radius: 8px;
  -webkit-box-shadow: 0px 1px 8px 4px rgba(190, 164, 210, 1);
  -moz-box-shadow: 0px 1px 8px 4px rgba(190, 164, 210, 1);
  box-shadow: 0px 1px 8px 4px rgba(190, 164, 210, 1);

  font-size: 21px;
  font-weight: 500;
`;

const ListItem = styled.li`
  list-style: none;
  padding-left: 7px;
  padding-bottom: 3px;
  &:hover {
    color: #fcd929;
    border-radius: 8px;
    background-color: #5736a3;
    cursor: pointer;
  }
`;
