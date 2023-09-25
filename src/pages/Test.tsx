// import { useEffect, useState } from "react"

// import { supabase } from "@/lib/supabase/client"
// import { z } from "zod"

// const countriesSchema = z.array(z.object({ name: z.string() }))

// type Countries = z.infer<typeof countriesSchema>
// function Test() {
//   const [countries, setCountries] = useState<Countries>([])

//   useEffect(() => {
//     void getCountries()
//   }, [])

//   async function getCountries() {
//     const { data } = await supabase.from("countries").select()
//     const response = countriesSchema.safeParse(data)
//     if (response.success) {
//       setCountries(response.data)
//     }
//   }

//   return (
//     <ul>
//       {countries.map((country) => (
//         <li key={country.name}>{country.name}</li>
//       ))}
//     </ul>
//   )
// }

// export default Test
