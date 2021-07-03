import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux';
import { addFood } from './actions/food';
class FoodForm extends Component {
  static navigationOptions = {
    title: 'Home',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'blue',
    },
  };
  state = {
    food: null
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back to{'\n'} SnackBar Express</Text>
        <TextInput
          value={this.state.food}
          placeholder='Search your favorite food'
          style={styles.foodInput}
          onChangeText={(food) => this.setState({ food })}
        />
        <TouchableOpacity
          style={{ marginBottom: 16 }}
          onPress={() => {
            this.props.add(this.state.food)
            this.setState({ food: null })
          }}>
          <Text style={{ fontSize: 18, color: 'white',
                        textAlign: 'left',
                         marginBottom: 4,
                         borderWidth: 2,
                         borderColor: 'gold',
                         padding: 2,
                         width: '80%',
                         borderRadius: 10,
                         backgroundColor: 'orange'
                       }}>Submit</Text>
          
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginBottom: 16 }}
          onPress={() =>
            this.props.navigation.navigate('FoodList')}>
          <Text style={{ fontSize: 18, color: 'white',
                        textAlign: 'left',
                         marginBottom: 32,
                         borderWidth: 2,
                         borderColor: 'gold',
                         padding: 2,
                         width: '80%',
                         borderRadius: 10,
                         backgroundColor: 'orange' }}>Go to FoodList</Text>
        </TouchableOpacity>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'sandybrown' 
  },
  title: {
    fontSize: 40,
    marginBottom: 250,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color:'darkred',
    borderWidth: 3,
    borderColor:'orangered',
    borderRadius: 10,
    backgroundColor: 'red'
  },
  foodInput: {
    fontSize: 25,
    marginBottom: 32,
    borderWidth: 3,
    borderColor: 'gold',
    padding: 2,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'orange'
  }
});
const mapStateToProps = (state) => {
  console.log(state);
  return {
    foods: state.foodReducer.foodList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    add: (food) => dispatch(addFood(food))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FoodForm);