import packageJson from '../../../package.json';
import * as bin from './index';

export const h = async (args: string[]): Promise<string> => {  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.

+---------------------+      +---------------------+      +-----------------------+
|    'resume' / 'r'   |      |       Socials       |      |       Try These       |
+---------------------+      +----------+----------+      +-----------------------+
|  'projects' / 'p'   |      | Linkedin |'linkedin'|      |     'wolfenstein'     |
+---------------------+      +----------+----------+      +-----------------------+
| 'experiences' / 'e' |      |  Spotify | 'spotify'|      |        'cowsay'       |
+---------------------+      +----------+----------+      +-----------------------+
|    'about' / 'a'    |      |   Email  |  'email' |      |         'date'        |
+---------------------+      +----------+----------+      +-----------------------+
|    'banner' / 'b'   |      |  Github  | 'github' |      |        'emacs'        |
+---------------------+      +----------+----------+      +-----------------------+
|        'gui'        |                                   |          'vi'         |          
+---------------------+                                   +-----------------------+
|       'help'        |                                   |         'vim'         |     
+---------------------+                                   +-----------------------+
|      'github'       |                                   |     'super_secret'    |
+---------------------+                                   +-----------------------+
                                                          | 'weather {your_city}' |
                                                          +-----------------------+
                                                          |        'whoami'       |
                                                          +-----------------------+
                                                          |     'theme random'    |
                                                          +-----------------------+
                                                          |       'doritos'       |
                                                          +-----------------------+
`;
};

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.

+---------------------+      +---------------------+      +-----------------------+
|    'resume' / 'r'   |      |       Socials       |      |       Try These       |
+---------------------+      +----------+----------+      +-----------------------+
|  'projects' / 'p'   |      | Linkedin |'linkedin'|      |     'wolfenstein'     |
+---------------------+      +----------+----------+      +-----------------------+
| 'experiences' / 'e' |      |  Spotify | 'spotify'|      |        'cowsay'       |
+---------------------+      +----------+----------+      +-----------------------+
|    'about' / 'a'    |      |   Email  |  'email' |      |         'date'        |
+---------------------+      +----------+----------+      +-----------------------+
|    'banner' / 'b'   |      |  Github  | 'github' |      |        'emacs'        |
+---------------------+      +----------+----------+      +-----------------------+
|        'gui'        |                                   |          'vi'         |          
+---------------------+                                   +-----------------------+
|       'help'        |                                   |         'vim'         |     
+---------------------+                                   +-----------------------+
|      'github'       |                                   |     'super_secret'    |
+---------------------+                                   +-----------------------+
                                                          | 'weather {your_city}' |
                                                          +-----------------------+
                                                          |        'whoami'       |
                                                          +-----------------------+
                                                          |     'theme random'    |
                                                          +-----------------------+
                                                          |       'doritos'       |
                                                          +-----------------------+
`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
  // window.open('https://m4tt72.com', '_self'); // TODO: Add personal url
  window.open('https://vidg.webflow.io/', '_self'); // TODO: Add personal url

  return 'Opening GUI version...';
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:vgautam2@illinois.edu');

  return 'Opening mailto:vgautam2@illinois.edu...';
};

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'vim'`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `the right choice 🙃`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'. 
It is safer for your pinky!`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const doritos = async (args?: string[]): Promise<string> => {
  return `
-----------------------------------------------------------------------------------------
Sorry i drop my smallpack of doritos ▲▼▶◀▼▲▲▼▶▼▲▲▼▶◀▶▲▲▶▶▼▲▶▶▶▼▲◀◀▶▼◀▶▼▶▶◀▼▲◀▶▲▼▶▶▼▼▲◀▶▼▲
-----------------------------------------------------------------------------------------
`;
};

export const banner = (args?: string[]): string => {
  return `
██╗░░░██╗██╗██████╗░██╗████████╗  ░██████╗░░█████╗░██╗░░░██╗████████╗░█████╗░███╗░░░███╗
██║░░░██║██║██╔══██╗██║╚══██╔══╝  ██╔════╝░██╔══██╗██║░░░██║╚══██╔══╝██╔══██╗████╗░████║
╚██╗░██╔╝██║██║░░██║██║░░░██║░░░  ██║░░██╗░███████║██║░░░██║░░░██║░░░███████║██╔████╔██║
░╚████╔╝░██║██║░░██║██║░░░██║░░░  ██║░░╚██╗██╔══██║██║░░░██║░░░██║░░░██╔══██║██║╚██╔╝██║
░░╚██╔╝░░██║██████╔╝██║░░░██║░░░  ╚██████╔╝██║░░██║╚██████╔╝░░░██║░░░██║░░██║██║░╚═╝░██║
░░░╚═╝░░░╚═╝╚═════╝░╚═╝░░░╚═╝░░░  ░╚═════╝░╚═╝░░╚═╝░╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░░░░╚═╝ v${packageJson.version}

Welcome to my linux-terminal style website!
Want to use a regular website? type 'gui' and press enter

Example Commands:
  - Resume: 'resume' or 'r'
  - Projects: 'projects' or 'p'
  - Experiences: 'experience' or 'e'
  - Github: 'github'
  - Play Wolfenstein 3D: 'wolfenstein'

Contacts:
  - Email me: 'email'
  - Linkedin: 'linkedin'
  - Spotify 🙃: 'spotify'

Type 'help' to see a list of available commands.
`;
};

export const b = (args?: string[]): string => {
  return `
██╗░░░██╗██╗██████╗░██╗████████╗  ░██████╗░░█████╗░██╗░░░██╗████████╗░█████╗░███╗░░░███╗
██║░░░██║██║██╔══██╗██║╚══██╔══╝  ██╔════╝░██╔══██╗██║░░░██║╚══██╔══╝██╔══██╗████╗░████║
╚██╗░██╔╝██║██║░░██║██║░░░██║░░░  ██║░░██╗░███████║██║░░░██║░░░██║░░░███████║██╔████╔██║
░╚████╔╝░██║██║░░██║██║░░░██║░░░  ██║░░╚██╗██╔══██║██║░░░██║░░░██║░░░██╔══██║██║╚██╔╝██║
░░╚██╔╝░░██║██████╔╝██║░░░██║░░░  ╚██████╔╝██║░░██║╚██████╔╝░░░██║░░░██║░░██║██║░╚═╝░██║
░░░╚═╝░░░╚═╝╚═════╝░╚═╝░░░╚═╝░░░  ░╚═════╝░╚═╝░░╚═╝░╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░░░░╚═╝ v${packageJson.version}

Welcome to my linux-terminal style website!
Want to use a regular website? type 'gui' and press enter

Example Commands:
  - Resume: 'resume' or 'r'
  - Projects: 'projects' or 'p'
  - Experiences: 'experience' or 'e'
  - Github: 'github'
  - Play Wolfenstein 3D: 'wolfenstein'

Contacts:
  - Email me: 'email'
  - Linkedin: 'linkedin'
  - Spotify 🙃: 'spotify'

Type 'help' to see a list of available commands.
`;
};
