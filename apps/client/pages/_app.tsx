import '../styles/globals.css';
import { useState } from 'react';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from '@kite/ui';
import { light } from '@kite/theme';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={light}>
            <ModalProvider>
              <Component {...pageProps} />
            </ModalProvider>
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
