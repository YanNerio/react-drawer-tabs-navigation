import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const DrawerButton = ({ navigation }) => (

  <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
    <Icon
      name="menu"
      size={30}
    />
  </TouchableOpacity>
);

export default DrawerButton;