import { getExp } from '../../api';

export const experience = async (args: string[]): Promise<string> => {
  const exp = await getExp();

  return exp;
};

export const e = async (args: string[]): Promise<string> => {
  const exp = await getExp();

  return exp;
};

