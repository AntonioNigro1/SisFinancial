import { CustomAxiosError, Details } from "../types/customAxiosError";

export function isCustomAxiosError(error: unknown): error is CustomAxiosError {
  return typeof error === "object" && error !== null && "status" in error && "message" in error && "code" in error && "details" in error;
}

export function isCustomSimpleError(error: unknown): error is Details {
  return typeof error === "object" && error !== null && "error" in error;
}
