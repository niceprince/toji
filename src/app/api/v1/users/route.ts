import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

connectDb();

// Create User
export async function POST(request: NextRequest) {
  const {
    firstname,
    lastname,
    username,
    email,
    password,
    about,
    profileURL,
    address,
    slug,
  } = await request.json();

  const newUser = new User({
    firstname,
    lastname,
    username,
    email,
    password,
    about,
    profileURL,
    address,
    slug,
  });

  try {
    const createdUser = await newUser.save();
    const response = NextResponse.json(createdUser, { status: 201 });
    return response;
  } catch (error) {
    console.log("Failed to create the user...");
    console.log(error);
    return NextResponse.json({
      message: "Failed to create the user...",
      status: false,
    });
  }
}

export async function GET() {
  let users = [];
  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to get users data",
      success: false,
    });
  }

  return NextResponse.json(users);
}
