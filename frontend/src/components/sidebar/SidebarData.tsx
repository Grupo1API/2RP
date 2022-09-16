import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GoIcons from "react-icons/go";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Cliente',
    path: '/cliente',
    icon: <GoIcons.GoPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Centro de Resultados',
    path: '/squad',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Hora Extra',
    path: '/messages',
    icon: <GoIcons.GoPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];