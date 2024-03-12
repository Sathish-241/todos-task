import {Component} from 'react';
import {v4 as uuidv4} from 'uuid';
import './index.css';
import TodoItem from '../TodoItem';

class Todos extends Component{

    state={
        todo:'',
        todosList:[],       
        

    }

    onChangeTodo=(e)=>{
       this.setState({
        todo:e.target.value
       })
    }
    
    onAddTodo=(e)=>{
        e.preventDefault()
        const{todo,}=this.state
        let l=todo.length
        let n=parseInt(todo[l-1])
        if(typeof(n)==="number"){
                for(let i=0; i<n; i++){
                    let todoObj={
                        id:uuidv4(),
                        todo:todo.slice(0,l-1),
                        count:0
                    }
                    this.setState((prevState)=>({
                        todosList:[...prevState.todosList,todoObj],
                    }))
                }
                this.setState({
                    todo:'',
                })
        

        }else{
            let newObject={                
                todo,
            }
            this.setState((prevState)=>({
                todosList:[...prevState.todosList,newObject]
            }))
        }
        this.setState({
            todo:'',
        })
       
        
    }

    renderInputForm=()=>{
        const{todo}=this.state
        return(
            <div className='input-field-container'>
                <form className='form' onSubmit={this.onAddTodo}>
                    <input type='text'value={todo} className='input-field' onChange={this.onChangeTodo} placeholder='Enter Your Task...'/>
                    <button type='submit' className='submit-btn'>Add Todo</button>
                </form>
            </div>
        )
    }

    getFilteredList=(id)=>{
        const{todosList}=this.state
        const filteredList=todosList.filter((eachTodo)=>(eachTodo.id !==id))
        this.setState({
            todosList:filteredList
        })

    }

    getEditedList=(id)=>{
        this.setState((prevState)=>({
            
            todosList:prevState.todosList.map((eachTodo)=>{
                if(eachTodo.id===id){
                    return{...eachTodo,count:eachTodo.count+1}
                }
                return eachTodo;

            }),
           
        }))
    }


    editTodo=(id)=>{
        const{todosList}=this.state
        const filteredObject=todosList.find((eachTodo)=>(eachTodo.id===id))
       this.setState((prevState)=>({
        todo:filteredObject.todo,
        
        
       }))       
    this.getEditedList(id)

    }


    render(){
        const{todosList}=this.state
        return(
            <div className='app-container'>
               <div className='responsive-container'>
                <h1 className='title'>Day Goals!</h1>
                {this.renderInputForm()}
                <ul className='todos-list-display-container'>
                    {todosList.map((eachTodo)=>(
                        <TodoItem todoDetails={eachTodo} getFilteredList={this.getFilteredList} getCount={this.editTodo} key={eachTodo.id} />
                    ))}
                </ul>

               </div>
            </div>
        )
    }
}
export default Todos;

        