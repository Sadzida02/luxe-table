'use server'
import {sessionOptions, SessionData, defaultSession } from "@/lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { authenticateUser } from "./lib/db";


export const getSession = async ()=> {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    if(!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn;
    }
    return session;
}

export const login = async (prevState:{error:undefined | string}, formData: FormData) => {
    const session = await getSession()
    const formUsername = formData.get("username") as string;
    const formPassword = formData.get("password") as string;

    const user = await authenticateUser(formUsername, formPassword);
    //const user = await db.getUser({username,password});

    if (!user) {
        return { error: "* Wrong credentials, try again!"}
    }
    session.userId = user._id.toString();
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