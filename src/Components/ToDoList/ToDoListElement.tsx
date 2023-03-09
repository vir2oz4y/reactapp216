import React from 'react';

type Props ={
    name:string;
    desc:string;
    onDeleteClick:()=>void;
}



const ToDoListElement = ({name, desc, onDeleteClick}:Props) => {

    //const name = props.name;

    return (
        <div style={{display:'flex', gap:'1em'}}>
            <div>
                {name}
            </div>

            <div>
                {desc}
            </div>

            <div>
                <button
                    onClick={()=>onDeleteClick()}
                >
                    Удалить
                </button>
            </div>
        </div>
    );
};

export default ToDoListElement;


