export class Decimal {
  private readonly value: number;

  constructor(value: string | number) {
    if (typeof value === "string") {
      value = Decimal.parse(value);
    }

    if (!Decimal.isValid(value)) {
      throw new Error("Valor decimal inválido");
    }

    this.value = value;
  }

  private static parse(value: string): number {
    const sanitizedValue = value.replace(",", ".");
    const parsedValue = parseFloat(sanitizedValue);

    if (isNaN(parsedValue)) {
      throw new Error(`Não foi possível converter "${value}" para decimal`);
    }

    return parsedValue;
  }

  private static isValid(value: number): boolean {
    return typeof value === "number" && !isNaN(value);
  }

  public toNumber(): number {
    return this.value;
  }

  public toString(): string {
    return this.value.toFixed(2);
  }

  public equals(other: Decimal): boolean {
    return this.value === other.toNumber();
  }
}
