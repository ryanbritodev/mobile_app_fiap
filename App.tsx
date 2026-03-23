import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { CheckboxLogin } from './components/Checkbox';
import { LoginLogger } from './components/LoginLogger';

function MainContent() {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [keepConnected, setKeepConnected] = useState<boolean>(false);

  const handleLogin = (): void => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Atenção', 'Preencha o e-mail e a senha antes de continuar.');
      return;
    }
    else if (email.trim() === 'admin' && password.trim() === '1234')
    {
      Alert.alert('Bem-vindo!', 'Usuário e senha corretos');
    } else {
      Alert.alert('Usuário ou senha incorretos!', 'Tente novamente');
    }

    LoginLogger.log(email, password, keepConnected);

    // TODO: chamar sua API de autenticação aqui
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={[styles.statusBarBackground, { height: insets.top }]} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + 20 }]}
      >
        <View style={styles.header}>
          <Image
            source={require('./assets/fiap_logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Login</Text>
        </View>

        <Text style={styles.subtitle}>Bem-vindo de volta ao App FIAP!</Text>

        <Text style={styles.subtitle}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="email@exemplo.com"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <Text style={styles.subtitle}>Senha</Text>
          <TouchableOpacity style={styles.buttonCreate} onPress={() => {}}>
            <Text style={styles.buttonForgotText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder="••••••••••••••••"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <CheckboxLogin
          keepConnected={keepConnected}
          setKeepConnected={setKeepConnected}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.subtitleLogin}>Ou entrar com</Text>

        <TouchableOpacity style={styles.buttonGoogle} onPress={() => {}}>
          <Image
            source={require('./assets/google.png')}
            style={styles.logoGoogle}
            resizeMode="contain"
          />
          <Text style={styles.buttonTextGoogle}>Continuar com Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonCreate} onPress={() => {}}>
          <Text style={styles.buttonCreateText}>Criar uma conta</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <MainContent />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  statusBarBackground: {
    backgroundColor: '#ED145B',
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    alignItems: 'stretch',
    marginBottom: 5,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoGoogle: {
    width: 30,
    height: 30,
    marginBottom: 0,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ED145B',
    alignItems: 'flex-start',
  },
  input: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    color: '#fff',
    borderWidth: 2,
    borderColor: '#ED145B',
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  switchLabel: {
    fontSize: 16,
    color: '#fff',
    marginHorizontal: 10,
  },
  subtitle: {
    fontSize: 17,
    color: '#fff',
    marginBottom: 15,
  },
  subtitleForgot: {
    fontSize: 15,
    color: '#fff',
    marginBottom: 15,
  },
  subtitleLogin: {
    fontSize: 15,
    color: '#fff',
    opacity: 0.5,
    textAlign: 'center',
  },
  currentPeriod: {
    fontSize: 18,
    color: '#ED145B',
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  list: {
    marginBottom: 10,
  },
  emptyMessage: {
    color: '#999',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 30,
  },
  button: {
    backgroundColor: '#ED145B',
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonGoogle: {
    backgroundColor: '#F6F6F6',
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  buttonCreate: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  buttonCreateText: {
    color: '#ED145B',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  buttonTextGoogle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonForgot: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonForgotText: {
    color: '#ED145B',
    fontSize: 15,
    fontWeight: 'bold',
    alignItems: 'center',
    marginBottom: 15,
  },
});