import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';


// App.js
import React from 'react';
import { View } from 'react-native';
import KawaiiApiView from './view/KawaiiApiView';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <View>
          <KawaiiApiView />
        </View>
      </Card>
    </SafeAreaView>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
