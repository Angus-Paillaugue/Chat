import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	if(locals.user) throw redirect(303, "/dashboard")
}

export const actions = {
	default: async ({ request, locals, cookies }) => {
		const { username, password } = Object.fromEntries(await request.formData());
		
		try {
			const res = await locals.pb.collection('users').authWithPassword(username, password);
			throw redirect(303, '/dashboard');
		} catch (_) {
			console.log(_);
			return { err:true }
		}

	}
};