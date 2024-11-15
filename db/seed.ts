import { getCollection } from 'astro:content';
import { Clients, db, Post } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Clients).values([
    { name: 'Kasim', age: 35, isActive: true },
    { name: 'Fernando', age: 25, isActive: true },
    { name: 'Carlos', age: 37, isActive: true },
    { name: 'Melissa', age: 25, isActive: false },
    { name: 'Emin', age: 15, isActive: true },
  ]);
  const posts = await getCollection('blog');
  await db.insert(Post).values(
    posts.map((post: { id: any; data: { title: any; }; }) => ({ 
    id:post.id,
    title: post.data.title,
    likes: Math.round(Math.random() * 100), 
  }))
);
  console.log('Seed executed');
}

