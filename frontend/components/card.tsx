import React from "react";
import Link from "next/link";
import NextImage from "./image";
import { Text } from "@chakra-ui/react";

const Card = ({ article }: any) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a>
        <div>
          <div>
            <NextImage image={article.attributes.image} />
          </div>
          <div>
            <Text fontSize="100">
              {article.attributes.category.data.attributes.name}
            </Text>
            <Text fontSize="100">{article.attributes.title}</Text>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
