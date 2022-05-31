import {
	Box,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Stack,
	SimpleGrid,
	GridItem,
	Button,
} from "@chakra-ui/react";
import NavBar from "../../../common/components/NavBar";
import { useState } from "react";
import ResolutionDetailsCard from "../../../common/components/ResolutionDetailsCard";
interface NewEventProps {}

export default function NewEvent(props: NewEventProps) {
	const [numOfResolutions, setNumOfResolutions] = useState(0);

	return (
		<div>
			<NavBar name="Harshit" companyName="ONGC" />
			<Box m={50}>
				<Heading textColor={"green.400"}>New Event</Heading>
				<Box>
					<SimpleGrid columns={[1, 2, 3]} my={10} spacing="40px">
						<GridItem>
							<FormControl isRequired>
								<FormLabel>Start Date</FormLabel>
								<Input type="datetime-local" />
							</FormControl>
						</GridItem>
						<GridItem>
							<FormControl isRequired>
								<FormLabel>End Date</FormLabel>
								<Input type="datetime-local" />
							</FormControl>
						</GridItem>
						<GridItem></GridItem>
					</SimpleGrid>
					<Stack direction="row">
						<Button
							colorScheme={"green"}
							onClick={() => {
								setNumOfResolutions(numOfResolutions + 1);
							}}
						>
							Add Resolution
						</Button>
						<Button
							colorScheme={"red"}
							onClick={() => {
								setNumOfResolutions(numOfResolutions - 1);
							}}
						>
							Remove Resolution
						</Button>
					</Stack>
					<SimpleGrid
						columns={[1, 2, 3]}
						spacing="10px"
						alignItems={"center"}
						alignSelf={"center"}
					>
						{[...Array(numOfResolutions)].map((x, i) => (
							<ResolutionDetailsCard number={i + 1} />
						))}
					</SimpleGrid>
					<Button
						colorScheme={"blue"}
						visibility={numOfResolutions > 0 ? "visible" : "hidden"}
					>
						Submit
					</Button>
				</Box>
			</Box>
		</div>
	);
}
