/** @type {import('./$types').RequestHandler} */
export async function POST({ locals, request }) {
    const formData = await request.json();
    const { newMessage, channel } = formData;
    const { user, pb } = locals;

        const data = {
            text: newMessage,
            from: user.id,
            to:channel
        };
        await pb.collection('messages').create(data);
    return new Response(JSON.stringify({ success:true }));
};