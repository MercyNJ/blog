import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../Post';

export default function CategoryPage() {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/category/${category}`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [category]);

  return (
    <main>
      <h1 className="category-heading">{category.replace('-', ' ')}</h1>
      <div className="category-posts">
        {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
}
