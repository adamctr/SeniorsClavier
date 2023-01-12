import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="text-3xl h-24 flex justify-center items-center border w-screen m-auto">
        <h1>Senior Clavier</h1>
      </header>
      <div className="w-screen h-64 flex justify-center flex-col items-center">
        <div>Veuillez écrire la phrase suivante :</div>
        <div>Je suis une jolie phrase</div>
      </div>
    </div>
  );
}

export default App;
