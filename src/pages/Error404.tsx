export default function Error404() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col md:flex-row min-h-screen justify-center items-center">
      <div className="w-full text-center md:text-left mb-8 md:mb-0 md:pr-4">
        <h1 className="text-4xl font-semibold mb-4 md:text-6xl lg:text-8xl">Erreur 404</h1>
        <p className="text-2xl lg:text-3xl pl-1">La page que vous recherchez n'existe pas.</p>
      </div>
      <div className="w-full">
        <img src="/error-404.jpeg" alt="Erreur 404" className="h-full w-full lg:w-auto" />
      </div>
    </div>
  );
}
