import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';

import {validarCPF, validarSenha} from './models/cadastro';

import {Container, Typography } from "@material-ui/core"

import Validacoes from "./contexts/validacoes"

export default function App() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
       <Validacoes.Provider value={{ 
        cpf: validarCPF, 
        senha: validarSenha 
        }}>
          <FormularioCadastro aoEnviar={aoEnviarForm} />
       </Validacoes.Provider>
       
      </Container>
    );
  }

function aoEnviarForm(dados){
  console.log(dados);
}

