import Link from "next/link";
import pikachu from '../../images/pikachu.png'
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
        <div className='bg-red-400 flex justify-center py-6 items-center'>
            <Link href="/"><h1 className='text-4xl font-bold'>Pokedex</h1></Link>
            <Image src={pikachu} alt='Pikachu'></Image>
        </div>
    </nav>
  )
}
