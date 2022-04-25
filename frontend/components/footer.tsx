import { Flex, ListItem, List, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <List>
      <Flex
        flexDirection="column"
        bg="orange"
        justify="center"
        align="center"
        gap={10}
        p={10}
        fontSize="200"
      >
        <ListItem>
          <Link href="/about">About</Link>
        </ListItem>
        <ListItem>
          <Link href="/about">About</Link>
        </ListItem>
        <ListItem>
          <Link href="/about">About</Link>
        </ListItem>
        <ListItem>
          <Link href="/about">About</Link>
        </ListItem>
      </Flex>
    </List>
  );
};

export default Footer;
