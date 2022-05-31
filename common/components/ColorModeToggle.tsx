import { useColorMode, Button, Box } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ColorModeToggle() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Box>
			<Button onClick={toggleColorMode}>
				{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
			</Button>
		</Box>
	);
}
