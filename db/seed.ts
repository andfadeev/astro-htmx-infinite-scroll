import { db, Post } from "astro:db";
import { faker } from "@faker-js/faker";

// https://astro.build/db/seed
export default async function seed() {
  const posts = [...Array(100)].map((_) => {
    return { title: faker.lorem.paragraph(1) };
  });
  await db.insert(Post).values(posts);
}
