import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from "react-icons/hi";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as GoIcons from "react-icons/go";


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    roles: ["administrador", "gestor", "colaborador"]
  },
  {
    title: 'Controle de Ponto',
    path: '/apontamento-horas',
    icon: <BsIcons.BsFillCalendarFill />,
    cName: 'nav-text',
    roles: ["administrador", "gestor", "colaborador"]
  },
  {
    title: 'Aprovação',
    path: '/aprov-hora-extra',
    icon: <FaIcons.FaBusinessTime />,
    cName: 'nav-text',
    roles: ["administrador", "gestor"]
  },
  {
    title: 'Cliente',
    path: '/quadro-clientes',
    icon: <GoIcons.GoPerson />,
    cName: 'nav-text',
    roles: ["administrador"]
  },
  {
    title: 'Centro de Resultado',
    path: '/quadro-centro-resultado',
    icon: <AiIcons.AiFillProject />,
    cName: 'nav-text',
    roles: ["administrador"]
  },
  {
    title: 'Parametrização',
    path: '/parametros',
    icon: <AiIcons.AiOutlineForm />,
    cName: 'nav-text',
    roles: ["administrador"]
  },
  {
    title: 'Horas Classificadas',
    path: '/classificacao',
    icon: <HiIcons.HiDocument />,
    cName: 'nav-text',
    roles: ["administrador"]
  },
];


