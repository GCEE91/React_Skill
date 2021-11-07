import React, { useState } from 'react';

const EventPractice = () => {
    const data = {
        username: '',
        message: '',
    }
  const [form, setForm] = useState(data);
  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(`${username} : ${message}`);
    console.log(form)
    setForm(data);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <React.Fragment>
      <h1>이벤트연습</h1>
      <input
        type="text"
        name="username"
        value={username}
        onChange={onChange}
        placeholder="사용자명"
      />

      <input
        type="text"
        name="message"
        value={message}
        onChange={onChange}
        placeholder="메세지"
        onKeyPress={onKeyPress}
      />

      <button onClick={onClick}>버튼</button>
    </React.Fragment>
  );
};

export default EventPractice;
