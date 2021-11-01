import React from 'react';
import styles from './styles.module.scss'
export default function Pagina404() {
  return (
    <>
    <div className={styles.textoContainer}>
      <h1 className={styles.texto}>Nosso futuro gatin?</h1>
      <p className={styles.texto}>Sorry erro <strong>404</strong> essa não é uma pagina do site </p> </div>
      <div className={styles.tudo}>
        <div className={styles.container}>

          <div className={styles.cat}>
            <div className={styles.head}>
              <div className={styles.ears}>
                <div></div>
                <div></div>
              </div>
              <div className={styles.face}>
                <div className={styles.eyes}>
                  <div></div>
                  <div></div>
                </div>

                <div className={styles.nose}>
                  <div className={styles.mustache}>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className={styles.mustache}>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.body}>
              <div className={styles.tail}></div>
            </div>

            <div className={styles.sleep}>
              <div>z</div>
              <div>z</div>
              <div>z</div>
              <div>z</div>
              <div>z</div>
              <div>z</div>
            </div>
          </div>
        </div><div className={styles.bg}>

        </div></div></>
  )
}