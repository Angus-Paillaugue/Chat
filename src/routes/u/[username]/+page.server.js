export async function load({ locals, params }) {
    const { username } = params;
    const { pb } = locals;

    let watchingUser = structuredClone(await pb.collection("users").getFirstListItem(`username="${username}"`));

    return { watchingUser }
};