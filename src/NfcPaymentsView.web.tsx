import * as React from 'react';

import { NfcPaymentsViewProps } from './NfcPayments.types';

export default function NfcPaymentsView(props: NfcPaymentsViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
