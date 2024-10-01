// store.ts
import { atom } from 'nanostores'

export const userId = atom<string | null>(null)
export const isLoggedIn = atom<boolean>(false)

export const email = atom<string| null>(null)
export const id = atom<string| null>(null)
export const user_name = atom<string| null>(null)


userId.set('123')
isLoggedIn.set(true)
