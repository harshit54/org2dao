import type { AppProps } from "next/app";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import ColorModeToggle from "../common/components/ColorModeToggle";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Auth0Provider
				domain="dev-org2dao.eu.auth0.com"
				clientId="iEcF4qo0WSqzxRj60FbbhVVTlsdDVjGa"
				redirectUri="https://www.google.com/" //TODO: Where to redirect after auth
			>
				<Component {...pageProps} />
			</Auth0Provider>
			<Box pos="fixed" bottom={"0"} right={"0"}>
				<ColorModeToggle />
			</Box>
		</ChakraProvider>
	);
}

export default MyApp;
