/** @type {import('./$types').RequestHandler} */
export async function POST({ locals, request }) {
    const formData = await request.json();
    const { newMessage, channel, file } = formData;
    const { user, pb } = locals;

    const parseMentions = (text) => {
        const regexExp = new RegExp(/\B@\w+/g)
        return text.replace(regexExp, function(match) {
            return `<user>${match}</user> `;
        });
    }

    console.log(newMessage, channel, file);

    const data = {
        text: parseMentions(newMessage),
        from: user.id,
        to:channel,
        file:file
    };
    await pb.collection('messages').create(data);
    return new Response(JSON.stringify({ success:true }));
};