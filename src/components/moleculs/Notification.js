const Notification = () => {
  return (
    <div className="px-4 lg:px-0 flex flex-col items-center w-full">
      <h2 className="font-bold mb-2 text-beige text-2xl lg:text-4xl">REGISTRACE SE SPUSTÍ <span className="text-3xl lg:text-5xl text-orange">5. ČERVENCE</span></h2>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeJa9s0eo8eBFntavLecKhKv2laoQ9WS5nGpviRlHgSFAsJ7Q/viewform" target="_blank" rel="nopener noreferrer" className="text-beige font-bold text-2xl lg:text-4xl px-4 py-3 max-w-md block bg-yellow_orange my-8">
        CHCI UPOZORNĚNÍ
      </a>
      <p className="text-lg text-beige">Seznamovák má kapacitu pouze na <span className="text-orange">200</span> účastníků.<br />
      Nastav si upozornění a my Ti spuštění registrací připomeneme!</p>
    </div>
  )
}
export default Notification