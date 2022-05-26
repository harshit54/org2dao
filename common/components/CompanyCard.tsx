import {
	Heading,
	Avatar,
	Box,
	Center,
	Text,
	Stack,
	Button,
	Link,
	Badge,
	useColorModeValue,
} from "@chakra-ui/react";

interface CompanyCardProps {
	name: string;
	logo: string;
	description: string;
	domain: string;
}

export default function CompanyCard(props: CompanyCardProps) {
	return (
		<Center py={6}>
			<Box
				maxW={"350px"}
				w={"full"}
				bg={useColorModeValue("white", "gray.900")}
				boxShadow={"2xl"}
				rounded={"lg"}
				p={6}
				textAlign={"center"}
			>
				<Avatar size={"xl"} src={props.logo} mb={4} pos={"relative"} />
				<Heading fontSize={"2xl"} fontFamily={"body"}>
					{props.name}
				</Heading>
				<Text fontWeight={600} color={"gray.500"} mb={4}>
					{props.domain}
				</Text>
				<Text
					textAlign={"center"}
					color={useColorModeValue("gray.700", "gray.400")}
					px={3}
				>
					{props.description}
				</Text>
				<Stack mt={8} direction={"row"} spacing={4}>
					<Button
						flex={1}
						fontSize={"sm"}
						rounded={"full"}
						_focus={{
							bg: "gray.200",
						}}
					>
						Know More
					</Button>
					<Button
						flex={1}
						fontSize={"sm"}
						rounded={"full"}
						bg={"blue.400"}
						color={"white"}
						boxShadow={
							"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
						}
						_hover={{
							bg: "blue.500",
						}}
						_focus={{
							bg: "blue.500",
						}}
					>
						Vote Now
					</Button>
				</Stack>
			</Box>
		</Center>
	);
}
