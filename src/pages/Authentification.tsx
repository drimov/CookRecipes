import Form from "../components/connexion-form"

type AuthentificationProps = {
  type: "login" | "signup"
}

const Authentification = ({ type }: AuthentificationProps) => {
  console.log(type)
  return (
    <div>
      <h1>Authentification Page: {type}</h1>
      <Form />
    </div>
  )
}

export default Authentification
