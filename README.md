## Setup (react-native 0.73.3 / react-native-macos 0.73.13)

- npx react-native init rnrepro
- npx react-native-macos-init --overwrite
- USE_HERMES=1 RCT_NEW_ARCH_ENABLED=1 bundle exec pod install

## Issue:

When using Fabric and having a component TextInput with the following definition:

```
export const TestTextInput = () => {
  const ref = useRef<TextInput | null>(null);
  const [value, setValue] = useState('');

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
      <Button
        title="clear"
        onPress={clearTextInput}
      />
    </View>
  );
};
```

Calling the method clearTextInput doesn't clear the UI value.
