function TodoInput({text,setText,Add,editId}) {
    return(
    
        <div className="input-box">
         <input
        type="text"
        value={text}
        placeholder="Enter Task"
        onChange={(e)=>setText(e.target.value)}
        onKeyDown={(e)=>{if(e.key ==="Enter"){Add();}}}>
        </input>
            
        
        <button onClick={Add}>{editId!==null ? "Update": "Add"}</button>
        </div>
        
    )
}
export default TodoInput;