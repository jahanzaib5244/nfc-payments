import { requireNativeView } from 'expo';
import * as React from 'react';

import { NfcPaymentsViewProps } from './NfcPayments.types';

const NativeView: React.ComponentType<NfcPaymentsViewProps> =
  requireNativeView('NfcPayments');

export default function NfcPaymentsView(props: NfcPaymentsViewProps) {
  return <NativeView {...props} />;
}
