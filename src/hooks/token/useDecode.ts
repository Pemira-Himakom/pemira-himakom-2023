import { TokenPayload } from "@/models/token-payload";
import { useState } from "react";

export default function useDecode() {
  const [decodedData, setDecodedData] = useState<TokenPayload | null>(null);
  const [error, setError] = useState('');

  const decode = (base64: string) => {
    try {
      const decodedString = Buffer.from(base64, 'base64').toString('utf-8');
      const parsedData = JSON.parse(decodedString);
      setDecodedData(parsedData);
    } catch (err) {
        setError('Error on decoding payload')
    }
  };

  return { decodedData, decode, error};
}