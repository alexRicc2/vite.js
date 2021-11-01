import React from 'react';
import styles from './styles.module.scss';

export default function ItensPadrao(){
  return (
    <>
    <hr className={styles.linha}></hr>
    <h3 className={styles.texto}>Lista padrao 31/10/2021</h3>
    <li><p className={styles.texto}>Andar de bike juntos</p></li>
    <li><p className={styles.texto}>Assistir You</p></li>
    <li><p className={styles.texto}>Terminar a Duofront</p></li>
    <li><p className={styles.texto}>Usar akela mascara hehe</p></li>
    <li><p className={styles.texto}>Cozinhar algo</p></li>
    </>
    )
}