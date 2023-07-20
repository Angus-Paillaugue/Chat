import { Octokit } from "Octokit"

export async function load({ locals }) {
    const { pb, user } = locals;

    let users = structuredClone(await pb.collection("users").getFullList());
    users = users.filter(u => u.id !== user.id);

    // if(user.admin){
    //     const octokit = new Octokit({auth: process.env.GITHUB_ACCESS_TOKEN});

    //     let commits = await octokit.request('GET /repos/{owner}/{repo}/commits', {
    //         owner: 'Angus-Paillaugue',
    //         repo: 'Chat'
    //     });

    //     return { users, messages, commits:commits.data }
    // }

    return { users }
}