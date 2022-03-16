import {
  Box,
  Center,
  Collapse,
  Container,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import type { Card } from "~/utils/quiz.server";

export function CardDisplay({ card: { front, back } }: { card: Card }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container p="4" bg="cyan.300" rounded="md" shadow="lg" onClick={onToggle}>
      <Center>
        <Heading as="h3" size="md">
          {front}
        </Heading>
      </Center>
      <Collapse in={isOpen} animateOpacity>
        <Box p="8" color="white" mt="4" bg="cyan.500" rounded="md" shadow="md">
          <Text fontSize="xl">{back}</Text>
        </Box>
      </Collapse>
    </Container>
  );
}
