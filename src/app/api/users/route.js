import { NextResponse } from "next/server";
import connect from "../../../lib/db";
import Post from "../../../../models/User";

export const GET = async (request) => {
    try {
        await connect();
        const posts = await Post.find();
        return new NextResponse(JSON.stringify(posts),{status: 200});
    } catch(error) {
        return new NextResponse("Error in fetching posts" + error, {status: 500});
    }
}