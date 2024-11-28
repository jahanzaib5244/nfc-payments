import { NativeModule, requireNativeModule } from 'expo';

import { NfcPaymentsModuleEvents } from './NfcPayments.types';

declare class NfcPaymentsModule extends NativeModule<NfcPaymentsModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<NfcPaymentsModule>('NfcPayments');
