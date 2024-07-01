import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../Post';

export default function CategoryPage() {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);

   useEffect(() => {
    fetch(`/category/${category}`).then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);


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
