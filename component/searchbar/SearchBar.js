import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import React, {memo, useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {searchByCategory} from '../../screen/reduxToolkit/ReduxThunk';
import style from './style';
const AppBar2 = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const search = newText => {
    setText(newText);
  };
  useEffect(() => {
    dispatch(searchByCategory(text));
  }, [dispatch, text]);
  return (
    <View style={style.searchBar}>
      <Text style={style.title}>Find Yours Dream Shoes</Text>
      <View style={style.container}>
        <View style={style.search}>
          <Image source={require('../../assets/icon/search.png')} />
          <TextInput
            style={style.search_input}
            placeholder={'Search Shoes...'}
            inlineImageLeft={'adjust.png'}
            onSubmitEditing={value => search(value.nativeEvent.text)}
          />
        </View>
        <TouchableOpacity style={style.button}>
          <Image source={require('../../assets/icon/adjust.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(AppBar2);
