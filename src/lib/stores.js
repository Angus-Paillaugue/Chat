import { writable } from 'svelte/store';
import { persisted } from 'svelte-local-storage-store'

export const pageMetaData = writable({ title:"", description:"", headerText:"" });

export const preferences = persisted('preferences', {
  theme: 'dark',
})
