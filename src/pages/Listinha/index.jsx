import React, { useEffect, useState } from 'react';
import Item from '../../components/Item';
import styles from './styles.module.scss';
import ItensPadrao from '../../components/ItensPadrao';
export default function Listinha() {

  const [texto, setTexto] = useState('');
  
  
  const [tarefas, setTarefas] = useState(
    JSON.parse(localStorage.getItem('tarefas')) || []
  )



  const handleNovoItem = (evento) => {
    evento.preventDefault()
    const tarefasLocal = JSON.parse(localStorage.getItem('tarefas')) || []
    console.log('tarefas antes: ', tarefas)
    const concluida = false

    const dados = {
      texto,
      concluida
    }

    const tarefasAtualizadas = [...tarefasLocal, dados]
    console.log('tarefas atualizadas:', tarefasAtualizadas)
    setTarefas(tarefasAtualizadas)
    console.log('tarefas depois:', tarefas)
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))

  }

  return (
    <main className={styles.container}>
      
      <div className={styles.bloconotas}>
        <form className={styles.form} action="" onSubmit={handleNovoItem}>
          <h3>Lista de coisas a fazer juntos</h3>
          <div className={styles.inputContainer}>
          <input className="form-input"
            value={texto}
            onChange={(event) => {
              setTexto(event.target.value)
            }}
            placeholder="Nova atividade juntos"
          />

          <button className="form-button" data-form-button type="submit"> Adicionar </button>
          </div>
        </form>
        <ul className={styles.lista}>
          
          {tarefas.map((tarefa, id) => <Item key={id} atualiza={setTarefas} id={id} concluida={tarefa.concluida}>{tarefa.texto}</Item>)}
          <ItensPadrao/> 
        </ul>
          <p className={styles.message}>I love you 💓</p>
      </div>
      <h1 className={styles.comment}>Me manda print da sua listinha, para a gente fzer dps :3</h1>

    </main>
  )
}