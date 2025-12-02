"use client";
import Link from "next/link";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import { useEffect, useState } from "react";
import { dbGetAllBlogPostsByUserID } from "./_services/blog-service";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const [blogPostList, setBlogPostList] = useState([]);

  function handleBlogChange(input){
    setBlogPostList(input)
  }

  useEffect(() => {
    if (user) dbGetAllBlogPostsByUserID(user.uid, handleBlogChange);
  }, [user]);
  console.log(blogPostList);

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  // Display some of the user's information
  return (
    <main>
      <header>
        <h1>Firebase Auth</h1>
      </header>
      {user ? (
        <div>
          <section>
            <div>
              <p>Welcome, ({user.email})</p>
            </div>
            <div>
              <Link href="/week-10/add-blog-post">Blog</Link>
            </div>
            <div>
              <button type="button" onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
            <div>
              <h2>List of {user.displayName} Blog Posts</h2>
              <ul>
                {blogPostList.map((post) => (
                  <li key={post.id}>
                    <Link href={`/week-10/${post.id}`}>{post.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      ) : (
        <div>
          <section>
            <div>
              <p>Welcome</p>
            </div>
          </section>
          <section>
            <button type="button" onClick={handleSignIn}>
              Sign In with Github
            </button>
          </section>
        </div>
      )}
    </main>
  );
}
