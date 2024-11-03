import { useSupabase } from '~/composables/use-supabase';

export default defineEventHandler(async (event) => {
	const supabase = await useSupabase(event)

	const { data, error } = await supabase
		.from('services')
		.select('*');

	if (error) {
		throw createError('Internal server error')
	}

	return data
})