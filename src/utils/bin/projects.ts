import { getProjects } from '../../api';

export const projects = async (args: string[]): Promise<string> => {
  const bio = await getProjects();

  return bio;
};

export const p = async (args: string[]): Promise<string> => {
  const bio = await getProjects();

  return bio;
};

