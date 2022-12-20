import { getExp } from '../../api';

export const exp = async (args: string[]): Promise<string> => {
  const exp = await getExp();

  return exp;
};

