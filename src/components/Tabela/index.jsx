import styles from './Tabela.module.css'

const Tabela = () => {

    return(
        <div className="container">
            <thead className={styles.thead}>
                <th>IMC (kg/m²)</th>
                <th>Classificação</th>
            </thead>
            <tbody className={styles.tbody}>
                <tr className={styles.tr}>
                    <td>Menor que 18,5</td>
                    <td>Abaixo do peso</td>
                </tr>
                <tr className={styles.tr}>
                    <td>18,5 – 24,9</td>
                    <td>Peso normal</td>
                </tr>
                <tr className={styles.tr}> 
                    <td>25 – 29,9</td>
                    <td>Sobrepeso</td>
                </tr>
                <tr className={styles.tr}>
                    <td>30 – 34,9</td>
                    <td>Obesidade grau 1</td>
                </tr>
                <tr className={styles.tr}>
                    <td>35 – 39,9</td>
                    <td>Obesidade grau 2</td>
                </tr>
                <tr className={styles.tr}>
                    <td>40 ou mais</td>
                    <td>Obesidade grau 3</td>
                </tr>
            </tbody>
        </div>
    )
}

export default Tabela;