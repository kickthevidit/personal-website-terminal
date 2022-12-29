import React from 'react';
import { useTheme } from '../../utils/themeProvider';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Layout: React.FC<Props> = ({ children, onClick }) => {
  const { theme } = useTheme();

  return (
    <div
      className="min-w-max text-xs md:min-w-full md:text-base"
      onClick={onClick}
      style={{
        color: theme.foreground,
      }}
    >
      {/* <div
        className="GUI website button"
        style={{
          color: theme.foreground,
          border: 2,
          borderBlockColor: 'black',
        }}
      ><button>Chicken Wings</button></div> */}
      <main
        className="w-full h-full p-2"
        style={{
          background: theme.background,
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
