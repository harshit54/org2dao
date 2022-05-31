import { SimpleGrid, GridItem, Center, Heading, Box } from "@chakra-ui/react";
import CompanyCard from "../../common/components/CompanyCard";
import NavBar from "../../common/components/NavBar";
import { faker } from "@faker-js/faker";
faker.setLocale("en_IND");

export default function HomePageUser() {
	return (
		<div>
			<Box top={0}>
				<NavBar
					name={faker.name.firstName()}
					companyName={faker.random.alpha(5).toUpperCase()}
				/>
			</Box>
			<Heading width={"100%"} px="15%" py={5}>
				Your Companies
			</Heading>
			<Center>
				<SimpleGrid columns={[1, 2, 3]} spacing="40px">
					<GridItem>
						<CompanyCard
							name={faker.company.companyName()}
							domain={faker.company.bsBuzz() + "," + faker.company.bsBuzz()}
							logo={faker.image.abstract(250, 250, true)}
							description={faker.random.words(30)}
						/>
					</GridItem>
					<GridItem>
						<CompanyCard
							name={faker.company.companyName()}
							domain={faker.company.bsBuzz() + "," + faker.company.bsBuzz()}
							logo={faker.image.abstract(250, 250, true)}
							description={faker.random.words(30)}
						/>
					</GridItem>
					<GridItem>
						<CompanyCard
							name={faker.company.companyName()}
							domain={faker.company.bsBuzz() + "," + faker.company.bsBuzz()}
							logo={faker.image.abstract(250, 250, true)}
							description={faker.random.words(30)}
						/>
					</GridItem>
					<GridItem>
						<CompanyCard
							name={faker.company.companyName()}
							domain={faker.company.bsBuzz() + "," + faker.company.bsBuzz()}
							logo={faker.image.abstract(250, 250, true)}
							description={faker.random.words(30)}
						/>
					</GridItem>
					<GridItem>
						<CompanyCard
							name={faker.company.companyName()}
							domain={faker.company.bsBuzz() + "," + faker.company.bsBuzz()}
							logo={faker.image.abstract(250, 250, true)}
							description={faker.random.words(30)}
						/>
					</GridItem>
					<GridItem>
						<CompanyCard
							name={faker.company.companyName()}
							domain={faker.company.bsBuzz() + "," + faker.company.bsBuzz()}
							logo={faker.image.abstract(250, 250, true)}
							description={faker.random.words(30)}
						/>
					</GridItem>
				</SimpleGrid>
			</Center>
		</div>
	);
}
