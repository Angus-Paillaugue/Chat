import { redirect } from '@sveltejs/kit';
import { pb } from '$lib/poketbase';

export const handle = async ({ event, resolve }) => {
    const { locals, request, url } = event;
	locals.pb = pb;
	pb.authStore.loadFromCookie(request.headers.get('cookie') || '');

	try {
		if (pb.authStore.isValid) {
			await pb.collection('users').authRefresh();
			locals.user = structuredClone(pb.authStore.model);
		}
	} catch (_) {
		pb.authStore.clear();
		locals.user = undefined;
	}
	
	if(!locals.user && url.pathname.startsWith("/dashboard")){
		throw redirect(303, "/");
	}

	const response = await resolve(event);
	response.headers.set('set-cookie', pb.authStore.exportToCookie({ secure: true }));
	return response;
};