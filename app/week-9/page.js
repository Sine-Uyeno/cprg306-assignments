"use client"

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
 
export default function Page() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
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
                        <p>Welcome, {user.displayName} ({user.email})</p>
                    </div>
                    <div>
                        <button type="button" onClick={handleSignOut}>Sign Out</button>
                    </div>
                </section>
                <section>
                    <button type="button" onClick={handleSignIn}>Sign In with Github</button>
                </section>
            </div>
        ) : (
            <div>
                <section>
                    <div>
                        <p>Welcome, {user.displayName} ({user.email})</p>
                    </div>
                    <div>
                        <button type="button" onClick={handleSignOut}>Sign Out</button>
                    </div>
                </section>
                <section>
                    <button type="button" onClick={handleSignIn}>Sign In with Github</button>
                </section>
            </div>
        )
        }
       

    </main>

    )
}