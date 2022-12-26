import axios from 'axios';
import config from '../../config.json';

export const getRepos = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );

  return data;
};

export const getBio = async () => {
  const { data } = await axios.get(config.bioUrl);

  return data;
};

export const getExp = async () => {
  const { data } = await axios.get(config.experience);

  return data;
};

export const getResume = async () => {
  const { data } = await axios.get(config.resume);

  return data;
};

export const getPortfolio = async () => {
  const { data } = await axios.get(config.portfolio);

  return data;
};

export const getProjects = async () => {
  const { data } = await axios.get(config.projects);

  return data;
};

export const getWeather = async (city: string) => {
  const { data } = await axios.get(`https://wttr.in/${city}?ATm`);

  return data;
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');

  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};

// Mortal Kombat
export const getMK = async () => {
  const { data } = await axios.get(config['mortal-kombat']);

  return data;
};