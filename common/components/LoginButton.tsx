import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

export default function LoginButton() {
	const { loginWithRedirect } = useAuth0();

	return (
		<Button
			colorScheme="green"
			maxW="100"
			alignSelf={"center"}
			onClick={() => loginWithRedirect()}
		>
			Log In
		</Button>
	);
}
