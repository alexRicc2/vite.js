import React from 'react';
import styles from './styles.module.scss'
export default function Coracao(){
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
      <h1 className={styles.title}>Espero que goste</h1>
      <p>Eu não sei mexer muito com animações em css, então foi uma bem simpleszinha que eu entendi, você ainda precisa me ensinar :3</p>
      </div>
    <div className={styles.heart}></div>
    </div>
  )
}