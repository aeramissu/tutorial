import React, {Component} from 'react';

export class List extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            todo: "",
            todoList: [],
        }
    }

    todo(e){
        e.preventDefault(e);
        this.setState({todo: e.target.value})
    }

    handlerAdd(e){
        e.preventDefault();
        this.state.todoList.push(this.state.todo);
        this.setState({ todoList: this.state.todoList });
    }

    render() {
        return(
            <div>
                <form>
                    <input type = "text" placeholder="ToDo" onChange={(e)=>this.todo(e)}></input>
                    <button onClick = {(e)=>this.handlerAdd(e)}>Add</button>
                    <div>
                        Display: 
                        {
                            this.state.todoList.map((value, index) => (
                                <div key={index}>
                                    {value}
                                </div>
                            ))
                        }
                    </div>
                </form>
            </div>
        )
    }
}

export default List;