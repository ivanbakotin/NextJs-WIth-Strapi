import React from "react";
import { Flex, ListItem, List, Link } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      as="nav"
      color="#23387E"
      bg="orange"
      fontWeight={700}
    >
      <List>
        <ListItem p={5}>
          <Link fontSize="200" href="/">
            Strapi Blog
          </Link>
        </ListItem>
      </List>
      <List>
        <Flex gap={20}>
          <ListItem>
            <Link fontSize="200" href="/about">
              About
            </Link>
          </ListItem>
          <ListItem>
            <Link fontSize="200" href="/gallery">
              Gallery
            </Link>
          </ListItem>
          <ListItem>
            <Link fontSize="200" href="/projects">
              Projects
            </Link>
          </ListItem>
        </Flex>
      </List>
    </Flex>
  );
};

export default Nav;
