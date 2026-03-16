import { View, Text, TouchableOpacity } from 'react-native';

interface CheckBoxLoginInterface {
  keepConnected: boolean,
  setKeepConnected: React.Dispatch<React.SetStateAction<boolean>>
}

export function CheckboxLogin({ keepConnected, setKeepConnected }: CheckBoxLoginInterface) {
  return (
      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
        onPress={() => setKeepConnected(!keepConnected)}
      >
        <View style={{
          width: 20,
          height: 20,
          borderWidth: 2,
          borderColor: '#999',
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: keepConnected ? '#ED145B' : 'transparent',
        }}>
          {keepConnected && <Text style={{ color: '#fff', fontSize: 12 }}>✓</Text>}
        </View>
        <Text style={{ color: '#FFF' }}>Manter-me conectado</Text>
      </TouchableOpacity>
  );
}