import { useState } from "react";

import styles from './Calculo.module.css'

const Calculo = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    const imc = () =>{
        const alturaAoQuadrado = altura * altura
        const alturaEmMetro = alturaAoQuadrado /10000
        const resultado = peso / alturaEmMetro
        return(
            resultado.toFixed(1)
        )
    }


    return(
        <header className="contaner">
            <h1 className={styles.h1}>Calculadora de IMC</h1>
            <form className={styles.form}>
                <input className={styles.text} type="number" placeholder="Coloquei sua Altura em cm" onChange={evento => setAltura(parseInt(evento.target.value))}/>
                <input className={styles.text} type="number" placeholder="Coloquei seu Peso em Kg" onChange={evento => setPeso(parseInt(evento.target.value))}/>
                <p className={styles.text}>Seu IMC é de {imc()}</p>
            </form>
        </header>
    )
}

export default Calculo;