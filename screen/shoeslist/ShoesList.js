import {View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AppBar from '../../component/appbar/AppBar';
import SearchBar from '../../component/searchbar/SearchBar';
import SearchList from '../../component/searchlist/SearchList';
import {getProduct} from '../reduxToolkit/ReduxThunk';
import styles from './style';

export default function ShoesList() {
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  const dispatch = useDispatch();
  const searchList = useSelector(state => state.reduxReducer.searchList);
  const product = useSelector(state => state.reduxReducer.product);
  return (
    <View style={styles.container}>
      <AppBar />
      <SearchBar />
      <SearchList product={searchList.length !== 0 ? searchList : product} />
    </View>
  );
}
