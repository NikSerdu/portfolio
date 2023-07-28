import { NextRequest, NextResponse } from "next/server";
import { worksData } from "../works";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const id = req.url.split("works/")[1];
    const work = worksData[+id];
    return NextResponse.json(work);
  } catch (error) {
    return NextResponse.json("No such work");
  }
}
