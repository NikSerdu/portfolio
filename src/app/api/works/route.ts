import { NextResponse } from "next/server";
import { worksData } from "./works";

export const GET = async () => {
  return NextResponse.json(worksData);
};
