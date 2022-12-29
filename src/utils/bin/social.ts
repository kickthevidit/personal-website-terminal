import config from '../../../config.json';

/* export const instagram = async (args: string[]): Promise<string> => {
  window.open(`https://www.instagram.com/${config.social.instagram}/`);

  return 'Opening instagram...';
}; */

export const spotify = async (args: string[]): Promise<string> => {
  window.open(`https://open.spotify.com/user/i_m_here`);

  return 'Opening spotify...';
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const super_secret = async (args: string[]): Promise<string> => {
  window.open(`https://www.youtube.com/watch?v=QB7ACr7pUuE`);

  return 'sorry...';
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`https://drive.google.com/file/d/1pw7WpxEP9Q7GfkjDZIWHnNVSGnA-h_NO/view?usp=sharing`);

  return 'Opening resume...';
};

export const r = async (args: string[]): Promise<string> => {
  window.open(`https://drive.google.com/file/d/1pw7WpxEP9Q7GfkjDZIWHnNVSGnA-h_NO/view?usp=sharing`);

  return 'Opening resume...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

export const wolfenstein = async (args: string[]): Promise<string> => {
  window.open(`http://git.nihilogic.dk/wolf3d/`);

  return 'Starting Wolfenstein 3D...';
};
