type AuthentificationProps = {
  type: "login" | "signup"
}

const Authentification = ({ type }: AuthentificationProps) => {
  console.log(type)
  return (
    <div>
      <h1>Authentification Page: {type}</h1>
    </div>
  )
}

export default Authentification
