import { requireNativeModule } from "expo-modules-core";

const NfcPayments = requireNativeModule("NfcPayments");

console.log(NfcPayments);

/**
 * Adds a card to Apple Wallet
 * @param encryptedPassData Base64-encoded pass data
 * @param activationData Base64-encoded activation data
 * @param ephemeralPublicKey Base64-encoded ephemeral public key
 */
export function addCardToAppleWallet(
  encryptedPassData: string,
  activationData: string,
  ephemeralPublicKey: string
): Promise<void> {
  return NfcPayments.addCardToAppleWallet(
    encryptedPassData,
    activationData,
    ephemeralPublicKey
  );
}
