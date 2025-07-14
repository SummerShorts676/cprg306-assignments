"use client"

import Link from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context"
import { redirect } from "next/dist/server/api-utils";

export default function WeekNinePage() {

    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    // Sign in to Firebase with GitHub authentication
    async function handleSignIn() {
        try {
            await gitHubSignIn();
            location.href = "/week-9/shopping-list/";
        } catch {
            console.log(error);
        }
    }

    console.dir(user);

    return (
        <main>
            <div className="flex flex-col rounded-4xl border-2 p-5 border-blue-900 bg-blue-800 m-auto mt-20 w-fit text-center">
                <section>
                    <h1 className="text-white text-4xl">Firebase Authentication</h1>
                    <div>
                        <button 
                            onClick={handleSignIn}
                            type="button" 
                            className="text-lg bg-blue-600 text-white rounded px-2 mt-4 border-2 border-blue-400 hover:bg-blue-400 hover:border-2 hover:border-blue-200 focus:bg-blue-500"
                        >Sign in With GitHub</button>

                        {/* <button 
                            onClick={handleSignIn}
                            type="button" 
                            className="text-lg bg-blue-600 text-white rounded px-2 mt-4 border-2 border-blue-600 hover:bg-blue-400 hover:border-2 hover:border-blue-200 focus:bg-blue-500"
                        >Sign in With Google</button> */}
                    </div>
                </section>
            </div>
        </main>
    )
}