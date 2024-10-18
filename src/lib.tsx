import { SessionOptions } from "iron-session";

export interface SessionData {
    userId?:string;
    username?:string;
    isLoggedIn:boolean;
    

}
export const defaultSession: SessionData = {
    isLoggedIn:false,
    
}
export const sessionOptions: SessionOptions = {
    password: process.env.SECRET_KEY!, 
    cookieName: "tableLuxe-session",
    cookieOptions: {
        httpOnly:true,
        secure: false,
    }
}