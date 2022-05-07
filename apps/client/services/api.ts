import wretch from 'wretch';

export const api = wretch().url(process.env.NEXT_PUBLIC_SERVER_URL as string);
