import { registerWebModule, NativeModule } from 'expo';

import { NfcPaymentsModuleEvents } from './NfcPayments.types';

class NfcPaymentsModule extends NativeModule<NfcPaymentsModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(NfcPaymentsModule);
