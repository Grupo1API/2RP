import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useEffect, useState } from "react";
import Radio from "@material-ui/core/Radio";
import "./style.css";
import React from "react";
import CentroResultado from "../cadastro_centro_resultado";

function Example() {
  const [variavelY, setVariavelY] = useState();
  const [legenda, setLegenda] = useState();
  const [listaCentroResultados, setlistaCentroResultados] = useState([]);

  // useEffect(() => {
  //   listaCentroResultado();
  // }, []);

  // async function listaCentroResultado() {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:3001/centro-de-resultados/`,
  //       {
  //         method: "GET",
  //       }
  //     );
  //     const data = await response.json();
  //     setlistaCentroResultados(data);
  //     console.log(data);

  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }
  // const teste = listaCentroResultados.map((x:any) => {
  // return{
  //   name: (x.nome),
  //   uv: (x.status),
  // };
  // });

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <AreaChart
      width={730}
      height={250}
      //data={variavelY ? variavelY : teste}
      data={variavelY ? variavelY : data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        name={legenda ? legenda : "teste2"}
        dataKey="uv"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      <Area
        type="monotone"
        name={legenda ? legenda : "teste2"}
        dataKey="pv"
        stroke="#82ca9d"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
  );
}

export default Example;
