import { NextRequest, NextResponse } from "next/server";
import { parse } from "./utils/parse";

export async function AppMiddleware(req: NextRequest) {
  // Dashboard / App functionality is disabled. Rewrite app requests to render the main landing page directly.
  const { path } = parse(req);
  return NextResponse.rewrite(new URL(`/[domain]${path}`, req.url));
}
