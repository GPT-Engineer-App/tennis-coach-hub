import React from "react";
import { Box, Heading, Text, Button, Stack, Image, Grid, GridItem, Icon } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bgImage="https://images.unsplash.com/photo-1551773188-0801da12ddae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb3VydHxlbnwwfHx8fDE3MTExMDM4MDh8MA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPosition="center" h="100vh" display="flex" alignItems="center" justifyContent="center" textAlign="center" color="white">
        <Box>
          <Heading as="h1" size="4xl" mb={4}>
            Elevate Your Tennis Game
          </Heading>
          <Text fontSize="xl" mb={8}>
            Professional Tennis Coaching for All Levels
          </Text>
          <Button colorScheme="blue" size="lg">
            Book a Lesson
          </Button>
        </Box>
      </Box>

      {/* About Section */}
      <Box p={12}>
        <Heading as="h2" size="xl" mb={4}>
          About Us
        </Heading>
        <Text mb={8}>We are a team of experienced tennis coaches dedicated to helping players of all levels improve their skills and reach their full potential. Our personalized coaching approach focuses on technique, strategy, and mental toughness.</Text>
        <Image src="https://images.unsplash.com/photo-1660463530535-b8ba6a79ee37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb2FjaCUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMTEwMzgwOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Tennis Coach" borderRadius="md" boxShadow="md" />
      </Box>

      {/* Services Section */}
      <Box bg="gray.100" p={12}>
        <Heading as="h2" size="xl" mb={8}>
          Our Services
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          <GridItem>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="lg" mb={4}>
                Private Lessons
              </Heading>
              <Text>One-on-one coaching sessions tailored to your specific needs and goals.</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="lg" mb={4}>
                Group Clinics
              </Heading>
              <Text>Join our group clinics to learn and practice alongside other players.</Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box bg="white" p={6} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="lg" mb={4}>
                Video Analysis
              </Heading>
              <Text>Get a detailed analysis of your technique with our video analysis service.</Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Contact Section */}
      <Box p={12}>
        <Heading as="h2" size="xl" mb={8}>
          Contact Us
        </Heading>
        <Stack direction="row" spacing={8} justifyContent="center">
          <Button leftIcon={<Icon as={FaTwitter} />} colorScheme="twitter" size="lg">
            Twitter
          </Button>
          <Button leftIcon={<Icon as={FaInstagram} />} colorScheme="pink" size="lg">
            Instagram
          </Button>
          <Button leftIcon={<Icon as={FaEnvelope} />} colorScheme="gray" size="lg">
            Email
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;
