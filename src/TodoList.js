import React, { Component,PropTypes } from 'react';
import { View, Image,Text,ScrollView } from 'react-native';
import Todo from '../modele/Todo'
import TodoComponent from './TodoItem'
export default class TodoList extends Component {
    
    constructor(props){
        super(props)
         this.changeValue = this.changeValue.bind(this);
    }
    changeValue(Todo){
        this.props.changeTab(Todo)
    }
    
    render() {
        
        const todo = this.props.todoList.map((todo, index) =>{
            return <TodoComponent key={index} todo={todo}  changeValue={this.changeValue} />
        })
        return (
            <ScrollView>
                {todo}
            </ScrollView>
        );
    }
}
TodoList.propType = {
  todoList: PropTypes.arrayOf(PropTypes.Todo).required,
}