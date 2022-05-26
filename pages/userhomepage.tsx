import { SimpleGrid, GridItem, Center, Heading } from "@chakra-ui/react";
import CompanyCard from "../common/components/CompanyCard";
import NavBar from "../common/components/NavBar";

export default function HomePageUser() {
	return (
		<div>
			<Heading py={5} px={5} fontFamily="inherit">
				Your Companies
			</Heading>
			<Center>
				<SimpleGrid columns={[1, 2, 3]} spacing="40px">
					<GridItem>
						<CompanyCard
							name="NALCO"
							domain="PSU, Mining"
							logo="https://www.psuconnect.in/sdsdsd/download1.jpg"
							description="National Aluminium Company Limited, abbreviated as NALCO, is a government company having integrated and diversified operations in mining, metal and power under the ownership of Ministry of Mines, GoI"
						/>
					</GridItem>
					<GridItem>
						<CompanyCard
							name="NALCO"
							domain="PSU, Mining"
							logo="https://www.psuconnect.in/sdsdsd/download1.jpg"
							description="National Aluminium Company Limited, abbreviated as NALCO, is a government company having integrated and diversified operations in mining, metal and power under the ownership of Ministry of Mines, GoI"
						/>
					</GridItem>
					<GridItem>
						<CompanyCard
							name="NALCO"
							domain="PSU, Mining"
							logo="https://www.psuconnect.in/sdsdsd/download1.jpg"
							description="National Aluminium Company Limited, abbreviated as NALCO, is a government company having integrated and diversified operations in mining, metal and power under the ownership of Ministry of Mines, GoI"
						/>
					</GridItem>
					<GridItem>
						<CompanyCard
							name="NALCO"
							domain="PSU, Mining"
							logo="https://www.psuconnect.in/sdsdsd/download1.jpg"
							description="National Aluminium Company Limited, abbreviated as NALCO, is a government company having integrated and diversified operations in mining, metal and power under the ownership of Ministry of Mines, GoI"
						/>
					</GridItem>
					<GridItem>
						<CompanyCard
							name="NALCO"
							domain="PSU, Mining"
							logo="https://www.psuconnect.in/sdsdsd/download1.jpg"
							description="National Aluminium Company Limited, abbreviated as NALCO, is a government company having integrated and diversified operations in mining, metal and power under the ownership of Ministry of Mines, GoI"
						/>
					</GridItem>
					<GridItem>
						<CompanyCard
							name="NALCO"
							domain="PSU, Mining"
							logo="https://www.psuconnect.in/sdsdsd/download1.jpg"
							description="National Aluminium Company Limited, abbreviated as NALCO, is a government company having integrated and diversified operations in mining, metal and power under the ownership of Ministry of Mines, GoI"
						/>
					</GridItem>
				</SimpleGrid>
			</Center>
		</div>
	);
}
