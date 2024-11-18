import { useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

import { processPdf } from './lib';

function Input({ done, setDone }) {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    // console.log(e.target.value.length, ', ', input.length);
    if (Math.abs(e.target.value.length - input.length) > 1) {
      const processed = processPdf(e.target.value);
      setInput(processed);
      if (e.target.value !== processed) {
        setDone(true);
        handleCopy(processed);
        toast('New text is copied to the clipboard!');
      } else {
        setDone(false);
        toast('Nothing found to edit!', { duration: 3000 });
      }
    } else e.target.value = input;

    // numbers = input.split('\n').map((_, index) => index + 1);
    // console.log(numbers);
  };

  const handleContainerClick = () => {
    textareaRef.current.focus(); // Устанавливает фокус на textarea
  };

  const handleCopy = (input) => {
    navigator.clipboard
      .writeText(input)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1100);
      })
      .catch((err) => console.error('Ошибка копирования:', err));
  };

  // const processInput = (text) => {
  //   let updatedText = text.replace(/“([^”]*)”/g, '«$1»');
  //   updatedText = updatedText.replace(/"([^"]*)"/g, '«$1»');
  //   updatedText = updatedText.replace(/'([^']*)'/g, '«$1»');
  //   while (updatedText.match(/«(.*?)«/g))
  //     updatedText = updatedText.replace(/«(.*?)«/g, '«$1"');
  //   while (updatedText.match(/»(.*?)»/g))
  //     updatedText = updatedText.replace(/»(.*?)»/g, '"$1»');

  //   // updatedText = updatedText.replace(/"\s{2,}"/g, ' ');
  //   if (text !== updatedText) {
  //     setDone(true);
  //     setToastShown(true);
  //   } else {
  //     setDone(false);
  //     setToastShown(false);
  //   }
  //   return updatedText;
  // };

  return (
    <>
      <div
        className="textarea-wrapper"
        style={{
          backgroundColor: done ? '#26302b' : '#242424',
        }}
        onClick={handleContainerClick}
      >
        <TextareaAutosize
          ref={textareaRef}
          value={input}
          placeholder="Paste text here"
          onChange={(e) => handleInput(e)}
          autoFocus
          maxRows={30}
          style={{
            backgroundColor: done ? '#26302b' : '#242424',
          }}
        />
      </div>
      {done && (
        <div className="copy-button">
          <button
            onClick={handleCopy}
            className="bg-zinc-700 text-white px-2 py-1.5 rounded-lg border border-zinc-800 cursor-pointer flex shadow-sm z-50"
          >
            {copied ? (
              <span className="icon-[tabler--copy-check]"></span>
            ) : (
              <span className="icon-[tabler--copy]"></span>
            )}
          </button>
        </div>
      )}
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          duration: Infinity,
          style: {
            fontSize: '14px',
            maxWidth: '500px',
            padding: '4px 8px',
            backgroundColor: '#3f3f46',
            color: 'white',
            // color: 'grey',
          },
        }}
      />
    </>
  );
}

export default Input;
