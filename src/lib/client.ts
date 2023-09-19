import { z } from "zod"

type ClientConfig<T> = {
  data?: unknown
  zodSchema?: z.ZodSchema<T>
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS"
  headers?: HeadersInit
  customConfig?: RequestInit
  signal?: AbortSignal
}

export async function client<T>(
  url: string,
  {
    data,
    zodSchema,
    method = "GET",
    headers: custonHeaders,
    customConfig,
    signal,
  }: ClientConfig<T> = {}
): Promise<T> {
  const config: RequestInit = {
    method: method ?? (data ? "POST" : "GET"),
    body: data ? JSON.stringify(data) : null,
    headers: {
      "Access-Control-Request-Headers": "content-type",
      Accept: "application/json, */*",
      ...custonHeaders,
    },
    signal,
    ...customConfig,
  }

  return fetch(url, config).then(async (response) => {
    if (response.status === 401) {
      return Promise.reject(new Error("Your are not authenticated"))
    }

    let result: null | T
    try {
      result = (await response.json()) as T
    } catch (error: unknown) {
      return Promise.reject(error)
    }

    if (response.ok) {
      return zodSchema && result ? zodSchema.parse(result) : result
    } else {
      return Promise.reject(result)
    }
  })
}
