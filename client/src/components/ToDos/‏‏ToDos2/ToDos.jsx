import React from 'react';
import { Tabs } from 'antd';
import AllToDos from '../../../mocks/ToDos.json'
import ToDo from '../‏‏ToDos2/ToDo';

  const items = AllToDos.toDos.map((todo,index) => { 
      return{
          key: index+1 , 
          label: todo.title,
          children : <ToDo whatToDo={todo.whatToDo} />
        }})
      
const ToDos = () => {
    return (
        <div>
            <Tabs defaultActiveKey="1" items={items}/>
        </div>
    )
}

export default ToDos;
