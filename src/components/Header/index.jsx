import React from 'react';
import coracao from '../../assets/imagens/coracao.svg'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom';
export default function Header(){
  return (
    <header className={styles.header}>
    <Link to="/">
    <img src={coracao} className={styles.coracao}/>
    </Link>
    <ul className={styles.itens}>
    <li>
      <Link to="/textinho" className={styles.link}>Textin :3</Link>
    </li>
    <li>
      <Link to="/coracao" className={styles.link}>Animação </Link>
    </li>
    <li>
      <Link to="/listinha" className={styles.link}>Nossa listinha</Link>
    </li>
    
    </ul>
    
    </header>
  )
}