import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Index from './src/components/index';
import reducers from 'reducers/todo';

export default function App() {
  const store = createStore(reducers);
  return (
    <Provider store={store}>
      <View>
        <Index />
      </View>
    </Provider>
  );
}
