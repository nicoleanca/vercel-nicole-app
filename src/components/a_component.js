import React, { useEffect, useState} from "react";

const Project = () => {

  const [posts, setPosts] = useState([]);

  //API get request

  useEffect( () => {
    const fetchPost = async () => {
      try {
        const result = await fetch('url');
        const data = await result.json();
      } catch (error) {
        console.log(error);
      }
    }
  }, [])

  //filter

  const filteredPosts = posts.filter(element => element > 5);
  setPosts(filteredPosts);

  return (
    <div>
      Project
    </div>
  )
}

export default Project;