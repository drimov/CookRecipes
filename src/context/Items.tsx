import { useQuery } from '@tanstack/react-query'
import customFetch from './utils.js'

//type Props = {}

const Items = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['task'],
    queryFn: () => customFetch.get('/'),
  })
  //Prise en compte du chargement de la page
  if (isLoading) {
    return <p style={{ marginTop: '1rem ' }}>Loading...</p>
  }

  if (isError) {
    return <p style={{ marginTop: '1rem ' }}>Il y'a un erreur...</p>
  }
  console.log(data)
  return <div>{'Test réussie'}</div>
}

export default Items
