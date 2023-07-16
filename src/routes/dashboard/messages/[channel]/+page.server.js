import { redirect } from '@sveltejs/kit';

export const load = async({ locals, params }) => {
    const { channel } = params;
    const { user, pb } = locals;

    const parseMentions = (text) => {
        const regexExp = new RegExp(/(?=(<user>))(\w|\W)*(?<=<\/user>)/, "gm")
        return text.replace(regexExp, function(match) {
            return `<a href="/u/${match.trim().slice(7, -7)}" class="link">${match}</a> `;
        });
    }

    if (!user) throw redirect(303, '/login');
    if(channel == user.id) throw redirect(303, '/dashboard');

    const resultList = await pb.collection('messages').getFullList({
        sort: 'created',
        filter:`from.id="${channel}" || to.id="${user.id}" || from.id="${user.id}" || to.id="${channel}"`,
        expand: 'from,to',
    });
    let messages = structuredClone(resultList.map(message => {message.text = parseMentions(message.text);return message}));

    let chattingWith = structuredClone(await pb.collection("users").getFirstListItem(`id="${channel}"`));

    let users = structuredClone(await pb.collection("users").getFullList());

    return { messages, chattingWith, pb:structuredClone(pb), users };
};