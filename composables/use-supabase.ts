import { getServerSession } from '#auth'
import { createClient, type SupabaseClientOptions } from '@supabase/supabase-js'
import type { H3Event } from 'h3'

export async function useSupabase(event: H3Event) {
	const session = await getServerSession(event)
	const { supabaseUrl, supabaseSecret } = useRuntimeConfig()

	var options: SupabaseClientOptions<"public"> = {
		global: {
			headers: {
				Authorization: `Bearer ${session?.supabaseAccessToken}`
			}
		}
	}
	
	const supabase = createClient(supabaseUrl, supabaseSecret, options)
	return supabase
}