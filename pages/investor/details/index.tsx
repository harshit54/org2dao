import { Heading, Text, Box, Image, Stack } from "@chakra-ui/react";
import NavBar from "../../../common/components/NavBar";
import ResolutionDetailsCard from "../../../common/components/ResolutionDetailsCard";
import CompanyCard from "../../../common/components/CompanyCard";

interface CompanyDetailsProps {
	name: string;
	tickerSymbol: string;
}

export default function CompanyDetail(props: CompanyDetailsProps) {
	let props2 = {
		name: "Oil and Natural Gas Corporation",
		tickerSymbol: "ONGC",
		description: `Maharatna ONGC is the largest crude oil and natural gas Company in India, contributing around 71 per cent to Indian domestic production. Crude oil is the raw material used by downstream companies like IOC, BPCL, HPCL and MRPL (Last two are subsidiaries of ONGC) to produce petroleum products like Petrol, Diesel, Kerosene, Naphtha, and Cooking Gas LPG.
									ONGC: Committed towards India's Energy Security
									ONGC has a unique distinction of being a company with in-house service capabilities in all areas of Exploration and Production of oil & gas and related oil-field services. Winner of the Best Employer award, this public sector enterprise has a dedicated team of around 28,500 professionals who toil round the clock in challenging locations.
									ONGC Videsh Limited, a Miniratna Schedule “A” Central Public Sector Enterprise (CPSE) of the Government of India under the administrative control of the Ministry of Petroleum & Natural Gas, is the wholly owned subsidiary and overseas arm of Oil and Natural Gas Corporation Limited (ONGC), the flagship national oil company (NOC) of India. The primary business of ONGC Videsh is to prospect for oil and gas acreages outside India, including exploration, development and production of oil and gas. ONGC Videsh owns Participating Interests in 35 oil and gas assets in 15 countries and produced about 30.3% of oil and 23.7% of oil and natural gas of India’s domestic production. In terms of reserves and production, ONGC Videsh is the second largest petroleum company of India, next only to its parent ONGC.
									ONGC subsidiary Mangalore Refinery and Petrochemicals Limited (MRPL) is a schedule ‘A’ Miniratna, Central Public Sector Enterprise (CPSE) under the Ministry of Petroleum & Natural Gas. The 15.0MMTPA (Million Metric Ton per annum) Refinery has got a versatile design with complex secondary processing units and a high flexibility to process Crudes of various API, delivering a variety of quality products. MRPL, with its parent company Oil and Natural Gas Corporation Limited (ONGC), owns and operates ONGC Mangalore Petrochemicals Limited (OMPL), a petrochemical unit capable of producing 0.905 MMTPA of Para Xylene and 0.273 MMTPA of Benzene.
									ONGC subsidiary HPCL is a Maharatna CPSE. HPCL has the second largest share of product pipelines in India with a pipeline network of more than 3370 kms for transportation of petroleum products and a vast marketing network consisting of 14 Zonal offices in major cities and 133 Regional Offices facilitated by a Supply & Distribution infrastructure comprising Terminals, Pipeline networks, Aviation Service Stations, LPG Bottling Plants, Inland Relay Depots & Retail Outlets, Lube and LPG Distributorships. Consistent excellent performance has been made possible by highly motivated workforce of over 9,500 employees working all over India at its various refining and marketing locations.`,
	};
	return (
		<div>
			<NavBar name="Harshit" companyName="NALCO" />
			<Box px={8} py={5} m={10} mx={80}>
				<Heading>{props2.name}</Heading>
				<Heading size="md">{props2.tickerSymbol}</Heading>
				<Text py={10}>{props2.description}</Text>
				<Heading size="xl">Upcoming Events</Heading>
				<Stack direction={"row"}>
					<ResolutionDetailsCard number={1} />
				</Stack>
			</Box>
		</div>
	);
}
