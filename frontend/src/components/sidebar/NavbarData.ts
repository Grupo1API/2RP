import * as FaIcons from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

export const Nav = styled('nav')`
background-color: #060b26;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
justify-content:space-between;

`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaIcons.FaBars)`
    cursor: pointer;
    margin-left: 2rem;
    margin-top: 5rem;
    font-size: 2rem;
    background: none;
  }
`;

export const NavMenu = styled('div')`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled('nav')`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  margin-left: 65rem;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
