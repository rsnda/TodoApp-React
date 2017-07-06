import React, { Component } from 'react';
import { View, Image,Text } from 'react-native';
import Todo from '../modele/Todo'
import TodoList from './TodoList'
import TodoForm  from './TodoForm'

export default class App extends Component {

    constructor(props){
        super(props)
       
        this.state = {
            todoList: []
        }

        this.changetab = this.changetab.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.resetTodos = this.resetTodos.bind(this)
    }

    addTodo(title){
        
        if(title!=""){
            const newTodo = new Todo();
            newTodo.title=title
            newTodo.id=this.state.todoList.length.toString()
            newTodo.isDone=false

            this.setState({
                
                todoList: [...this.state.todoList, newTodo]
            })
        
        }
    }

    resetTodos(){

        this.setState({
            todoList: []
        })
    }
    changetab(Todo){
        let index=this.state.todoList.findIndex(x => x.id == Todo.id)
       
        Todo.isDone=!Todo.isDone
        this.state.todoList[index] = Todo
    }

    getList(){
        if(this.state.todoList.length==0){
            return (
                <Text> Vous n'avez aucun TODO ! </Text>
            );
        }
        else{
            return ( <TodoList todoList={this.state.todoList} changeTab={this.changetab} ></TodoList>
            );
        }
    }
    render() {
        const list = this.getList()
        return (
            <View>
                <Text> Il y a {this.state.todoList.length} élément(s) </Text>
                <TodoForm addTodo={this.addTodo} resetTodos={this.resetTodos}></TodoForm>
                {list}
                
            </View>
        );
    }
}
