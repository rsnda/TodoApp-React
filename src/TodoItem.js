import React, { Component, PropTypes } from 'react';
import { Text, View, Button, StyleSheet,Switch } from 'react-native';

const styles = StyleSheet.create({
  margin: {
    marginTop: 10
  }
});



export default class Todo extends Component {

  constructor(props){
    super(props)

    this.state = {
      value: this.props.todo.isDone
    }

    this.change = this.change.bind(this);
  }
  
  change(val){
    this.setState({value:val})
    this.props.changeValue(this.props.todo)
  }

  render() {
    const style = this.state.value ? {textDecorationLine:'line-through'} : null
    return (
    
    <View>

    <Text style={[style]}>{this.props.todo.title.toUpperCase()}</Text>
      <Switch 
        style={{marginRight:50}}
        onValueChange={(val) => this.change(val)}
      
        value={this.state.value}
        
      />
      </View>
    );
  }
}

Todo.propType = {
  todo: PropTypes.Todo
}