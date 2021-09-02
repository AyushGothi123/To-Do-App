import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Task from './card';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: null,
      task: '',
      taskItems: [],
      isClicked: false,
    };
  }
  getHours = () => {
    let hour;
    let minutes;
    let am_pm = 'pm';
    hour = new Date().getHours();
    minutes = new Date().getMinutes();
    if (hour < 12) {
      am_pm = 'am';
    }
    this.setState({
      currentTime: hour + ' : ' + minutes + ' ' + am_pm,
    });
  };
  handleTask() {
    if(this.state.task){
          this.setState({
      taskItems: [...this.state.taskItems, this.state.task],
    });
    this.setState({
      task: '',
    });

    }else{
      Alert.alert("Please Enter Task Details")
    }

  }
  deleteTask(index) {
    let itemsCopy = [...this.state.taskItems];
    itemsCopy.splice(index, 1);
    this.setState({
      taskItems: itemsCopy,
    });
    console.log(itemsCopy);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.getHours();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image
            style={styles.image}
            source={require('./imageedit_5_8366021937.png')}></Image>
          <Text style={styles.titleText}>To-Do App</Text>
        </View>
        <View>
          <Text style={styles.time}>{this.state.currentTime}</Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              justifyContent: 'center',
            }}>
            <TextInput
              style={styles.inputBox}
              placeholder="  Enter Task Details"
              multiline={true}
              numberOfLines={3}
              placeholderTextColor="black"
              value={this.state.task}
              onChangeText={(text) =>
                this.setState({
                  task: text,
                })
              }
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => this.handleTask()}>
              <Image source={require('./123.png')} style={styles.appImage} />
            </TouchableOpacity>
          </View>
        </View>

          <View style={{ flex:0.7 }}>
            {this.state.taskItems.map((items, index) => {
              return (
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <Task text={items}></Task>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({
                        isClicked: true,
                      }),
                        this.deleteTask(index);
                    }}>
                    <Image
                      source={require('./delete.png')}
                      style={{
                        height: RFValue(45),
                        width: RFValue(45),
                        marginRight: 30,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
            
          </View>



      </View>


    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: RFValue(140),
    width: RFValue(140),
  },
  container: {
    flex: 1,
  },
  titleContainer: {
    backgroundColor: '#11CEAC',
    width:RFValue(410),
    height:RFValue(200),
    zIndex: -1,
  },
  titleText: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputBox: {
    height: RFValue(40),
    width: RFValue(250),
    borderWidth: 3.5,
    alignSelf: 'center',

    borderRadius: 10,
  },

  appImage: {
    height: RFValue(40),
    width: RFValue(40),
    backgroundColor: 'green',
    marginLeft: RFValue(20),
  },
  time: {
    textAlign: 'center',
    fontSize: 25,

    fontWeight: 'bold',
  },
});
