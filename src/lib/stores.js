import { writable } from 'svelte/store';

export const pageMetaData = writable({ title:"", description:"", headerText:"" });