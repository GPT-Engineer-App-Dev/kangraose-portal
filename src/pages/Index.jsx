import { Container, Text, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center" mb={4}>
          Welcome to Kangaroo World
        </Heading>
        <Box boxSize="sm">
          <Image src="/images/kangaroo.jpg" alt="Kangaroo" borderRadius="md" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Discover the amazing world of kangaroos. Learn about their habitat, behavior, and more!
        </Text>
        <Button colorScheme="teal" size="lg" leftIcon={<FaArrowRight />}>
          Learn More
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;