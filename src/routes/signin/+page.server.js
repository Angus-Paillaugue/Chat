import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	if(locals.user) throw redirect(303, "/dashboard")
}

export const actions = {
	default: async ({ request, locals, cookies }) => {
		const { username, password, email } = Object.fromEntries(await request.formData());

		try {
            await pb.collection("users").create({
                username,
                email,
                password,
                passwordConfirm: password,
            });
            await pb.collection("users").requestVerification(email);
			return { err:false, signedUp:true }
        } catch (_) {
            return { err:true }
        }

	}
};