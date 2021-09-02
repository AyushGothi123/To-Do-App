import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const Task = (props) => {
  return (
<ScrollView>
      <View style = {{flex:0.56}}>
        <TouchableOpacity
          style={{
            width: RFValue(280),
            justifyContent:"center",
            height: RFValue(70),
            backgroundColor: 'yellow',
            borderRadius: RFValue(20),
           marginLeft:10
            
          }}>
          <Text
            style={{
              fontSize: 15,
              textAlign:"center",
            }}>
            {props.text}
          </Text>
        </TouchableOpacity>
       
      </View>
      </ScrollView>

  );
};
export default Task;
