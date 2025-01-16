import { IPaginatedHistory } from "@/modules/core/wallet/history/domain/types/getHistory";
import getHistory from "@/modules/core/wallet/history/services/get-history.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
  const { userId } = await params;
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page");
  const pageSize = searchParams.get("pageSize");

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    const paginatedHistory: IPaginatedHistory = await getHistory(userId, Number(page), Number(pageSize));
    return NextResponse.json({ userId, paginatedHistory });
  } catch (error) {
    if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
