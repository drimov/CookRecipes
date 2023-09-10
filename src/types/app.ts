export const links = ["produit", "profil", "search", "signup", "login"] as const

type GenericLinks<T extends string> = `/${T}`
export type Links = GenericLinks<(typeof links)[number]> | "/"
