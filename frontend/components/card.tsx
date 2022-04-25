import React from "react";
import Link from "next/link";
import NextImage from "./image";
import { Text } from "@chakra-ui/react";

const Card = ({ article }: any) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a>
        <NextImage image={article.attributes.image} />
        <Text fontSize="200">
          {article.attributes.category.data.attributes.name}
        </Text>
        <Text fontSize="200">{article.attributes.title}</Text>
      </a>
    </Link>
  );
};

export default Card;
