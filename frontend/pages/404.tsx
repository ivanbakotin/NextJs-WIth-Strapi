import { Heading, Flex, Link } from "@chakra-ui/react";

export default function Custom404() {
  return (
    <Flex
      gap="30px"
      direction="column"
      align="center"
      justify="center"
      minHeight="100vh"
    >
      <Heading textAlign="center" as="h1" size="4xl">
        404 - Page Not Found
      </Heading>
      <Link fontSize="200" href="/">
        Go Home
      </Link>
    </Flex>
  );
}
