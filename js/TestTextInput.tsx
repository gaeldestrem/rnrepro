import {Button, StyleSheet, TextInput, View} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';

export const TestTextInput = () => {
  const ref = useRef<TextInput | null>(null);
  const [value, setValue] = useState('');

  console.log('value', value);

  const clearTextInput = useCallback(() => {
    setValue('');
    ref.current?.clear();
    ref.current?.setNativeProps({text: ''});
  }, []);

  return (
    <View style={styles.viewContainer}>
      <TextInput
        ref={ref}
        value={value}
        onChangeText={setValue}
        style={styles.input}
      />
      <Button title="clear" onPress={clearTextInput} />
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
