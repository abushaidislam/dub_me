import { NextRequest, NextResponse } from "next/server";

export async function AppMiddleware(req: NextRequest) {
  // Dashboard / App functionality is disabled. Rewrite app requests to render the main landing page directly.
  return NextResponse.rewrite(new URL("/[domain]", req.url));
}
