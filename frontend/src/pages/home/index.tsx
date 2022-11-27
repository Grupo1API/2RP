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
import Button from "@material-ui/core/Button";
import React from "react";
import CentroResultado from "../cadastro_centro_resultado";
import { InputLabel, MenuItem, Select, TextField } from "@material-ui/core";

function Example() {
  const [variavelY, setVariavelY] = useState();
  const [legenda, setLegenda] = useState();
  const [listaCentroResultados, setlistaCentroResultados] = useState([]);
  const [listaAprovs, setListaAprovs] = useState([]);
  const [dados, setDados] = useState([]);
  const [horario_inicio, setHorarioInicio] = useState("");
  const [horario_fim, setHorarioFim] = useState("");

  useEffect(() => {
    listaAprov();
  }, []);

  async function listaAprov() {
    try {
      const response = await fetch(`http://localhost:3001/apontamento-horas/`, {
        method: "GET",
      });

      const data = await response.json();
      setListaAprovs(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  const teste = listaAprovs.map((x: any) => {
    return {
      name: x.tipo_apontamento,
      uv: x.id,
    };
  });

  // const data = [
  //   {
  //     name: "Page A",
  //     uv: 4000,

  //   },
  //   {
  //     name: "Page B",
  //     uv: 30000,

  //   },
  //   {
  //     name: "Page C",
  //     uv: 200,

  //   },
  //   {
  //     name: "Page D",
  //     uv: 280,

  //   },
  //   {
  //     name: "Page E",
  //     uv: 180,

  //   },
  //   {
  //     name: "Page F",
  //     uv: 230,

  //   },
  //   {
  //     name: "Page G",
  //     uv: 34000,

  //   },
  // ];

  return (
    <div>
      <div>
        <div className="sectionGrafico">
          <div>
            <h2>Filtro</h2>
            <div className="filtro">
              <TextField
                type="text"
                required
                placeholder="CPF/CNPJ da Unidade"
                //value={cpf_cnpjUnidade}
                // onChange={(e) => setCpf_cnpjUnidade(e.target.value)}
                label="CPF/CNPJ da Unidade"
                //onBlur={buscaUnidade}
                variant="outlined"
                className="input"
              />
              <TextField
                type="text"
                placeholder="Unidade"
                // value={unidade}
                disabled
                className="input"
                label="Unidade"
                variant="outlined"
              />
              <FormControl variant="outlined" className="select input">
                <InputLabel id="demo-simple-select-outlined-label">
                  Contratos
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  //  value={contratoId}
                  //  onChange={(e) => setContratoId(e.target.value)}
                  label="Contratos"
                >
                  {listaAprovs &&
                    listaAprovs.map((x: any) => (
                      <MenuItem value={x.id}>{`ID: ${x.id} `}</MenuItem>
                    ))}
                </Select>
              </FormControl>
              <Button
                // onClick={listaRelatorioAgua}
                type="button"
                variant="contained"
                color="primary"
                size="large"
              >
                Pesquisar
              </Button>
            </div>
          </div>
          {/* <GraficoAgua listaRelatorioAguas={listaRelatorioAguas} /> */}
        </div>
        <div className="sectionQuadro">
          {/* <h2>Contas Água</h2> */}
          {/* <RelatorioAguaa listaRelatorioAguas={listaRelatorioAguas} /> */}
        </div>
        <div>
          {/* grafico */}
          <AreaChart
            width={1200}
            height={750}
            //data={variavelY ? variavelY : data}
            data={variavelY ? variavelY : teste}
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
              name={legenda ? legenda : "teste12"}
              dataKey="uv"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
}

export default Example;
