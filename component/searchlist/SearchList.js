import {View, FlatList, Text, Image} from 'react-native';
import React from 'react';
import style from './style';

const SearchList = props => {
  const renderItem = ({item}) => {
    return (
      <View style={style.item}>
        <View style={style.icon_container}>
          <Image
            style={style.item_heart}
            source={require('../../assets/icon/heart.png')}
          />
        </View>

        <View style={style.item_image}>
          <Image
            style={style.img}
            source={{
              uri: `${item.image}`,
            }}
          />
        </View>
        <Text style={style.item_name}>{item.name}</Text>
        <Text style={style.item_price}>{item.price}</Text>
      </View>
    );
  };
  return props.product ? (
    <FlatList
      data={props.product}
      style={style.searchList}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={item => item.id.toString()}
    />
  ) : (
    <Text>No items</Text>
  );
};

export default SearchList;
