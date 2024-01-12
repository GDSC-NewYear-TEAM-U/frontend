import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`;

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Container>
          <ReactQueryDevtools initialIsOpen={true} />
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </Container>
      </QueryClientProvider>
    </>
  );
}
