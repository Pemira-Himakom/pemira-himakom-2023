import { TokenPayload } from '@/models/token-payload';
import { useState } from 'react';

export default function useEncode() {
  const [encodedData, setEncodedData] = useState<string>("");
  const [error, setError] = useState('');

  const encode = (payload: TokenPayload) => {
    try {
      const stringifiedPayload = JSON.stringify(payload);
      const base64 = Buffer.from(stringifiedPayload).toString('base64');
      setEncodedData(base64);
    } catch (err) {
      setError('Error on encoding payload')
    }
  };

  return { encodedData, encode, error};
}