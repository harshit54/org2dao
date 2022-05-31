import { ReactNode } from "react";
import {
	Box,
	Flex,
	Avatar,
	Link,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	useColorMode,
	Center,
	Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import LogoutButton from "./LogoutButton";

const NavLink = ({ children }: { children: ReactNode }) => (
	<Link
		px={2}
		py={1}
		rounded={"md"}
		_hover={{
			textDecoration: "none",
			bg: useColorModeValue("gray.200", "gray.700"),
		}}
		href={"#"}
	>
		{children}
	</Link>
);

interface NavBarProps {
	name: string;
	companyName: string;
}

export default function NavBar(props: NavBarProps) {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<div>
			<Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
				<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
					<Box>Org2Dao</Box>

					<Flex alignItems={"center"}>
						<Stack direction={"row"} spacing={7}>
							<Text>
								{props.name}, {props.companyName}
							</Text>

							<Menu>
								<MenuButton
									as={Button}
									rounded={"full"}
									variant={"link"}
									cursor={"pointer"}
									minW={0}
								>
									<Avatar
										size={"sm"}
										src={"https://avatars.dicebear.com/api/male/username.svg"}
									/>
								</MenuButton>
								<MenuList alignItems={"center"}>
									<br />
									<Center>
										<Avatar
											size={"2xl"}
											src={"https://avatars.dicebear.com/api/male/username.svg"}
										/>
									</Center>
									<br />
									<Center>
										<p>Username</p>
									</Center>
									<br />
									<MenuDivider />
									<MenuItem>Your Servers</MenuItem>
									<MenuItem>Account Settings</MenuItem>
									{/* <MenuItem>
										<LogoutButton />
									</MenuItem> */}{" "}
									{/*FIXME: Hydration problem?*/}
								</MenuList>
							</Menu>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</div>
	);
}
