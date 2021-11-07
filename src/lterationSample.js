import React, { useState } from 'react';

const InterationSample = () => {
  const data = [
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ];

  const [names, setNames] = useState(data);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onchange = (e) => {
    setInputText(e.target.value);
  };
  const onclick = () => {
    const newName = names.concat({ id: nextId, text: inputText });
    // const newData = [...names, { id: nextId, text: inputText }];
    setNames(newName);
    setNextId(nextId + 1);
    setInputText('');
  };

  const Remove = (id) => {
    const nextName = names.filter((name) => name.id !== id);
    setNames(nextName);
  };

  const namelist = names.map((name) => {
    return (
      <li
        key={name.id}
        onClick={() => {
          Remove(name.id);
        }}
      >
        {name.text}
      </li>
    );
  });

  return (
    <>
      <input value={inputText} onChange={onchange}></input>
      <button onClick={onclick}>입력버튼</button>
      <ul>{namelist}</ul>
    </>
  );
};

export default InterationSample;
