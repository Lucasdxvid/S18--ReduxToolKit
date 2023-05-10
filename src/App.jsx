import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementBy } from "./store/slices/counter";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const { counter } = useSelector((state) => state.counter); //* 1er argumento (state - nuestro objeto counter) / Sirve para seleccionar o tomar alguna pieza del state, leer algo del STORE
  const dispatch = useDispatch(); //* Da acceso al dispatch que sirve para despachar acciones como INCREMENT // no lleva argumento

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Redux-ToolKit</h1>
      <p> count is {counter}</p>
      <div className="card">
        {/* El del useDispatch extraemos y usamos la funcion increment que creamos */}
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementBy(2))}>Increment by</button>
      </div>
    </>
  );
}

export default App;
