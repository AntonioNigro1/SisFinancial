import { logout } from "@/modules/core/auth/login/services/authenticate-user-logout.service";

export async function GET() {
  await logout();
}
