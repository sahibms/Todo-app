function TodoList({list,Edit,Dlt,Doggle}) {
    return(
        <>
         <ul>
            {list.map((item)=>(
                <li key={item.id}>
                <div className="task-left">
                    <input
                type="checkbox"
                checked={item.completed}
                onChange={()=>Doggle(item.id)}></input>    
                <span className={item.completed ? "completed" : ""}>{item.text}</span>
                </div>  
                
                <div className="task-right">
                <button className="edit-btn" onClick={()=>Edit(item.id)}>Edit</button>
                <button className="dlt-btn" onClick={()=>Dlt(item.id)}>Delete</button>
                </div>
                 </li>
                
            ))}
        </ul>
        

        </>
    )

}
export default TodoList;