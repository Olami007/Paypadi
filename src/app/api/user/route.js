import { NextResponse } from "next/server";

export async function GET(request) {
  return new NextResponse(JSON.stringify("request came in"), { status: 200 });
}
