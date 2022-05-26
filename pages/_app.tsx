import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Auth0Provider
				domain="dev-org2dao.eu.auth0.com"
				clientId="iEcF4qo0WSqzxRj60FbbhVVTlsdDVjGa"
				redirectUri="https://www.google.com/" //TODO: Where to redirect after
			>
				<Component {...pageProps} />
			</Auth0Provider>
		</ChakraProvider>
	);
}

export default MyApp;
