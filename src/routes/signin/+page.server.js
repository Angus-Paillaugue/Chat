import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	if(locals.user) throw redirect(303, "/dashboard")
}

export const actions = {
	default: async ({ request, locals, cookies }) => {
		const { username, password, email } = Object.fromEntries(await request.formData());
        const { pb } = locals;

        if(username.includes(" ")) return { err:true, msg: "Username can not contain spaces." }

		try {
            const formData = new FormData();
            formData.append("username", username);
            formData.append("email", email);
            formData.append("password", password);
            formData.append("passwordConfirm", password);
            formData.append("bio", "No bio for now");
            formData.append("admin", false);
            let response = await fetch(`https://api.dicebear.com/6.x/avataaars-neutral/jpg?seed=${username}`);
            let blob = await response.blob();
            formData.append("avatar", new File([blob], `${username}-banner.jpeg`, {type: blob.type,}));
            response = await fetch(`https://yt3.googleusercontent.com/3pC5KMD_k1IgxIWZO1t2aHgDMMwdgp876QUU_g7SQq_3dFXE27PIAO55xBvJk-hwSc750yJ60Yg=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj`);
            blob = await response.blob();
            formData.append("banner", new File([blob], `${username}-banner.jpeg`, {type: blob.type,}));

            await pb.collection("users").create(formData);
            await pb.collection('users').authWithPassword(username, password);
            throw redirect(303, "dashboard");
        } catch (_) {
            return { err:true, msg:"Username or e-mail already taken." }
        }
	}
};