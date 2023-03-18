import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, I'm a Software developer based in India!
            </Box>

            <Box display={{md : 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Aakash Sondagar
                    </Heading>
                    <p>A Software Engineer</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page