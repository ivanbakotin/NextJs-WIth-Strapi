import React from "react";
import Link from "next/link";
import NextImage from "./image";

const Card = ({ article }: any) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a>
        <div>
          <div>
            <NextImage image={article.attributes.image} />
          </div>
          <div>
            <p>{article.attributes.category.data.attributes.name}</p>
            <p>{article.attributes.title}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
