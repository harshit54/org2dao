import { Box, Button, Heading, Link, Stack } from "@chakra-ui/react";
import EventDetailsCard from "../../common/components/EventDetailsCard";
import NavBar from "../../common/components/NavBar";
import ResolutionDetailsCard from "../../common/components/ResolutionDetailsCard";

interface RepresentativeHomePageProps {
	id: Number;
}

export default function RepresentativeHomePage(
	props: RepresentativeHomePageProps
) {
	return (
		<div>
			<NavBar name="Harshit" companyName="Canara Bank" />{" "}
			<Box m={5}>
				<Heading>Actions</Heading>
				<Stack direction={"row"} m={7} spacing={5}>
					<Link href="/representative/newEvent">
						<Button colorScheme={"green"}>Add New Event</Button>
					</Link>
					<Button colorScheme={"yellow"}>Edit Company Profile</Button>
				</Stack>
				<Heading>Upcoming Events</Heading>
				<Stack direction={"row"}>
					<EventDetailsCard eventId={1247} />
				</Stack>
			</Box>
		</div>
	);
}
