import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Paginador from './components/Paginador'

function App() {
  const [groups, setGroups] = useState([]);

  const [loading, setLoading] = useState(true);

  const [count, setCount] = useState(1);

  useEffect(() => {
    setLoading(true)

    fetch(`https://kenzie-habits.herokuapp.com/groups/?page=${count}`)
      .then((response) => response.json())
      .then((response) => {
        setGroups(response.results);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [count]);

  const pageDown = () => {
    if (count > 1){
      setCount(count-1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Grupos habitos</h1>

        {loading ? (
          <h2>carregando...</h2>
        ) : (
          groups.map((group) => {
            return <Card key={group.id} group={group} />;
          })
        )}

         <Paginador count={count} setCount={setCount} pageDown={pageDown} />

         <button onClick={() => setLoading(!loading)}>Esconder</button>
      </header>
    </div>
  );
}

export default App;
