import { redirect } from '@sveltejs/kit';

export const load = async({ locals, params }) => {
    const { channel } = params;
    const { user, pb } = locals;

    if (!user) throw redirect(303, '/login');
    if(channel == user.id) throw redirect(303, '/dashboard');

    const resultList = await pb.collection('messages').getFullList({
        sort: 'created',
        filter:`from.id="${channel}" || to.id="${user.id}" || from.id="${user.id}" || to.id="${channel}"`,
        expand: 'from,to',
    });
    let messages = structuredClone(resultList);

    let chattingWith = structuredClone(await pb.collection("users").getFirstListItem(`id="${channel}"`));

    return { messages, chattingWith, pb:structuredClone(pb) };
};