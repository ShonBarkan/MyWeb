import React from 'react';
import ToDoCard from './ToDoCard/ToDoCard';
import toDos from '../../mocks/ToDos.json'

const ToDos = () => {
    return (
        <div
         style={{
            display:'flex'
         }}
        >
            {toDos.toDos.map(toDo=><ToDoCard toDo={toDo}/>)} 
        </div>
    );
}

export default ToDos;
