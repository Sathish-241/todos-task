import { RxCross2 } from "react-icons/rx";
import { BsPencil } from "react-icons/bs";

import './index.css';

const TodoItem=(props)=>{
    const{todoDetails,getFilteredList,getCount}=props
    const{id,todo,count}=todoDetails

    const onDeleteTodo=()=>{
        getFilteredList(id)
    }

    const onEditTodo=()=>{
        getCount(id,todo)
    }

    return(
        <li className='todo-item'>
            <h1 className='todo-title'>{todo} (Updated  {count} times)</h1>
            <div className='todo-controls-container'>
                <button type='button' className='edit-icon-btn' onClick={onEditTodo}><BsPencil className='edit-icon' /></button>
                <button type='button' className='delete-icon-btn' onClick={onDeleteTodo}><RxCross2 className='delete-icon'/></button>
            </div>
        </li>
        
    )
}
export default TodoItem;