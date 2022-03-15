import { Link } from "remix";
import { Button, HStack } from '@chakra-ui/react';
import { CheckIcon, ChevronLeftIcon } from '@chakra-ui/icons';

export function Header () {
  return (
    <HStack spacing='2' borderBottom="1px" p="2">
      <Link to="/">
        <Button rightIcon={<ChevronLeftIcon />}>Home</Button>
      </Link>
      <Link to="quizzes">
        <Button rightIcon={<CheckIcon />}>Quizzes</Button>
      </Link>
    </HStack>
  );
}
