import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
    const { pb, user } = locals;
    
    console.log(user);
    const resultList = await pb.collection('messages').getList(1, 50, {
        sort: '-created',
        filter:`to="${user.id}" || from="${user.id}"`,
        expand: 'to,from',
    });
    let ids = []
    messages = resultList.items;
    messages = messages.map(message => {
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

    users = await pb.collection("users").getFullList();
    users = users.filter(user => user.id !== user.id);
    return { users }
}

export const actions = {
    signOut: async({ locals }) => {
        locals.pb.authStore
        throw redirect(303, "/login")
    }
};