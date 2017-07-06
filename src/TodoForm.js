import React, { Component, PropTypes } from 'react';
import { View, Image, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';

import Todo from '../modele/Todo'
import {addTodo, removeAll} from './actions/todos.actions';

export class TodoForm extends Component {

    constructor(props){
        super(props)
        this.title
        this.addTodo = this.addTodo.bind(this);
        this.removeAll = this.removeAll.bind(this);
    }

    addTodo(){
        if(this.title!=null && this.title!=''){
            this.props.addTodo(this.title)
        }
    }

    removeAll(){
        this.props.removeAll()
    }

    render() {

        return (
            <View>

                <TextInput
                autoFocus
                placeholder='Titre de la chose à faire'
                onSubmitEditing={(event) => this.title =  event.nativeEvent.text}
                />
                <Button
                 onPress={this.addTodo}
                title="Ajouter"
                />

                <Button
                 onPress={this.removeAll}
                title="Supprimer les éléments"
                />
            </View>
        );
    }
}


function mapDispatchToProps(dispatch) {
  return {
    addTodo: title => dispatch(addTodo(title)),
    removeAll: () => dispatch(removeAll())
  }
}

export default connect(undefined, mapDispatchToProps)(TodoForm)