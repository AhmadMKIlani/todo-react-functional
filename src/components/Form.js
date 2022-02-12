import React,{useState, useEffect, useRef} from 'react';

function Form(props) {
  const [input, setInput] = useState('');

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })
  const handelChange = e => {
    setInput(e.target.value)
  }

  const handelSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text:input
    });
    setInput('');
  };
  return <div>

    <form className='todo-form' onSubmit={handelSubmit}>
      <input type="text" placeholder='Add a todo' value={input}
      name='text' className='todo-input' onChange={handelChange}
      ref={inputRef} />
      <button className='todo-button'>Add todo</button>
    </form>
  </div>;
}

export default Form;

