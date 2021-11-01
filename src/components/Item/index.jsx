import React from 'react';
import styles from './styles.module.scss';
export default function Item({atualiza, id, children, concluida}){

  const deletarTarefa = () => { 
    const index = id
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    tarefasCadastradas.splice(index, 1)
    console.log('tarefascadastradas: ',tarefasCadastradas)
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))
    atualiza(tarefasCadastradas)
   }

   const concluirTarefa = () => {
    const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas'))

    tarefaCadastradas[id].concluida = !tarefaCadastradas[id].concluida
    localStorage.setItem('tarefas', JSON.stringify(tarefaCadastradas))
    atualiza(tarefaCadastradas)
  }

  return (
    <li className={styles.container}>
      {concluida? <p className={styles.done}>{children} 💓</p>
       : <p className={styles.text}>{children} 💓</p>}
      
      <div>
      <button onClick={concluirTarefa} className={styles.button}>concluir</button>
      <button onClick={deletarTarefa} className={styles.button}>delete</button>
      </div>
    </li>
  )
}