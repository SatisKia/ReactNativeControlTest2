import { Text, View } from 'react-native';
import { Checkbox, RadioButton } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';

class Test1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      check1Flag: false,
      radio1Id: 0,
    };
    this.setCheck1Flag = this.setCheck1Flag.bind(this);
    this.setRadio1Id = this.setRadio1Id.bind(this);
  }

  setCheck1Flag( flag ){
    this.setState({ check1Flag: flag });
  }
  setRadio1Id( id ){
    this.setState({ radio1Id: id });
  }

  render() {
    // 波紋エフェクト
    const rippleEffectEnabled = true;

    // アイコンとラベルの表示位置
    const position = 'trailing';
//    const position = 'leading';

    return (
      <PaperProvider settings={{ rippleEffectEnabled: rippleEffectEnabled }}>
        <View>
          <Text>Check Box</Text>
          <Checkbox.Item
            label='チェックボックス'
            status={this.state.check1Flag ? 'checked' : 'unchecked'}
            onPress={() => { this.setCheck1Flag(!this.state.check1Flag); }}
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
              status={this.state.radio1Id == 0 ? 'checked' : 'unchecked'}
              onPress={() => { this.setRadio1Id(0); }}
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
              status={this.state.radio1Id == 1 ? 'checked' : 'unchecked'}
              onPress={() => { this.setRadio1Id(1); }}
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
              status={this.state.radio1Id == 2 ? 'checked' : 'unchecked'}
              onPress={() => { this.setRadio1Id(2); }}
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
}

export default Test1;
