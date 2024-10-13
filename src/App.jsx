import './App.scss';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Input from './Input';
import { useState } from 'react';
import Toast from './Toast';

function App() {
  const [done, setDone] = useState(false);
  const [toastShown, setToastShown] = useState(false);

  return (
    <>
      <main>
        <Input done={done} setDone={setDone} setToastShown={setToastShown} />
      </main>
      {toastShown && <Toast setToastShown={setToastShown}>Done!</Toast>}
      <Footer />
    </>
  );
}

export default App;
