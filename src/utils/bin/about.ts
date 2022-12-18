import { getBio } from '../../api';

export const a = async (args: string[]): Promise<string> => {
  const bio = await getBio();

  return bio;
};

export const about = async (args: string[]): Promise<string> => {
  const bio = await getBio();

  return bio;
};
