import { Box, Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import ReservForm from "components/ReservForm";

const Reservation = () => {
    const isNonMobile = useMediaQuery(["(min-width: 992px)", "(min-width: 768px)", "(min-width: 500px)"]);

    return (
        <Box pb="30px">
            <Box as="section" py={{ base: '10', lg: '10' }} px="16px" bg="primary.green" >
                    <Box justifyContent="center" display="grid">
                        <Heading variant="primary" color="primary.yellow" size="2xl">Reservation</Heading>
                        <Heading variant="primary" color="highlight.white" size="lg" pb="10px"></Heading>
                        <Text color="highlight.white" width={{ base: '20ch', sm: '25ch', md: '30ch' }} pb="10px" fontSize={{ base: '0.9rem', md: '1.3rem' }}>
                            Please be on time for your reservation to guarantee your seating.
                        </Text>
                    </Box>
            </Box>
            <Box as="section" py={{ base: '10', lg: '5' }} px="16px" >
                <Box maxW="4xl" margin="0 auto" justifyContent="center" display="flex">
                    
                    <Box>
                        <Flex justifyContent="center" pb="30px">
                            <Heading size="md" variant="secondary" color="primary.green">Reservation details</Heading>
                        </Flex>
                        <ReservForm isNonMobile={isNonMobile[0]} />
                    </Box>
                </Box>
            </Box>
        </Box>

    );
};

export default Reservation;