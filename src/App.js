
import React,{ useState, useRef } from 'react';
import './App.css';
import TodoLists from './components/TodoLists';
import CreateList from './components/CreateList';

function App() {
  //input으로 받은 값 관리하기
  const [input,setInput]= useState("");
  const onChange = (newlist)=>{
    setInput(newlist)
    console.log(input)};
  //배열만들기 -> useState로 상태관리
  const [todos, setTodos] = useState([
    {id:1, list: "내용입니다.", isDone: false},
    {id:2, list: "내용입니다2.", isDone: false},
  ])

  //input으로 받은 값을 배열에 추가하기(createList의 버튼에 onclick이벤트에 붙이기)
  const addList = ()=>{
    const NewTodo = {id:nextId.current, list:input, isDone:false}
    setTodos([...todos,NewTodo]);
    nextId.current+=1;
    setInput("");
  }

  const nextId = useRef(todos.length+1);

  //리스트 삭제하기
  const removeList = (id)=>{
    setTodos(todos.filter(todo=>id!==todo.id));
  }

  //한일 체크하기
  const doneCheck = (id)=>{
    setTodos(todos.map(todo=>id===todo.id? todo.isDone=!todo.isDone : todo.isDone));
  }
  return (
    <div className="App">
      <CreateList input={input} onChange={onChange} addList={addList}/>
      <TodoLists todos={todos} removeList={removeList} doneCheck={doneCheck}/>
    </div>
  );
}

export default App;
