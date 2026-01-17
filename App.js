import React from 'react';
import { View, Text } from 'react-native';

// Component Square
const Square = () => {
  return (
    <View
      style={{
        width: 300,
        height: 300,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Hello world</Text>
    </View>
  );
};

// App chính
export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Square />
    </View>
  );
}