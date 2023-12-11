import { useState } from "react";
import styles from "./Container.module.css";

export default function Container() {
  const [num, setNum] = useState("");
  const [oldNum, setOldNum] = useState(0);
  const [valor, setValor] = useState(0);
  const [resumoConta, setResumoConta] = useState([0]);
  const [operador, setOperador] = useState("");
  const [zerarNum, setZerarNum] = useState(1);
  const [teste, setTeste] = useState(0);
  const [teste2, setTeste2] = useState(0);

  function pegarNum(e) {
    if (zerarNum !== 0) {
      setNum(num + e.target.value);
      setValor(num + e.target.value);
    }
    if (zerarNum === 0) {
      setNum(e.target.value);
      setValor(e.target.value);
    }
    if (teste2 === 1 && operador === "+") {
      setNum(parseFloat(valor) + parseFloat(e.target.value));
      setValor(parseFloat(valor) + parseFloat(e.target.value));
      setTeste2(0);
    }
    if (teste2 === 1 && operador === "-") {
      setNum(parseFloat(valor) - parseFloat(e.target.value));
      setValor(parseFloat(valor) - parseFloat(e.target.value));
      setTeste2(0);
    }
    if (teste2 === 1 && operador === "/") {
      setNum(parseFloat(valor) / parseFloat(e.target.value));
      setValor(parseFloat(valor) / parseFloat(e.target.value));
      setTeste2(0);
    }
    if (teste2 === 1 && operador === "*") {
      setNum(parseFloat(valor) * parseFloat(e.target.value));
      setValor(parseFloat(valor) * parseFloat(e.target.value));
      setTeste2(0);
    }
    if (teste2 === 0) {
      setNum(e.target.value);
      setValor(e.target.value);
    }

    if (resumoConta[0] === 0) {
      setResumoConta([e.target.value]);
    }
    if (resumoConta[0] !== 0) {
      setResumoConta([...resumoConta, e.target.value]);
    }
    if (resumoConta[0] !== 0 && zerarNum === 0) {
      setResumoConta([e.target.value]);
      setZerarNum(1);
    }
  }

  function fazerOperacao(e) {
    setOperador(e.target.value);
    setTeste(teste + 1);

    if (teste === 0) {
      setOldNum(num);
      setNum("");
      setResumoConta([...resumoConta, e.target.value]);
    }

    if (teste !== 0) {
      if (operador === "+") {
        setValor(parseFloat(oldNum) + parseFloat(num));
        setNum(parseFloat(oldNum) + parseFloat(num));
        setResumoConta([...resumoConta, "+"]);
      }
      if (operador === "-") {
        setValor(parseFloat(oldNum) - parseFloat(num));
        setNum(parseFloat(oldNum) - parseFloat(num));
        setResumoConta([...resumoConta, "-"]);
      }
      if (operador === "/") {
        setValor(parseFloat(oldNum) / parseFloat(num));
        setNum(parseFloat(oldNum) / parseFloat(num));
        setResumoConta([...resumoConta, "/"]);
      }
      if (operador === "*") {
        setValor(parseFloat(oldNum) * parseFloat(num));
        setNum(parseFloat(oldNum) * parseFloat(num));
        setResumoConta([...resumoConta, "*"]);
      }

      setTeste(0);
      setOldNum(num);
      setNum("");
      setTeste2(1);
    }
  }

  function calcular() {
    
    if(teste2!==0){
      if (operador === "+") {
        setValor(parseFloat(oldNum) + parseFloat(num));
        setNum(parseFloat(oldNum) + parseFloat(num));
      }
      if (operador === "-") {
        setValor(parseFloat(oldNum) - parseFloat(num));
        setNum(parseFloat(oldNum) - parseFloat(num));
      }
      if (operador === "/") {
        setValor(parseFloat(oldNum) / parseFloat(num));
        setNum(parseFloat(oldNum) / parseFloat(num));
      }
      if (operador === "*") {
        setValor(parseFloat(oldNum) * parseFloat(num));
        setNum(parseFloat(oldNum) * parseFloat(num));
      }
      setZerarNum(0);
      const zerarNum = 0;
      setResumoConta([...resumoConta, "="]);
      setTeste(0);
    }else{
      setZerarNum(0);
      const zerarNum = 0;
      setResumoConta([...resumoConta, "="]);
      setTeste(0);
    }
  }

  function allClear() {
    setNum("");
    setOperador("");
    setValor(0);
    setResumoConta([0]);
    setOldNum(0);
    setZerarNum(1);
  }
  console.log(teste, "TESTE");
  console.log(valor, "VALOR");
  console.log(teste2, "TESTE2");
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.resultados}>
          <div>
            <h2>{resumoConta}</h2>
          </div>
          <div>
            <h1>{valor}</h1>
          </div>
        </div>

        <div className={styles.linha2}>
          <hr className={styles.linha}></hr>
        </div>

        <div className={styles.botoesGrupo}>
          <button
            value={"AC"}
            onClick={allClear}
            className={`${styles.botao} ${styles.botaoTop}`}
          >
            AC
          </button>
          <button
            value={"+/-"}
            className={`${styles.botao} ${styles.botaoTop}`}
          >
            +/-
          </button>
          <button value={"%"} className={`${styles.botao} ${styles.botaoTop}`}>
            %
          </button>
          <button
            value={"/"}
            onClick={fazerOperacao}
            className={`${styles.botao} ${styles.botaoRight}`}
          >
            /
          </button>
          <button value={7} onClick={pegarNum} className={styles.botao}>
            7
          </button>
          <button value={8} onClick={pegarNum} className={styles.botao}>
            8
          </button>
          <button value={9} onClick={pegarNum} className={styles.botao}>
            9
          </button>
          <button
            value={"*"}
            onClick={fazerOperacao}
            className={`${styles.botao} ${styles.botaoRight}`}
          >
            X
          </button>
          <button value={4} onClick={pegarNum} className={styles.botao}>
            4
          </button>
          <button value={5} onClick={pegarNum} className={styles.botao}>
            5
          </button>
          <button value={6} onClick={pegarNum} className={styles.botao}>
            6
          </button>
          <button
            value={"-"}
            onClick={fazerOperacao}
            className={`${styles.botao} ${styles.botaoRight}`}
          >
            -
          </button>
          <button value={1} onClick={pegarNum} className={styles.botao}>
            1
          </button>
          <button value={2} onClick={pegarNum} className={styles.botao}>
            2
          </button>
          <button value={3} onClick={pegarNum} className={styles.botao}>
            3
          </button>
          <button
            value={"+"}
            onClick={fazerOperacao}
            className={`${styles.botao} ${styles.botaoRight}`}
          >
            +
          </button>
          <button
            value={0}
            onClick={pegarNum}
            className={`${styles.botao} ${styles.zero}`}
          >
            0
          </button>
          <button value={"."} className={styles.botao}>
            .
          </button>
          <button
            value={"="}
            onClick={calcular}
            className={`${styles.botao} ${styles.botaoRight}`}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
