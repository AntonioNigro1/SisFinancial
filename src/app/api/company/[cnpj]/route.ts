import getCompanyByCNPJ from "@/modules/core/wallet/transference/services/get-company-id.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { cnpj: string } }) {
  const { cnpj } = await params;

  if (!cnpj) {
    return NextResponse.json({ error: "CNPJ é obrigatório" }, { status: 400 });
  }

  try {
    const account = await getCompanyByCNPJ(cnpj);
    return NextResponse.json({ account });
  } catch (error) {
    if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
