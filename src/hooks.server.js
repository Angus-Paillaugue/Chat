import PocketBase from 'pocketbase';

export const handle = async ({ event, resolve }) => {
    const { locals, request } = event;
	locals.pb = new PocketBase("http://127.0.0.1:8090");
	console.log(request.headers.get('token'));
	locals.pb.authStore.loadFromCookie(request.headers.get('token') || '');

	try {
		if (locals.pb.authStore.isValid) {
			await locals.pb.collection('users').authRefresh();
			locals.user = structuredClone(locals.pb.authStore.model);
		}
	} catch (_) {
		locals.pb.authStore.clear();
		locals.user = undefined;
	}

	const response = await resolve(event);
	response.headers.set('set-cookie', locals.pb.authStore.exportToCookie({ secure: true }));
	return response;
};