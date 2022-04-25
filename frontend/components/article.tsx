import React from "react";
import Card from "./card";
import { SimpleGrid, GridItem, Center } from "@chakra-ui/react";

const Articles = ({ articles }: any) => {
  return (
    <SimpleGrid columns={2} spacing={10}>
      {articles.map((article: any) => {
        return (
          <Center key={article.id}>
            <GridItem width={"min(500px, 60%)"} m={10}>
              <Card article={article} />
            </GridItem>
          </Center>
        );
      })}
    </SimpleGrid>
  );
};

export default Articles;
