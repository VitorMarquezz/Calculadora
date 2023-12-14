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
  const limiteResultado = 999999999999999;
  const limiteResumo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [guardarValor, setGuardarValor] = useState(0);
  const [executarOperacaoInicio, setExecutarOperacaoInicio] = useState(0);
  const [limparResumo, setLimparResumo] = useState(0);

  function pegarNum(e) {
    if (zerarNum !== 0 && valor <= limiteResultado) {
      setNum(num + e.target.value);
      setValor(num + e.target.value);
    }
    if (zerarNum === 0 && valor <= limiteResultado) {
      setNum(e.target.value);
      setValor(e.target.value);
    }

    if (resumoConta[0] === 0) {
      setResumoConta([e.target.value]);
    }
    if (resumoConta[0] !== 0 && limparResumo !== 0) {
      setResumoConta([e.target.value]);
      setZerarNum(1);
      setLimparResumo(0)
    }
    if (resumoConta[0] !== 0 && limparResumo === 0) {
      setResumoConta([...resumoConta, e.target.value]);
      setZerarNum(1);
    }
  }

  function fazerOperacao(e) {
    setOperador(e.target.value);
    setTeste(1);
    setOldNum(valor);
    setValor(0);
    setZerarNum(0);

    if (teste === 0) {
      if (operador === "+") {
        setGuardarValor(parseFloat(guardarValor) + parseFloat(valor));
      }
      if (operador === "-") {
        setGuardarValor(parseFloat(guardarValor) - parseFloat(valor));
      }

      setResumoConta([...resumoConta, e.target.value]);
    }

    if (teste !== 0 && executarOperacaoInicio === 0) {
      if (operador === "+") {
        setGuardarValor(parseFloat(oldNum) + parseFloat(valor));
        const guardarValor = parseFloat(oldNum) + parseFloat(valor);
        setResumoConta([...resumoConta, "+"]);
        setTeste(0);
        setExecutarOperacaoInicio(1);
      }
      if (operador === "-") {
        setGuardarValor(parseFloat(oldNum) - parseFloat(valor));
        const guardarValor = parseFloat(oldNum) - parseFloat(valor);
        setResumoConta([...resumoConta, "-"]);
        setTeste(0);
        setExecutarOperacaoInicio(1);
      }
    }

    if (teste !== 0 && executarOperacaoInicio === 1) {
      if (operador === "+") {
        setGuardarValor(parseFloat(guardarValor) + parseFloat(valor));
        setResumoConta([...resumoConta, "+"]);
      }
      if (operador === "-") {
        setGuardarValor(parseFloat(guardarValor) - parseFloat(valor));
        setResumoConta([...resumoConta, "-"]);
      }
      setTeste(0);
      setExecutarOperacaoInicio(1);
    }
  }

  function calcular() {
    if (teste === 0) {
      if (operador === "+") {
        setGuardarValor(parseFloat(guardarValor) + parseFloat(valor));
      }
      if (operador === "-") {
        setGuardarValor(parseFloat(guardarValor) - parseFloat(valor));
      }

      setResumoConta([...resumoConta, "="]);
    }
    if (teste !== 0 && executarOperacaoInicio === 0) {
      if (operador === "+") {
        setGuardarValor(parseFloat(oldNum) + parseFloat(valor));
        const guardarValor = parseFloat(oldNum) + parseFloat(valor);
        setResumoConta([...resumoConta, "="]);
        setTeste(0);
        setExecutarOperacaoInicio(1);
      }
      if (operador === "-") {
        setGuardarValor(parseFloat(oldNum) - parseFloat(valor));
        const guardarValor = parseFloat(oldNum) - parseFloat(valor);
        setResumoConta([...resumoConta, "="]);
        setTeste(0);
        setExecutarOperacaoInicio(1);
      }
    }

    if (teste !== 0 && executarOperacaoInicio === 1) {
      if (operador === "+") {
        setGuardarValor(parseFloat(guardarValor) + parseFloat(valor));
        setResumoConta([...resumoConta, "="]);
      }
      if (operador === "-") {
        setGuardarValor(parseFloat(guardarValor) - parseFloat(valor));
        setResumoConta([...resumoConta, "="]);
      }
      setTeste(0);
      setExecutarOperacaoInicio(1);
    }
    setZerarNum(0);
    setLimparResumo(1);
    console.log(zerarNum);
  }

  function allClear() {
    setNum("");
    setOperador("");
    setValor(0);
    setResumoConta([0]);
    setOldNum(0);
    setZerarNum(1);
    setTeste(0);
    setExecutarOperacaoInicio(0);
    setGuardarValor(0);
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.resultados}>
          <div>
            <h2>{resumoConta}</h2>
          </div>
          <div>
            <h1>{guardarValor}</h1>
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
