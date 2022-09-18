import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as GoIcons from "react-icons/go";
import * as BsIcons from "react-icons/bs";
import * as HiIcons from "react-icons/hi";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Controle de Ponto',
    path: '/controle-de-ponto',
    icon: <BsIcons.BsFillCalendarFill />,
    cName: 'nav-text'
  },
  {
    title: 'Hora Extra',
    path: '/hora-extra',
    icon: <FaIcons.FaBusinessTime />,
    cName: 'nav-text'
  },
  {
    title: 'Sobreaviso',
    path: '/sobreaviso',
    icon: <RiIcons.RiTimeFill />,
    cName: 'nav-text'
  },
  {
    title: 'Relatórios',
    path: '/relatorios',
    icon: <HiIcons.HiDocument />,
    cName: 'nav-text'
  },
  {
    title: 'Autorização',
    path: '/autorizcao',
    icon: <GiIcons.GiStamper />,
    cName: 'nav-text'
  },
  {
    title: 'Cadastros',
    path: '/cadastros',
    icon: <AiIcons.AiOutlineForm />,
    cName: 'nav-text'
  },
  {
    title: 'Cliente',
    path: '/cliente',
    icon: <GoIcons.GoPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Projeto',
    path: '/projeto',
    icon: <AiIcons.AiFillProject />,
    cName: 'nav-text'
  },
  {
    title: 'Configuração',
    path: '/configuracao',
    icon: <BsIcons.BsFillGearFill />,
    cName: 'nav-text'
  }
];