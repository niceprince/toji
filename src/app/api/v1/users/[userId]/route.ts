import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/user";
import { UserParams } from "@/utils/types";
import { connectDb } from "@/helper/db";

connectDb();

export async function GET(
  request: NextRequest,
  { params }: { params: UserParams }
) {
  const { userId } = await params;
  try {
    const user = await User.findOne({ slug: userId }).lean();
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to get user",
      success: false,
    });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: UserParams }
) {
  const { userId } = await params;

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

  try {
    const userFind = await User.findOne({ slug: userId });
    userFind.firstname = firstname;
    userFind.lastname = lastname;
    userFind.username = username;
    userFind.email = email;
    userFind.password = password;
    userFind.about = about;
    userFind.profileURL = profileURL;
    userFind.address = address;
    userFind.slug = slug;

    const userUpdated = await userFind.save();
    const updatedResponse = NextResponse.json(userUpdated, { status: 200 });

    return updatedResponse;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to update user",
      success: false,
    });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: UserParams }
) {
  const { userId } = await params;

  try {
    console.log("userId");
    console.log(userId);
    const deletedUser = await User.deleteOne({
      slug: userId,
    });

    return NextResponse.json({
      message: "User deleted successfully!",
      deleted_user: deletedUser,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to delete user",
      success: false,
    });
  }
}
