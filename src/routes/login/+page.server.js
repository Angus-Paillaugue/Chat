import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals, cookies }) => {
		const { username, password } = Object.fromEntries(await request.formData());
		
		try {
			const res = await locals.pb.collection('users').authWithPassword(username, password);
			cookies.set("token", res.token, { path:"/", sameSite:"strict" });
			console.log(cookies.get("token"));
			throw redirect(303, '/dashboard');
		} catch (_) {
			console.log(_);
			return { err:true }
		}

	}
};