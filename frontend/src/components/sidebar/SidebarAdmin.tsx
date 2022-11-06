import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as GoIcons from "react-icons/go";
import * as BsIcons from "react-icons/bs";
import * as HiIcons from "react-icons/hi";
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
    path: '/apontamento-horas',
    icon: <BsIcons.BsFillCalendarFill />,
    cName: 'nav-text'
  },
  {
    title: 'Aprovação',
    path: '/aprovacao-horas',
    icon: <FaIcons.FaBusinessTime />,
    cName: 'nav-text'
  },
  {
    title: 'Cliente',
    path: '/quadro-clientes',
    icon: <GoIcons.GoPerson />,
    cName: 'nav-text'
  },
  {
    title: 'Centro de Resultado',
    path: '/centro-resultado',
    icon: <AiIcons.AiFillProject />,
    cName: 'nav-text'
  },
  {
    title: 'Parametrização',
    path: '/parametrizacao',
    icon: <AiIcons.AiOutlineForm />,
    cName: 'nav-text'
  },
  {
    title: 'Relatórios',
    path: '/relatorios',
    icon: <HiIcons.HiDocument />,
    cName: 'nav-text'
  },
];