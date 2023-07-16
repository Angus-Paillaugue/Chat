import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
    const { pb, user } = locals;

    // Query last 50 messages
    const resultList = await pb.collection('messages').getFullList({
        sort: '-created',
        filter:`to="${user.id}" || from="${user.id}"`,
        expand: 'to,from',
    });

    let ids = [];
    let messages = structuredClone(resultList).map(message => {
        return { text:message.text, id:message.id, user:message.expand.from.id == user.id ? message.expand.to : message.expand.from }
    });
    messages = messages.filter(message => {
        if(ids.includes(message.user.id)){
            return false;
        }else{
            ids.push(message.user.id);
            return true;
        }
    });

    let users = await pb.collection("users").getFullList();
    users = users.filter(user => user.id !== user.id);

    return { users, messages }
}

export const actions = {
    signOut: async({ locals }) => {
        console.log("a");
        locals.pb.authStore.clear();
        throw redirect(303, "/login");
    }
};