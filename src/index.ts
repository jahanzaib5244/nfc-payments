// Reexport the native module. On web, it will be resolved to NfcPaymentsModule.web.ts
// and on native platforms to NfcPaymentsModule.ts
export { default } from './NfcPaymentsModule';
export { default as NfcPaymentsView } from './NfcPaymentsView';
export * from  './NfcPayments.types';
