"use client";
import Link from "next/link";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import { useEffect, useState } from "react";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const [blogPostList, setBlogPostList] = useState([]);

  function handleBlogChange(input){
    setBlogPostList(input)
  }


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
        <h1 className="text-4xl font-sans italic">Firebase Auth</h1>
      </header>
      {user ? (
        <div>
          <section>
            <div>
              <p className="m-5">Welcome, {user.displayName} ({user.email})</p>
            </div>
            <div>
              <Link href="/week-9/shopping-list" className="p-2 m-5 bg-amber-700 max-w-sm">Shopping List</Link>
            </div>
            <div>
              <button type="button" onClick={handleSignOut} className="p-2 m-5 bg-amber-700 max-w-sm">
                Sign Out
              </button>
            </div>
            </section>
        </div>
      ) : (
        <div>
          <section>
            <div>
              <p className="m-5">Welcome</p>
            </div>
          </section>
          <section>
            <button type="button" onClick={handleSignIn} className="p-2 m-5 bg-amber-700 max-w-sm">
              Sign In with Github
            </button>
          </section>
        </div>
      )}
    </main>
  );
}
