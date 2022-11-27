import {View} from 'react-native';
import React from 'react';

import {store} from './store';
import {Provider} from 'react-redux';
import ShoesList from './screen/shoeslist/ShoesList';
export default function App() {
  return (
    <Provider store={store}>
      <View>
        <ShoesList />
      </View>
    </Provider>
  );
}
