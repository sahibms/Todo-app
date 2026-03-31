import { useState,useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./Todolist";

function Todo() {
    const[text,setText] = useState("");
    const[filter,setFilter] = useState("all");
    const[list,setList] = useState(()=>{
        const data = localStorage.getItem("lists")
         return data ? JSON.parse(data) : [];
        
    });
    useEffect(()=>{
        localStorage.setItem("lists",JSON.stringify(list));
    },[list]);
    const[editId,setEditId] = useState(null);

    const Add = ()=>{
        if(text.trim()==="")return;

        if(editId!==null) {
            const updatedList = list.map((item)=>
            item.id === editId ? {...item,text:text}: item)
            setList(updatedList);
            setEditId(null);
            setText("")
        } else {
            const newList = {
                id:Date.now(),
                text:text,
                completed:false
            }
            setList([...list,newList]);
            setText("")
        }
    };
    const Edit = (id)=>{
        const item = list.find((item)=>item.id === id);
        setText(item.text);
        setEditId(id)
    }
    const filteredList = list.filter((item)=>{
        if(filter === "completed") return item.completed;
        if(filter === "pending") return !item.completed;
        return true;
    })
    const Dlt = (id)=>{
        const updated = list.filter((item)=>item.id!==id);
        setList(updated);
    }
    const Doggle = (id)=>{
         const updatedTask = list.map((item)=>
            item.id === id ? {...item,completed :!item.completed}: item)
         setList(updatedTask);
    }
    const clr = ()=>{
        setList([]);
    }

    return(
        <>
        <div className="top-section">
        <TodoInput
        text={text}
        setText={setText}
        editId={editId}
        Add={Add}
        />
        <div className="filtered-buttons">
            <button className={filter ==="all" ? "active-btn" : ""} onClick={()=>setFilter("all")}>All</button>
            <button className={filter ==="completed" ? "active-btn" : ""} onClick={()=>setFilter("completed")}>Completed</button>
            <button className={filter ==="pending" ? "active-btn" : ""} onClick={()=>setFilter("pending")}>Pending</button>
        </div>
        </div>
        <button className="clr-btn" onClick={clr}>Clear</button>
        <TodoList
        list={filteredList}
        Edit={Edit}
        Dlt={Dlt}
        Doggle={Doggle}
        />
        </>
    )
    
}
export default Todo;