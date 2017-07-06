import React, { Component,PropTypes } from 'react';
import { View, Image,Button, TextInput } from 'react-native';
import Todo from '../modele/Todo'


export default class TodoForm extends Component {
 

    constructor(props){
        super(props)
        this.title
        this.add = this.add.bind(this);
        this.reset = this.reset.bind(this);
    }


    add(){
        if(this.title!=null && this.title!=''){
        this.props.addTodo(this.title)
        }
    }
    
    reset(){
        this.props.resetTodos()
    }

    render() {
        
        return (
            <View>
                
                <TextInput
                placeholder='Titre de la chose à faire'
                onSubmitEditing={(event) => this.title =  event.nativeEvent.text}
                />
                <Button 
                 onPress={this.add}
                title="Ajouter" 
                />

                <Button 
                 onPress={this.reset}
                title="Supprimer les éléments" 
                />
            </View>
        );
    }
}
