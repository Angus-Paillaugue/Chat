/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    const { pb } = locals;

    const numberOfUsers = (await pb.collection("users").getFullList(1,1)).length;
    
    return { numberOfUsers };
};