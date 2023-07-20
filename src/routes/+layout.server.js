export async function load({ locals }) {
    const { pb, user } = locals;

    if(user){
        const parseMentions = (text) => {
            const regexExp = new RegExp(/(?=(<user>))(\w|\W)*(?<=<\/user>)/, "gm");
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
        let recentMessages = structuredClone(resultList).map(message => {
            return { text:parseMentions(message.text), id:message.id, user:message.expand.from.id == user.id ? message.expand.to : message.expand.from, seen:message.seen }
        });
        recentMessages = recentMessages.filter(message => {
            if(ids.includes(message.user.id)){
                return false;
            }else{
                ids.push(message.user.id);
                return true;
            }
        });
        return { user, recentMessages };
    }else return { user }

};