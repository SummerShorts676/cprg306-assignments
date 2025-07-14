"use client"

import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context"

export default function ProfilePage() {

    const { user } = useUserAuth();

    return (
        <main className="flex flex-col rounded-4xl border-2 p-5 border-blue-800 bg-blue-400 m-auto mt-20 w-fit">
            {
                user ? (
                    <main className="text-white text-2xl p-10 w-fit align-middle justify-center text-center">
                        <img src={user.photoURL} className="m-auto mb-10 border-4 border-blue-800 rounded-2xl"/>
                        <div className="bg-blue-800 p-5 border-2 border-blue-900 rounded-2xl mb-5">
                            <h1 className="text-4xl mb-4 text-center">{user.displayName}</h1>
                        
                            <p>Email: {user.email}</p>
                            <p>Last time you have signed in: {user.metadata.lastSignInTime}</p>
                        </div>
                        <Link 
                            href="/week-9/shopping-list/"
                            type="button" 
                            className="text-2xl bg-blue-800 text-white p-2 rounded mt-4 border-2 border-blue-900 hover:bg-blue-400 hover:border-2 hover:border-blue-200 focus:bg-blue-500"
                        >Return to Shopping List</Link>
                    </main>
                ) : (
                    <section className="flex flex-col text-2xl">
                        <div className="w-fit h-fit p-5 border-2 border-blue-900 rounded-2xl bg-blue-800">
                            <header>
                                <h1 className="text-white text-4xl">This is a Protected Page</h1>
                            </header>
                            <p>Your must be logged in to view this page</p>
                        </div>
                        <Link 
                            href="/week-9/"
                            type="button" 
                            className="text-2xl w-fit bg-blue-600 text-white rounded px-2 mt-4 border-2 border-blue-600 hover:bg-blue-400 hover:border-2 hover:border-blue-200 focus:bg-blue-500"
                        >Click her to return to the sign in page</Link>
                    </section>
                )
            }
        </main>
    )
}