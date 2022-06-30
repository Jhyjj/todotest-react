import React from 'react';

const CreateList = ({input,onChange,addList}) => {
    return (
        <div>
              <h2>To-do List✍</h2>
              <input type="text" name="input" value={input} placeholder="할일을 입력하세요🔥" onChange={(e)=>onChange(e.target.value)}/>
              <button onClick={addList}>+</button>
         </div>
    );
};

export default CreateList;