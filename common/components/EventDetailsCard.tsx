import { Heading, Stack } from "@chakra-ui/react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import ResolutionDetailsCard from "./ResolutionDetailsCard";
interface EventDetailsProps {
	eventId: Number;
}

export default function EventDetailsCard(props: EventDetailsProps) {
	return (
		<div>
			<Tabs variant="soft-rounded" colorScheme="green" my={7} mx={4}>
				<TabList>
					<Tab>Event #1234</Tab>
					<Tab>Tab 2</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Stack direction={"row"}>
							<ResolutionDetailsCard number={1} />
							<ResolutionDetailsCard number={2} />
						</Stack>
					</TabPanel>
					<TabPanel>
						<p>two!</p>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	);
}
