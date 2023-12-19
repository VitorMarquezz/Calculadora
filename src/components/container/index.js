import { useState } from "react";
import styles from "./Container.module.css";

export default function Container() {
  const [num, setNum] = useState("");
  const [oldNum, setOldNum] = useState(0);
  const [valor, setValor] = useState(0);
  const [resumoConta, setResumoConta] = useState([0]);
  const [operador, setOperador] = useState("");
  const [zerarNum, setZerarNum] = useState(0);
  const [teste, setTeste] = useState(0);
  const [limiteResultado, setLimiteResultado] = useState([0]);
  const limiteTamanhoResultado = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16
  ];
  const [guardarValor, setGuardarValor] = useState(0);
  const [executarOperacaoInicio, setExecutarOperacaoInicio] = useState(0);
  const [limparResumo, setLimparResumo] = useState(0);
  const [resultadoAmostra, setResultadoAmostra] = useState(0);
  const [breakCalcular, setBreakCalcular] = useState(0);

  function pegarNum(e) {
    if (
      zerarNum !== 0 &&
      limiteResultado.length <= limiteTamanhoResultado.length
    ) {
      setLimiteResultado([...limiteResultado, e.target.value]);
      setNum(num + e.target.value);
      setValor(resultadoAmostra + e.target.value);
      if (resultadoAmostra === 0) {
        setResultadoAmostra(e.target.value);
      }
      if (resultadoAmostra !== 0) {
        setResultadoAmostra(resultadoAmostra + e.target.value);
      }
      if (operador === "-") {
        setResultadoAmostra(-(num + e.target.value));
      }
    }
    if (zerarNum === 0) {
      setNum(e.target.value);
      setValor(e.target.value);
      setResultadoAmostra(e.target.value);
      setZerarNum(1);
      if (operador === "-") {
        setResultadoAmostra(-e.target.value);
        const trocarSinalResumo = -e.target.value;
        setResumoConta([trocarSinalResumo]);
      }
    }

    if (resumoConta[0] === 0) {
      if (operador === "-") {
        const trocarSinalResumo = -e.target.value;
        setResumoConta([trocarSinalResumo]);
      } else {
        setResumoConta([e.target.value]);
      }
    }
    if (resumoConta[0] !== 0 && limparResumo !== 0) {
      setResumoConta([e.target.value]);
      setZerarNum(1);
      setLimparResumo(0);
    }
    if (
      resumoConta[0] !== 0 &&
      limparResumo === 0 &&
      limiteResultado.length <= limiteTamanhoResultado.length
    ) {
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

    if (teste === 0 && executarOperacaoInicio === 0) {
      if (operador === "+") {
        setGuardarValor(parseFloat(guardarValor) + parseFloat(valor));
        setResultadoAmostra(parseFloat(guardarValor) + parseFloat(valor));
      }
      if (operador === "-") {
        setGuardarValor(parseFloat(guardarValor) - parseFloat(valor));
        setResultadoAmostra(parseFloat(guardarValor) - parseFloat(valor));
      }
      if (operador === "/") {
        setGuardarValor(parseFloat(guardarValor) / parseFloat(valor));
        setResultadoAmostra(parseFloat(guardarValor) / parseFloat(valor));
      }
      if (operador === "*") {
        setGuardarValor(parseFloat(guardarValor) * parseFloat(valor));
        setResultadoAmostra(parseFloat(guardarValor) * parseFloat(valor));
      }
      if (resultadoAmostra === 0) {
        setResultadoAmostra("ERRO");
        setResumoConta(["ERRO"]);
      } else if (resultadoAmostra !== 0) {
        setResumoConta([...resumoConta, e.target.value]);
      }
    }

    if (teste === 0 && executarOperacaoInicio !== 0 && breakCalcular === 0) {
      if (operador === "+") {
        setGuardarValor(parseFloat(guardarValor) + parseFloat(valor));
        setResultadoAmostra(parseFloat(guardarValor) + parseFloat(valor));
        setResumoConta([
          parseFloat(guardarValor) + parseFloat(valor),
          e.target.value,
        ]);
      }
      if (operador === "-") {
        setGuardarValor(parseFloat(guardarValor) + parseFloat(valor));
        setResultadoAmostra(parseFloat(guardarValor) + parseFloat(valor));
        setResumoConta([
          parseFloat(guardarValor) + parseFloat(valor),
          e.target.value,
        ]);
      }
      if (operador === "/") {
        setGuardarValor(parseFloat(guardarValor) / parseFloat(valor));
        setResultadoAmostra(parseFloat(guardarValor) / parseFloat(valor));
        setResumoConta([
          parseFloat(guardarValor) / parseFloat(valor),
          e.target.value,
        ]);
      }
      if (operador === "*") {
        setGuardarValor(parseFloat(guardarValor) * parseFloat(valor));
        setResultadoAmostra(parseFloat(guardarValor) * parseFloat(valor));
        setResumoConta([
          parseFloat(guardarValor) * parseFloat(valor),
          e.target.value,
        ]);
      }
    }

    if (teste === 0 && executarOperacaoInicio === 1 && breakCalcular === 1) {
      setResumoConta([...resumoConta, e.target.value]);
    }

    if (teste !== 0 && executarOperacaoInicio === 0) {
      if (operador === "+") {
        setGuardarValor(parseFloat(oldNum) + parseFloat(valor));
        setResultadoAmostra(parseFloat(oldNum) + parseFloat(valor));
        setResumoConta([
          parseFloat(oldNum) + parseFloat(valor),
          e.target.value,
        ]);
      }
      if (operador === "-" && oldNum !== 0) {
        setGuardarValor(parseFloat(oldNum) + parseFloat(valor));
        setResultadoAmostra(parseFloat(oldNum) + parseFloat(valor));
        setResumoConta([
          parseFloat(oldNum) + parseFloat(valor),
          e.target.value,
        ]);
      }
      if (operador === "/") {
        setGuardarValor(parseFloat(oldNum) / parseFloat(valor));
        setResultadoAmostra(parseFloat(oldNum) / parseFloat(valor));
        setResumoConta([
          parseFloat(oldNum) / parseFloat(valor),
          e.target.value,
        ]);
      }
      if (operador === "*") {
        setGuardarValor(parseFloat(oldNum) * parseFloat(valor));
        setResultadoAmostra(parseFloat(oldNum) * parseFloat(valor));
        setResumoConta([
          parseFloat(oldNum) * parseFloat(valor),
          e.target.value,
        ]);
      }
      setTeste(0);
      setExecutarOperacaoInicio(1);
    }

    if (teste !== 0 && executarOperacaoInicio === 1) {
      if (operador === "+") {
        setGuardarValor(parseFloat(guardarValor) + parseFloat(valor));
        setResumoConta([
          parseFloat(guardarValor) + parseFloat(valor),
          e.target.value,
        ]);
        setResultadoAmostra(parseFloat(guardarValor) + parseFloat(valor));
      }
      if (operador === "-") {
        setGuardarValor(parseFloat(guardarValor) + parseFloat(valor));
        setResumoConta([parseFloat(guardarValor) + parseFloat(valor), "-"]);
        setResultadoAmostra(parseFloat(guardarValor) - parseFloat(valor));
      }
      if (operador === "/") {
        setGuardarValor(parseFloat(guardarValor) / parseFloat(valor));
        setResumoConta([parseFloat(guardarValor) / parseFloat(valor), "/"]);
        setResultadoAmostra(parseFloat(guardarValor) / parseFloat(valor));
      }
      if (operador === "*") {
        setGuardarValor(parseFloat(guardarValor) * parseFloat(valor));
        setResumoConta([parseFloat(guardarValor) * parseFloat(valor), "/"]);
        setResultadoAmostra(parseFloat(guardarValor) * parseFloat(valor));
      }

      setTeste(0);
      setExecutarOperacaoInicio(1);
      setBreakCalcular(0);
    }
  }

  function calcular() {
    setBreakCalcular(1);
    if (teste === 0) {
      if (operador === "+") {
        setGuardarValor(parseFloat(guardarValor) + parseFloat(valor));
        setResultadoAmostra(parseFloat(guardarValor) + parseFloat(valor));
      }
      if (operador === "-") {
        setGuardarValor(parseFloat(guardarValor) - parseFloat(valor));
        setResultadoAmostra(parseFloat(guardarValor) - parseFloat(valor));
      }
      if (operador === "/") {
        setGuardarValor(parseFloat(guardarValor) / parseFloat(valor));
        setResultadoAmostra(parseFloat(guardarValor) / parseFloat(valor));
      }
      if (operador === "*") {
        setGuardarValor(parseFloat(guardarValor) * parseFloat(valor));
        setResultadoAmostra(parseFloat(guardarValor) * parseFloat(valor));
      }
    }

    if (teste !== 0 && executarOperacaoInicio === 0) {
      if (operador === "+") {
        setGuardarValor(parseFloat(oldNum) + parseFloat(valor));
        setResultadoAmostra(parseFloat(oldNum) + parseFloat(valor));
        setResumoConta([parseFloat(oldNum) + parseFloat(valor)]);
      }
      if (operador === "-") {
        setGuardarValor(parseFloat(oldNum) + parseFloat(valor));
        setResultadoAmostra(parseFloat(oldNum) + parseFloat(valor));
        setResumoConta([parseFloat(oldNum) + parseFloat(valor)]);
      }
      if (operador === "/") {
        setGuardarValor(parseFloat(oldNum) / parseFloat(valor));
        setResultadoAmostra(parseFloat(oldNum) / parseFloat(valor));
        setResumoConta([parseFloat(oldNum) / parseFloat(valor)]);
      }
      if (operador === "*") {
        setGuardarValor(parseFloat(oldNum) * parseFloat(valor));
        setResultadoAmostra(parseFloat(oldNum) * parseFloat(valor));
        setResumoConta([parseFloat(oldNum) * parseFloat(valor)]);
      }

      setTeste(0);
      setExecutarOperacaoInicio(1);
    }

    if (teste !== 0 && executarOperacaoInicio === 1) {
      if (operador === "+") {
        setGuardarValor(parseFloat(guardarValor) + parseFloat(valor));
        setResumoConta([parseFloat(guardarValor) + parseFloat(valor)]);
        setResultadoAmostra(parseFloat(guardarValor) + parseFloat(valor));
      }
      if (operador === "-") {
        setGuardarValor(parseFloat(guardarValor) - parseFloat(valor));
        setResumoConta([parseFloat(guardarValor) - parseFloat(valor)]);
        setResultadoAmostra(parseFloat(guardarValor) - parseFloat(valor));
      }
      if (operador === "/") {
        setGuardarValor(parseFloat(guardarValor) / parseFloat(valor));
        setResumoConta([parseFloat(guardarValor) / parseFloat(valor)]);
        setResultadoAmostra(parseFloat(guardarValor) / parseFloat(valor));
      }
      if (operador === "*") {
        setGuardarValor(parseFloat(guardarValor) * parseFloat(valor));
        setResumoConta([parseFloat(guardarValor) * parseFloat(valor)]);
        setResultadoAmostra(parseFloat(guardarValor) * parseFloat(valor));
      }

      setTeste(0);
      setExecutarOperacaoInicio(1);
    }
    setOperador("");
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
    setResultadoAmostra(0);
    setLimiteResultado([0]);
  }

  function inverterSinal() {
    if (operador !== "") {
      setValor(-valor);
      setNum(-num);
      setResultadoAmostra(-resultadoAmostra);
    }
    if (operador === "") {
      alert("ERRO");
    }

    if (resumoConta.length >= 2 && operador) {
      resumoConta.forEach((element, index) => {
        switch (element) {
          case "-":
            resumoConta.splice(index, 1, "+");
            break;
          case "+":
            resumoConta.splice(index, 1, "-");
            break;
          default:
            break;
        }
      });
    }
  }

  function porcentagem() {
    if (teste === 0) {
      setValor(resultadoAmostra / 100);
      setResultadoAmostra(resultadoAmostra / 100);
      setResumoConta([resultadoAmostra / 100]);
      setZerarNum(0);
    }
    if (teste !== 0) {
      if (operador === "+") {
        setResultadoAmostra(
          parseFloat(oldNum) + (parseFloat(oldNum) * parseFloat(valor)) / 100
        );
      }
      if (operador === "-") {
        setResultadoAmostra(
          parseFloat(oldNum) - (parseFloat(oldNum) * parseFloat(valor)) / 100
        );
      }
      if (operador === "/") {
        setResultadoAmostra(oldNum / ((valor / 100) * oldNum));
      }
      if (operador === "*") {
        setResultadoAmostra(
          (parseFloat(oldNum) * (parseFloat(oldNum) * parseFloat(valor))) / 100
        );
      }
      setResumoConta([...resumoConta, "%"]);
    }
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.resultados}>
          <div>
            <h2>{resumoConta}</h2>
          </div>
          <div>
            <h1>{resultadoAmostra}</h1>
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
            onClick={inverterSinal}
            className={`${styles.botao} ${styles.botaoTop}`}
          >
            +/-
          </button>
          <button
            value={"%"}
            onClick={porcentagem}
            className={`${styles.botao} ${styles.botaoTop}`}
          >
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
          <button value={"."} onClick={pegarNum} className={styles.botao}>
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
