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
  Legend,
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
import { VisualizarButton } from "../../components/Button/styles";
import diferencaEntreHorarios from '../../functions/diferencaEntreHorarios'
import zIndex from "@material-ui/core/styles/zIndex";

function Example() {
  const [variavelY, setVariavelY] = useState();
  const [legenda, setLegenda] = useState();
  const [listaCentroResultados, setlistaCentroResultados] = useState([]);
  const [listaAprovs, setListaAprovs] = useState([]);
  const [dados, setDados] = useState([]);
  const [horario_inicio, setHorarioInicio] = useState("");
  const [horario_fim, setHorarioFim] = useState("");
  const [listaClientes, setListaClientes] = useState([]);
  const [listaUsuarios, setListaUsuarios] = useState([]);

  useEffect(() => {
    listaAprov();
  }, []);

  async function listaAprov() {
    const token = localStorage.getItem("user")
    try {
      const response = await fetch(`http://localhost:3001/apontamento-horas/`, {
        method: "GET",
        headers: new Headers({
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
       })
      });

      const data = await response.json();
      setListaAprovs(data);
    } catch (error) {
      console.log(error.message);
    }
  }


  async function listaUsuario() {
    const token = localStorage.getItem("user")
    try {
      const response = await fetch(`http://localhost:3001/usuarios`, {
        method: "GET",
        headers: new Headers({
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
       })
      });
      const data = await response.json();
      setListaUsuarios(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    listaUsuario();
  }, []);


  const teste = listaAprovs.map((x: any) => {
      
    const quantidade_horas = diferencaEntreHorarios(x.horario_inicio,x.horario_fim)
    const Usuario = listaUsuarios.map((z:any) =>  
     (z.nome))
    
    return {
      name: Usuario,
      uv: quantidade_horas
    };
  });

  const user = listaUsuarios.map((z:any) => {
    return {
      name2: z.nome
    }
  })


  useEffect(() => {
    listaCliente();
  }, []);

  async function listaCliente() {
    const token = localStorage.getItem("user")
    try {
      const response = await fetch(`http://localhost:3001/clientes/`, {
        method: "GET",
        headers: new Headers({
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
       })
      });
      const data = await response.json();
      setListaClientes(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    listaCentroResultado();
  }, []);

  async function listaCentroResultado() {
    const token = localStorage.getItem("user")
    try {
      const response = await fetch(
        `http://localhost:3001/centro-de-resultados/`,
        {
          method: "GET",
          headers: new Headers({
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
   })
        }
      );
      const data = await response.json();

      setlistaCentroResultados(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  

 

  return (
    <div>
      <div>
        <div className="sectionGrafico">
          <div>
            <h2>Controle de Ponto - Dashboard Geral</h2>
          
            <div className="filtro">
            
            <FormControl fullWidth size="small" variant="outlined" className="select input">
                <InputLabel id="demo-select-small">
                  Centro de Resultado
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="Centro de Resultado"
                >
                  {listaCentroResultados &&
                    listaCentroResultados.map((x: any) => (
                      <MenuItem
                        value={x.id}
                      >{`ID: ${x.id} / Nome: ${x.nome} / Número: ${x.numero}`}</MenuItem>
                    ))}
                </Select>
              </FormControl>
              
              <FormControl fullWidth size="small" variant="outlined" className="select input">
                <InputLabel id="demo-select-small">
                  Clientes
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="Clientes"
                >
                  {listaClientes &&
                    listaClientes.map((x: any) => (
                      <MenuItem
                        value={x.id}
                      >{`ID: ${x.id} / Nome: ${x.nome} / Projeto: ${x.nome_projeto}`}</MenuItem>
                    ))}
                </Select>
              </FormControl>

              <FormControl fullWidth size="small" variant="outlined" className="select input">
                <InputLabel id="demo-select-small">
                  Colaboradores
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="Colaboradores"
                >
                  {listaAprovs &&
                    listaAprovs.map((x: any) => (
                      <MenuItem
                        value={x.id}
                      >{`ID: ${x.id} / Tipo de apontamento: ${x.tipo_apontamento}`}</MenuItem>
                    ))}
                </Select>
              </FormControl>
              <br/> 
             
             
              <VisualizarButton fullWidth
                type="button"
                variant="contained"
                size="medium"
                id = "pesquisar"
              >
                Filtrar
              </VisualizarButton>
            </div>
          </div>
        </div>
        <div className="sectionQuadro">

        </div>
        <div>
          {/* grafico */}
          <AreaChart
            width={1000}
            height={300}
            data={teste}
            margin={{ top: 10, right: 0, left: 50, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B7EC4" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3B7EC4" stopOpacity={0} />
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
            <Legend verticalAlign="top" height={36}/>
            <Area
              type="monotone"
              name = {legenda ? legenda : "Quantidade de Horas"}
              dataKey="uv"
              stroke="#3B7EC4"
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
