import React, {useState} from 'react';
import ToDoListElement from "./ToDoListElement";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


type ListElement={
    name:string;
    desc:string;
}
const ToDoList = () => {
    const [name, setName] = useState(" ")
    const [desc, setDesc] = useState(" ")
    const [list, setList] = useState<ListElement[]>([])

    const AddElementList=() =>{

        setList([...list,{
            name:name,
            desc:desc
        }])
        setName("")
        setDesc("")

    }

    const DeleteElementFromList = (index:number) =>{
        //index = 2
        //[1, 2, 3, 40] =>[1, 2, 40]

        const filtered = list
            .filter((el, i)=>i !== index)

        setList(filtered);
    }

    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            gap:'1em',
            marginTop:'1em'
        }}>
            <div>
                <TextField
                    id="standard-basic"
                    label="Название"
                    variant="standard"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
            </div>


            <div>
                <TextField
                    id="standard-basic"
                    label="Описание"
                    variant="standard"
                    value={desc}
                    onChange={(e)=>setDesc(e.target.value)}
                />
            </div>


            <div>
                <Button
                    variant="outlined"
                    onClick={()=>AddElementList()}
                >
                    Add Element
                </Button>
            </div>



            {list.map((el,i)=>
                <ToDoListElement
                    name={el.name}
                    desc={el.desc}
                    onDeleteClick={()=>DeleteElementFromList(i)}
                    key={i}
                />
            )}

        </div>
    );
};

export default ToDoList;