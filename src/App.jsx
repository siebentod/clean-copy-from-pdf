import './App.scss';
import Input from './Input';
import { useState } from 'react';

function App() {
  const [done, setDone] = useState(false);

  return (
    <>
      <main>
        <Input done={done} setDone={setDone} />
      </main>
    </>
  );
}

export default App;
