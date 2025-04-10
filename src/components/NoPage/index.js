import PageTitle from "../page-title";

export default function NoPage() {
  return (
    <>
       <PageTitle title="No page | Heaven estate"/>

      <main className="pt-16 bg-brown">
      <section className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-brown">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-brown sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-brown">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 ">
            <a
              href="/"
              className="rounded-md bg-brown px-3.5 py-2.5 text-sm font-semibold text-light shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray"
            >
              Go back home
            </a>
          </div>
        </div>
      </section>
      </main>
    </>
  )
}
