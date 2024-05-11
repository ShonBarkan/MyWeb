import React from 'react';
import { Card } from 'antd';

const ToDoCard = ({toDo}) => {
    return (
    <Card
        title= {toDo.title}
        // bordered={false}
        style={{
        width: 300,
        backgroundColor:'#EADBC8'
        }}
    >
        <div
         style={{
                height: 120,
                overflowY: 'scroll'
                }}>
            {toDo.whatToDo.map(whatToDo=><p>{whatToDo.theToDo}</p>)}
        </div>
    </Card>
    );
}

export default ToDoCard;
