export class HeaderNormalizer {
  /**
   * Normalizes header values to ensure they are strings or arrays of strings.
   * @param headers - The original headers with various types of values.
   * @returns Normalized headers where all values are strings or string arrays.
   */
  static normalize(
    headers: Record<
      string,
      string | number | boolean | string[] | number[] | boolean[]
    >
  ): Record<string, string | string[]> {
    return Object.entries(headers).reduce<Record<string, string | string[]>>(
      (normalizedHeaders, [key, value]) => ({
        ...normalizedHeaders,
        [key]: this.normalizeValue(value),
      }),
      {}
    );
  }

  /**
   * Converts a single value to a string or an array of strings.
   * @param value - The value to normalize.
   * @returns The normalized value.
   */
  private static normalizeValue(
    value: string | number | boolean | string[] | number[] | boolean[]
  ): string | string[] {
    return Array.isArray(value) ? value.map(String) : String(value);
  }
}
