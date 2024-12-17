export const processPdf = (text) => {
  // console.log(text.split(''));
  // for (let i = 0; i < 40; i++) {
  //   // console.log(text[i], text.charCodeAt(i).toString(16));
  // }
  let updatedText = text.replace(/\u00AD\n/g, ''); // soft hyphen

  updatedText = updatedText.replace(/-\n/g, '');
  updatedText = updatedText.replace(/‑\n/g, ''); //non-breaking hyphen

  updatedText = updatedText.replace(/ \n/g, ' ');

  updatedText = updatedText.replace(/ \n/g, ' ');
  updatedText = updatedText.replace(/\p{L}\n\p{L}/gu, ' ');
  // updatedText = updatedText.replace(/"([^"]*)"/g, '«$1»');
  // updatedText = updatedText.replace(/'([^']*)'/g, '«$1»');
  // while (updatedText.match(/«(.*?)«/g))
  //   updatedText = updatedText.replace(/«(.*?)«/g, '«$1"');
  // while (updatedText.match(/»(.*?)»/g))
  //   updatedText = updatedText.replace(/»(.*?)»/g, '"$1»');

  // updatedText = updatedText.replace(/"\s{2,}"/g, ' ');

  return updatedText;
};
