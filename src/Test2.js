import { Text, View } from 'react-native';
import { Checkbox, RadioButton } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import { useState } from 'react';

function Test2() {
  const [ check1Flag, setCheck1Flag ] = useState(false);
  const [ radio1Id, setRadio1Id ] = useState(0);

  // 波紋エフェクト
  const rippleEffectEnabled = true;

  // アイコンとラベルの表示位置
  const position = 'trailing';
//  const position = 'leading';

  return (
    <PaperProvider settings={{ rippleEffectEnabled: rippleEffectEnabled }}>
      <View>
        <Text>Check Box</Text>
        <Checkbox.Item
          label='チェックボックス'
          status={check1Flag ? 'checked' : 'unchecked'}
          onPress={() => { setCheck1Flag(!check1Flag); }}
          labelStyle={{
            fontSize: 15,
            textAlign: 'left',
            paddingLeft: 5,
          }}
          position={position}
        />

        <Text>Radio Button</Text>
        <RadioButton.Group>
          <RadioButton.Item
            value='item1'
            label='ラジオボタン1'
            status={radio1Id == 0 ? 'checked' : 'unchecked'}
            onPress={() => { setRadio1Id(0); }}
            labelStyle={{
              fontSize: 15,
              textAlign: 'left',
              paddingLeft: 5,
            }}
            position={position}
          />
          <RadioButton.Item
            value='item2'
            label='ラジオボタン2'
            status={radio1Id == 1 ? 'checked' : 'unchecked'}
            onPress={() => { setRadio1Id(1); }}
            labelStyle={{
              fontSize: 15,
              textAlign: 'left',
              paddingLeft: 5,
            }}
            position={position}
          />
          <RadioButton.Item
            value='item3'
            label='ラジオボタン3'
            status={radio1Id == 2 ? 'checked' : 'unchecked'}
            onPress={() => { setRadio1Id(2); }}
            labelStyle={{
              fontSize: 15,
              textAlign: 'left',
              paddingLeft: 5,
            }}
            position={position}
          />
        </RadioButton.Group>
      </View>
    </PaperProvider>
  );
}

export default Test2;
