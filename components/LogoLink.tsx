import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/deform.svg'



function LogoLink() {
    return (
        <div className="mb-4 text-center sm:mb-0">
            <Link href="/">
                <Image src={logo} alt="Logo" className="h-8 w-auto" />
            </Link>
        </div>
    );
}


export default LogoLink