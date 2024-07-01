import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategorySubheader from '../CategorySubheader';
import Post from '../Post';

export default function CategoryPage() {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts(category);
  }, [category]);

  const fetchPosts = async (category) => {
    try {
      const response = await fetch(`/category/${category}`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <>
      <CategorySubheader />
      <h1 className="category-heading">{category.replace('-', ' ')}</h1>
      <div className="category-posts">
        {posts.length > 0 ? (
          posts.map(post => (
            <Post key={post.id} {...post} />
          ))
        ) : (
          <p>No posts available for this category.</p>
        )}
      </div>
    </>
  );
}

