import { useState } from "react"; //estou importantando o State

function App() {
  const [nome, setNome] = useState("Ola");
  //state

  const message = `Ola ${nome}, como vai?`;

  //aqui ele retorna o Html + js = JSX
  return (
    <div>
      <h1>{nome}</h1>

      <button
        onClick={() => {
          setNome("Ola Mundo!!!");
        }}
      >
        Mudar Mensagem
      </button>

      <h1>Hello Word</h1>
      <h1>Hello Word</h1>
      <h1>Hello Word</h1>
    </div>
  );
}

export default App;
