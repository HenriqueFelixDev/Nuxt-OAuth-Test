import GoogleAuthProvider from 'next-auth/providers/google'
import { SupabaseAdapter } from '@auth/supabase-adapter'
import { NuxtAuthHandler } from '#auth'
import { signSupabaseJwt } from '~/utils/supabase'

const config = useRuntimeConfig()

export default NuxtAuthHandler({
	secret: config.authSecret,
	pages: {
		signIn: '/login'
	},
	providers: [
		// @ts-ignore
		GoogleAuthProvider.default({
			clientId: config.googleClientId,
			clientSecret: config.googleClientSecret,
		}),
	],
	// @ts-ignore
	adapter: SupabaseAdapter({
		url: config.supabaseUrl,
		secret: config.supabaseSecret,
	}),
	callbacks: {
		async session({ session, user }) {
			const supabaseAccessToken = signSupabaseJwt(session, user)
			session.supabaseAccessToken = supabaseAccessToken || undefined
			
			return session
		},
	}
})