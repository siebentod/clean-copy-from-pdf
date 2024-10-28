import { useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

function Input({ done, setDone, setToastShown }) {
  const [input, setInput] = useState('');
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    // console.log(e.target.value.length, ', ', input.length);
    if (Math.abs(e.target.value.length - input.length) > 1)
      setInput(processPdf(e.target.value));
    else e.target.value = input;
  };

  const handleContainerClick = () => {
    textareaRef.current.focus(); // Устанавливает фокус на textarea
  };

  const processPdf = (text) => {
    console.log(text.split(''));
    for (let i = 0; i < 40; i++) {
      console.log(text[i], text.charCodeAt(i).toString(16));
    }
    let updatedText = text.replace(/\u00AD\n/g, '$1');

    updatedText = updatedText.replace(/-\n/g, '$1');

    updatedText = updatedText.replace(/ \n/g, ' $1');

    updatedText = updatedText.replace(/ \n/g, ' $1');
    // updatedText = updatedText.replace(/"([^"]*)"/g, '«$1»');
    // updatedText = updatedText.replace(/'([^']*)'/g, '«$1»');
    // while (updatedText.match(/«(.*?)«/g))
    //   updatedText = updatedText.replace(/«(.*?)«/g, '«$1"');
    // while (updatedText.match(/»(.*?)»/g))
    //   updatedText = updatedText.replace(/»(.*?)»/g, '"$1»');

    // updatedText = updatedText.replace(/"\s{2,}"/g, ' ');
    if (text !== updatedText) {
      setDone(true);
      setToastShown(true);
    } else {
      setDone(false);
      setToastShown(false);
    }
    return updatedText;
  };

  const processInput = (text) => {
    let updatedText = text.replace(/“([^”]*)”/g, '«$1»');
    updatedText = updatedText.replace(/"([^"]*)"/g, '«$1»');
    updatedText = updatedText.replace(/'([^']*)'/g, '«$1»');
    while (updatedText.match(/«(.*?)«/g))
      updatedText = updatedText.replace(/«(.*?)«/g, '«$1"');
    while (updatedText.match(/»(.*?)»/g))
      updatedText = updatedText.replace(/»(.*?)»/g, '"$1»');

    // updatedText = updatedText.replace(/"\s{2,}"/g, ' ');
    if (text !== updatedText) {
      setDone(true);
      setToastShown(true);
    } else {
      setDone(false);
      setToastShown(false);
    }
    return updatedText;
  };

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
    </>
  );
}

export default Input;
