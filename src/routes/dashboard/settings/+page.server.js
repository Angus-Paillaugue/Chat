import { redirect } from "@sveltejs/kit";

export const actions = {
    save: async ({ request, locals }) => {
        try {
            const formData = Object.fromEntries(await request.formData());
            const { username, email, bio } = formData;
            const { user, pb } = locals;

            if(!email || !bio) return { err:true, msg:"Fields can not be empty!" }
    
            await pb.collection("users").update(user.id, { email:email, bio:bio })
            return { err:false };
        } catch (error) {
            console.log(error);
        }
    },
    deleteAccount: async ({ locals }) => {
        const { user, pb } = locals;

        await pb.collection("users").delete(user.id);
        
        throw redirect(303, "/sign-out");
    }
};