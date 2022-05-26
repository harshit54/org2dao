import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	Select,
	InputRightElement,
	Stack,
	Button,
	Heading,
	Textarea,
	useColorModeValue,
	Link,
	RadioGroup,
	Radio,
} from "@chakra-ui/react";
import { useState } from "react";

interface ResolutionProps {
	number: number;
}

export default function ResolutionDetailsCard(props: ResolutionProps) {
	const [category, setCategory] = useState(0);
	let CategoryDetails;
	if (category == 0) {
		CategoryDetails = <div />;
	} else if (category == 1) {
		CategoryDetails = <ApprovalCategoryDetails />;
	} else if (category == 2) {
		CategoryDetails = <AppointmentCategoryDetails />;
	}
	return (
		<Flex
			minH={"100vh"}
			align={"center"}
			justify={"center"}
		>
			<Stack spacing={5} mx={"auto"} py={12} px={6}>
				<Stack>
					<Heading fontSize={"3xl"} textAlign={"center"}>
						Resolution {props.number}
					</Heading>
				</Stack>
				<Box
					rounded={"lg"}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"lg"}
					p={8}
				>
					<Box mb={4}>
						<FormControl id="category" isRequired>
							<FormLabel>Category</FormLabel>
							<Select
								placeholder="Select Type"
								onChange={(e) => setCategory(Number(e.target.value))}
							>
								<option value={1}>Approval</option>
								<option value={2}>Appointment</option>
							</Select>
						</FormControl>
					</Box>
					{CategoryDetails}
				</Box>
				<Button colorScheme={"red"} width="50%" alignSelf={"center"}>
					Delete
				</Button>
			</Stack>
		</Flex>
	);
}

function AppointmentCategoryDetails() {
	return (
		<Stack spacing={4}>
			<FormControl id="appointee_name" isRequired>
				<FormLabel>Appointee Name</FormLabel>
				<Input type="text" />
			</FormControl>
			<FormControl id="position" isRequired>
				<FormLabel>Position</FormLabel>
				<Input type="text" />
			</FormControl>
			<FormControl id="is_special" isRequired>
				<FormLabel>Type</FormLabel>
				<RadioGroup>
					<Stack direction="row">
						<Radio value="1">Ordinary</Radio>
						<Radio value="2">Special</Radio>
					</Stack>
				</RadioGroup>
			</FormControl>
			<FormControl id="description">
				<FormLabel>Description</FormLabel>
				<Textarea placeholder="Enter Resolution Summary Here" />
			</FormControl>
			<FormControl id="file">
				<FormLabel>File Upload</FormLabel>
				<Input type="file" name="file" py={1} />
			</FormControl>
		</Stack>
	);
}

function ApprovalCategoryDetails() {
	return (
		<Stack spacing={4}>
			<FormControl id="appointee_name" isRequired>
				<FormLabel>Type</FormLabel>
				<Select placeholder="Select Type">
					<option>Raising Capital</option>
					<option>Expenditure</option>
					<option>Investment</option>
				</Select>
			</FormControl>
			<FormControl id="is_special" isRequired>
				<FormLabel>Type</FormLabel>
				<RadioGroup>
					<Stack direction="row">
						<Radio value="1">Ordinary</Radio>
						<Radio value="2">Special</Radio>
					</Stack>
				</RadioGroup>
			</FormControl>
			<FormControl id="description">
				<FormLabel>Description</FormLabel>
				<Textarea placeholder="Enter Resolution Summary Here" />
			</FormControl>
			<FormControl id="file">
				<FormLabel>File Upload</FormLabel>
				<Input type="file" name="file" py={1} />
			</FormControl>
		</Stack>
	);
}
