import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from "react-icons/hi";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Apontamento de Horas',
    path: '/apontamento-horas',
    icon: <RiIcons.RiTimeFill />,
    cName: 'nav-text'
  },
  {
    title: 'Relatórios',
    path: '/relatorios',
    icon: <HiIcons.HiDocument />,
    cName: 'nav-text'
  }
];