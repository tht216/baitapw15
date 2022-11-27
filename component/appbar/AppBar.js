import {View, Image, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import style from './style';
const AppBar1 = () => {
  return (
    <View style={style.appBar}>
      <TouchableOpacity style={style.arrow}>
        <Image
          style={style.icon}
          source={require('../../assets/icon/back.png')}
        />
      </TouchableOpacity>
      <Image
        style={style.avatar}
        source={require('../../assets/icon/avatar.png')}
      />
    </View>
  );
};

export default memo(AppBar1);
