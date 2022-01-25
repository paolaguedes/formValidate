import React, { useState, useContext } from 'react';
import { 
  TextField,
  Button, 
} from "@material-ui/core";
import Validacoes from '../../contexts/validacoes'
import useErros from '../../hooks/useErros'

export default function DadosUsuarios({aoEnviar}){
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const validacoes = useContext(Validacoes)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes)

  return(
    <form onSubmit={(event) => {
      event.preventDefault();
      
      if(possoEnviar())
        aoEnviar({email, senha})
    }}>
      <TextField 
      value={email}
      onChange={(event) => {
        setEmail(event.target.value
      )}}
      id="email" 
      label="Email"
      type="email" 
      required
      variant="outlined"
      margin="normal"
      fullWidth
      />
      <TextField 
      value={senha}
      onChange={(event) => {
        setSenha(event.target.value
      )}}
      onBlur={validarCampos}
      error={!erros.senha.valido}
      helperText={erros.senha.texto}
      id="senha" 
      label="Senha"
      name="senha"
      type="password" 
      required
      variant="outlined"
      margin="normal"
      fullWidth
      />
      <Button 
      type="submit" 
      variant="contained" 
      color="primary"
      >
      Próximo
      </Button>
    </form>
  )
}