import { writable } from 'svelte/store';
import type { User } from '../types/User';

export const currentUser = writable<User>();
