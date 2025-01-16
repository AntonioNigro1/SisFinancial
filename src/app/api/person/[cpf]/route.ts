import getPersonByCPF from "@/modules/core/wallet/transference/services/get-person-id.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { cpf: string } }) {
  const { cpf } = await params;

  if (!cpf) {
    return NextResponse.json({ error: "CPF é obrigatório" }, { status: 400 });
  }

  try {
    const account = await getPersonByCPF(cpf);
    return NextResponse.json({ account });
  } catch (error) {
    if (error instanceof Error) return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
