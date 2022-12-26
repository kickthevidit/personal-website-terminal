import { mkdir } from 'fs';
import { getExp, getMK } from '../../api';

export const mortal_kombat = async (args: string[]): Promise<string> => {
  const mk = await getMK();

  return mk;
};
