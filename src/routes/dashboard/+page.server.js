import { Octokit } from "Octokit"

export async function load({ locals }) {
    const { pb, user } = locals;

    const parseMentions = (text) => {
        const regexExp = new RegExp(/(?=(<user>))(\w|\W)*(?<=<\/user>)/, "gm")
        return text.replace(regexExp, function(match) {
            return match.trim().slice(6, -7);
        });
    }

    const resultList = await pb.collection('messages').getFullList({
        sort: '-created',
        filter:`to="${user.id}" || from="${user.id}"`,
        expand: 'to,from',
    });

    let ids = [];
    let messages = structuredClone(resultList).map(message => {
        return { text:parseMentions(message.text), id:message.id, user:message.expand.from.id == user.id ? message.expand.to : message.expand.from }
    });
    messages = messages.filter(message => {
        if(ids.includes(message.user.id)){
            return false;
        }else{
            ids.push(message.user.id);
            return true;
        }
    });

    let users = structuredClone(await pb.collection("users").getFullList());
    users = users.filter(u => u.id !== user.id);

    if(user.admin){
        const octokit = new Octokit({auth: process.env.GITHUB_ACCESS_TOKEN});
              
        let commits = await octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner: 'Angus-Paillaugue',
            repo: 'Chat'
        });


        return { users, messages, commits:commits.data }
    }

    return { users, messages }
}