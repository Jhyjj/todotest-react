import React from 'react';

const TodoLists = ({todos,removeList,doneCheck}) => {
    return (
        <div>
            {/* {todos.map(todo=><div>{todo.list}</div>)} */}
            {todos.map(todo=><TodoList todo={todo} removeList={removeList} doneCheck={doneCheck}/>)}
        </div>
    );
};

const TodoList = ({todo,removeList,doneCheck})=>{
    return(
        <div>
           <span onClick={()=>doneCheck(todo.id)} className={todo.isdone? "isDone" : ""}>{todo.list}</span>
            <button onClick={()=>removeList(todo.id)}>x</button>
        </div>
    )
}
export default TodoLists;