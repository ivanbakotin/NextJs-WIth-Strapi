import React from "react";
import Link from "next/link";
import { Flex, ListItem, List, Text } from "@chakra-ui/react";

const Nav = ({ categories }: any) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      as="nav"
      color="darkblue"
      bg="orange"
    >
      <List>
        <ListItem p={5}>
          <Link href="/">
            <Text fontSize={"clamp(0.8rem, 1vw, 3rem)"}>Strapi Blog</Text>
          </Link>
        </ListItem>
      </List>
      <List>
        <Flex>
          {categories.map((category: any) => {
            return (
              <ListItem p={5} key={category.id}>
                <Link href={`/category/${category.attributes.slug}`}>
                  <Text fontSize={"clamp(0.8rem, 1vw, 3rem)"}>
                    {category.attributes.name}
                  </Text>
                </Link>
              </ListItem>
            );
          })}
        </Flex>
      </List>
    </Flex>
  );
};

export default Nav;
