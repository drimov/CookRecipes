import { authLinks, links, profileLinks } from "@/commons/constants"

type GenericLinks<T extends string> = `/${T}`
export type Links =
  | GenericLinks<(typeof links)[number]>
  | GenericLinks<(typeof authLinks)[number]>
  | "/"
export type LinksPath = (typeof links)[number]
export type AuthLinks = GenericLinks<(typeof authLinks)[number]>
export type AuthPath = (typeof authLinks)[number]
export type ProfileLinks = GenericLinks<(typeof profileLinks)[number]>
export type AppLinks = Links | ProfileLinks
