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
    title: 'Projetos',
    path: '/projeto',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Hora Extra',
    path: '/hora-extra',
    icon: <GoIcons.GoPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Hora Sobreaviso',
    path: '/hora-sobreaviso',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];