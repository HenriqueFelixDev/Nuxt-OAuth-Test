import type { Session, User } from 'next-auth';
import jwt from 'jsonwebtoken'

export function signSupabaseJwt(session: Session, user: User) {
	const { supabaseJwtSecret } = useRuntimeConfig()

	if (supabaseJwtSecret) {
	  const payload = {
		aud: "authenticated",
		exp: Math.floor(new Date(session.expires).getTime() / 1000),
		sub: user.id,
		email: user.email,
		role: "authenticated",
	  }

	  return jwt.sign(payload, supabaseJwtSecret)
	}

	return null
}