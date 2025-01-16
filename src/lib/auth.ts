
import { auth } from '@/auth'
import { ExtendedUser } from '@/modules/shared/types/next-auth'
import { type Session } from 'next-auth'

export const currentSession = async () => {
  const session = await auth()

  return session
}

export const currentUser = async (): Promise<ExtendedUser | null> => {
  const session = await auth()

  return session?.user || null
}

export const updateUser = async (
  user: ExtendedUser
): Promise<Session | null> => {
  const session = await auth()

  if (!session) return null

  session.user = user

  return session
}
