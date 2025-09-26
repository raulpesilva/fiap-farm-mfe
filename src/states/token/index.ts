import { createGetReState, createReStateDispatch } from '@raulpesilva/re-state';

export const TOKEN_KEY = 'token';
export const initialTokenValue = null as string | null;

export const dispatchToken = createReStateDispatch<string | null>(TOKEN_KEY);
export const getToken = createGetReState<string | null>(TOKEN_KEY);
