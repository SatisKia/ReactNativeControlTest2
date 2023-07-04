import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Test1 from './Test1';
import Test2 from './Test2';

function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Test1 />
        {/*<Test2 />*/}
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
