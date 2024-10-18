import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
   <div className="relative isolate px-6 pt-14 lg:px-8">
  <div
    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 transition duration-500 ease-in-out"
    aria-hidden="true"
  >
    <div
      className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-pulse"
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      }}
    />
  </div>

  <div className="mx-auto max-w-2xl py-12 transition-transform duration-500 ease-in-out transform hover:scale-105">
    <div className="text-center">
      <Image
        className="inline-block transition-transform duration-300 hover:rotate-6"
        src="/icon.png"
        width="200"
        height="200"
        alt="dev finder logo"
      />
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
        Find other awesome devs to pair with online
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:text-indigo-600 dark:hover:text-indigo-300">
        This platform facilitates seamless screen sharing and collaboration with skilled developers, empowering you to work together effectively.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/browse"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Get started
        </Link>
      </div>
    </div>
  </div>

  <div
    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] transition duration-500 ease-in-out"
    aria-hidden="true"
  >
    <div
      className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] animate-pulse"
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      }}
    />
  </div>
  <footer>
    <Footer/>
  </footer>
</div>
  );
}
