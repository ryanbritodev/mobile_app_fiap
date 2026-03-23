type LoginEntry = {
  email: string;
  password: string;
  keepConnected: boolean;
  timestamp: string;
  attemptNumber: number;
};

export class LoginLogger {
  static #logs: LoginEntry[] = [];

  static log(email: string, password: string, keepConnected: boolean): LoginEntry {
    const entry: LoginEntry = {
      email,
      password: '*'.repeat(password.length),
      keepConnected,
      timestamp: new Date().toISOString(),
      attemptNumber: this.#logs.length + 1,
    };

    this.#logs.push(entry);
    this.#print(entry);

    return entry;
  }

  static #print(entry: LoginEntry): void {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`📋 Tentativa de Login #${entry.attemptNumber}`);
    console.log(`📧 E-mail:          ${entry.email}`);
    console.log(`🔒 Senha:           ${entry.password}`);
    console.log(`🔗 Manter conectado: ${entry.keepConnected ? 'Sim' : 'Não'}`);
    console.log(`🕐 Horário:         ${entry.timestamp}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  }

  static getAll(): LoginEntry[] {
    return [...this.#logs];
  }

  static clear(): void {
    this.#logs = [];
    console.log('🗑️ Logs de login limpos.');
  }
}