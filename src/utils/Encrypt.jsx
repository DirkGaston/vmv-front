import CryptoJS from "crypto-js";
import { ES_HASH } from "../data/EnviromentVariables";

export const AESEncrypt = (pureText) => {
  return encodeURIComponent(
    CryptoJS.AES.encrypt(JSON.stringify(pureText), ES_HASH).toString()
  );
};

export const AESDecrypt = (encryptedText) => {
  const bytes = CryptoJS.AES.decrypt(
    decodeURIComponent(encryptedText),
    ES_HASH
  );
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};
