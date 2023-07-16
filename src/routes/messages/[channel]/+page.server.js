import { redirect } from '@sveltejs/kit';

export const load = ({ locals, params }) => {
    const {channel } = params;
    const { user } = locals;

    if (!user) throw redirect(303, '/login');
    if(channel == user.id) throw redirect(303, '/dashboard');
};