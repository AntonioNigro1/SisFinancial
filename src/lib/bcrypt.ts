import bcrypt from "bcryptjs";

/**
 * Hashes a password using bcrypt with a predefined number of salt rounds.
 * @param password - The plain text password to hash.
 * @returns A promise that resolves to the hashed password.
 * @throws An error if hashing fails.
 */
export async function saltAndHashPassword(password: string): Promise<string> {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw new Error(`Error hashing password: ${(error as Error).message}`);
  }
}

/**
 * Compares a plain text password to a hashed password.
 * @param password - The plain text password to compare.
 * @param hash - The hashed password to compare.
 * @returns A promise that resolves to a boolean indicating whether the passwords match.
 * @throws An error if comparison fails.
 */
export async function comparePassword(
  password: string,
  hash: string
): Promise<boolean> {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    throw new Error(`Error comparing passwords: ${(error as Error).message}`);
  }
}
