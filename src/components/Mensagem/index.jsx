import React, { useState } from 'react';
import coracao from '../../assets/imagens/coracao_white.svg'
import coracaoVermelho from '../../assets/imagens/coracao.svg'
import styles from './styles.module.scss'
export default function Mensagem({children}){
  const [full, setFull] = useState(false)

  const mudaCoracao = () =>{
    setFull(prevState => !prevState)
  }
  return(
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>For you</h1>
        {full?  <img src={coracaoVermelho} onClick={mudaCoracao} />: 
        <img src={coracao} onClick={mudaCoracao}/>}
       
      </header>
      <div className={styles.corpo}>
      {children}
      </div>
    </div>
  )
}