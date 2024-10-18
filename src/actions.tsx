'use server'
import {sessionOptions, SessionData, defaultSession } from "@/lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

let username = "sam"

export const getSession = async ()=> {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    if(!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn;
    }
    return session;
}

export const login = async (prevState:{error:undefined | string}, formData: FormData) => {
    const session = await getSession()
    const formUsername = formData.get("username") as string
    const formPassword = formData.get("password") as string

    //const user = await db.getUser({username,password});

    if (formUsername !== username) {
        return { error: "* Wrong credentials, try again!"}
    }
    session.userId="1"
    session.username = formUsername;
    session.isLoggedIn = true;

    await session.save();
    redirect("/");
};
export const logout = async () => {
    const session = await getSession();
    session.destroy();
    redirect("/");
};