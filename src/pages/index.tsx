import { useMatomo } from '@m4tt72/matomo-tracker-react';
import Head from 'next/head';
import React from 'react';
import { History } from '../components/history';
import { Input } from '../components/input';
import { useShell } from '../utils/shellProvider';
import { useTheme } from '../utils/themeProvider';
import config from '../../config.json';

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
  const { trackPageView } = useMatomo();
  const { history } = useShell();
  const { theme } = useTheme();

  const containerRef = React.useRef(null);

  React.useEffect(() => {
    trackPageView({});
  }, []);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [history]);

  return (
    <>
      <Head>
        <title>Vidit Gautam | Home</title>
      </Head>

      <div
        className="overflow-hidden h-full rounded"
        style={{
          borderColor: theme.yellow,
          padding: config.border ? 16 : 8,
          borderWidth: config.border ? 2 : 0,
        }}
      >

        <div ref={containerRef} className="overflow-y-auto h-full">
          <div style={{ float: "left", width: "75%" }}><History history={history} />

            <Input inputRef={inputRef} containerRef={containerRef} /></div>

          <div style={{ float: "left", width: "25%", textAlign: "right", alignContent: "right" }}>
            <a href="https://vidg.webflow.io"><button className="action-btn1"><p style={{ fontFamily: "sans-serif", fontSize: "18px" }}>Go to GUI version</p></button></a>
          </div>
          {/* <div style={{ float: "left", width: "25%", textAlign: "right" }}>
            <a href="https://vidg.webflow.io" ><button
              style={{
                alignContent: 'center',
              }}><div
                style={{
                  borderColor: theme.yellow,
                  borderWidth: 1,
                  width: 275,
                  borderRadius: 2,
                  margin: 5,
                  flex: 1,
                  alignContent: 'center',
                  padding: '15px',
                }}
              ><p style={{ color: theme.yellow, fontFamily: "sans-serif", fontSize: "18px" }}>Check out the Graphical Website!</p></div></button></a></div> */}
        </div>
      </div>
    </>
  );
};

export default IndexPage;
