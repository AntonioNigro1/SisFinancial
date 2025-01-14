export function formatCPF(cpf: string): string {
  cpf = cpf.replace(/\D/g, "");

  if (cpf.length <= 3) {
    return cpf;
  } else if (cpf.length <= 6) {
    return cpf.replace(/(\d{3})(\d{1,3})/, "$1.$2");
  } else if (cpf.length <= 9) {
    return cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
  } else {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
  }
}

export function formatCNPJ(cnpj: string): string {
  cnpj = cnpj.replace(/\D/g, "");

  if (cnpj.length <= 2) {
    return cnpj;
  } else if (cnpj.length <= 5) {
    return cnpj.replace(/(\d{2})(\d{1,3})/, "$1.$2");
  } else if (cnpj.length <= 8) {
    return cnpj.replace(/(\d{2})(\d{3})(\d{1,3})/, "$1.$2.$3");
  } else if (cnpj.length <= 12) {
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{1,4})/, "$1.$2.$3/$4");
  } else {
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})/, "$1.$2.$3/$4-$5");
  }
}
