import React, { useState, useEffect } from "react";

import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";
import { 
  Typography, 
  Stepper,
  Step,
  StepLabel
} from "@material-ui/core";

function FormularioCadastro({aoEnviar, validacoes}) {

const [etapaAtual, setEtapaAtual] = useState(0)
const [dadosColetados, setDadosColetados] = useState({})

useEffect(()=> {
  if(etapaAtual === formularios.length - 1)
    aoEnviar(dadosColetados)
})

const formularios = [
  <DadosUsuarios aoEnviar={coletaDados} validacoes={validacoes}/>,
  <DadosPessoais aoEnviar={coletaDados} validacoes={validacoes}/>,
  <DadosEntrega aoEnviar={coletaDados} validacoes={validacoes}/>,
  <Typography variant='h5'>Obrigado por se cadastrar</Typography>
]

function coletaDados(dados){
  setDadosColetados({...dadosColetados, ...dados})
  proximaEtapa()
}

function proximaEtapa(){
  setEtapaAtual( etapaAtual + 1 )
}
 
return (
   <>
   <Stepper activeStep={etapaAtual}>
     <Step>
        <StepLabel>Login</StepLabel>
     </Step>
     <Step>
        <StepLabel>Pessoal</StepLabel>
     </Step>
     <Step>
        <StepLabel>Endereço</StepLabel>
     </Step>
     <Step>
        <StepLabel>Finalização</StepLabel>
     </Step>
   </Stepper>
   { formularios[etapaAtual] }
   </>
  )
}

export default FormularioCadastro;
