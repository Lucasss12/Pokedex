import Link from "next/link";
import jigglypuff from "../app/images/jigglypuff.png"
import Image from "next/image";

export default function Custom404() {
  return (
    <section className="flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl">
            <p>404</p>
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">Oups ! Cette page du <span className="text-red-400">pokedex</span> n&apos;existe pas</p>
            <Link href="/" className="font-semibold text-2xl flex items-center">Retour à la page d&apos;acceuil
              <Image className="mx-4" src={jigglypuff} alt="jigglypuff" width={50} height={50} />
            </Link>
        </div>
      </div>
    </section>
    )
}