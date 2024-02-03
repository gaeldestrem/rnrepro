import {Button, StyleSheet, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';

export const TestTextInput = () => {
  const ref = useRef<TextInput>();
  const [value, setValue] = useState('');

  console.log('value', value);

  return (
    <View style={styles.viewContainer}>
      <TextInput
        autoFocus
        ref={ref}
        value={value}
        textAlignVertical={'center'}
        onChangeText={setValue}
        // @ts-ignore
        enableFocusRing={false}
        style={styles.input}
        placeholderTextColor={'test'}
        placeholder={'test'}
      />
      <Button
        title="clear"
        onPress={() => {
          setValue('');
          ref.current?.clear();
          ref.current?.setNativeProps({text: ''});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  input: {
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.1,
    fontWeight: '500',
    flex: 1,
    color: 'white',
  },
});
