import { SiweMessage } from "siwe";
import { createSIWEConfig } from "@web3modal/siwe";

import type {
  SIWECreateMessageArgs,
  SIWESession,
  SIWEVerifyMessageArgs,
} from "@web3modal/core";
import { challenge, fetchUser, login } from "@/lib/api/auth";

export const siweConfig = createSIWEConfig({
  createMessage: ({ nonce, address, chainId }: SIWECreateMessageArgs) => {
    console.log("HELLO MESSAE");
    return new SiweMessage({
      version: "1",
      domain: window.location.host,
      uri: window.location.origin,
      address,
      chainId,
      nonce,
      // Human-readable ASCII assertion that the user will sign, and it must not contain `\n`.
      statement: "Sign in With Ethereum.",
    }).prepareMessage();
  },

  getNonce: async () => {
    // Fetch nonce from your SIWE server
    const nonce = await challenge("0x953195BC34E7b92cf91979411116527d091592c3");

    if (!nonce) {
      throw new Error("Failed to get nonce!");
    }

    return nonce.nonce;
  },
  getSession: async () => {
    // Fetch currently authenticated user
    // const session = await getSession();
    const session = await fetchUser("");
    if (!session) {
      throw new Error("Failed to get session!");
    }

    // const { address, chainId } = session;

    // return { address, chainId };
    return {
      address: "0x953195BC34E7b92cf91979411116527d091592c3",
      chainId: 1,
    };
  },
  verifyMessage: async ({ message, signature }: SIWEVerifyMessageArgs) => {
    try {
      console.log("Hello");
      // Use your SIWE server to verify if the message and the signature are valid
      // Your back-end will tipically rely on SiweMessage(message).validate(signature)
      return true;
      const isValid = await login(message, signature);

      return isValid;
    } catch (error) {
      return false;
    }
  },
  onSignIn(session) {
    console.log(session);
  },
  signOut: async () => {
    try {
      // Sign out by calling the relevant endpoint on your back-end
      //   await signOut();

      return true;
    } catch (error) {
      return false;
    }
  },
});
