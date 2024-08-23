import Link from 'next/link';
/* import { useAuth } from '@/hooks/useAuth'; */

const Header = () => {
  /* const { user, logout } = useAuth(); */

  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-secondary">
          Et Cetera...
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-secondary transition duration-300">Accueil</Link></li>
            {/* <li><Link href="/produits" className="hover:text-secondary transition duration-300">Produits</Link></li>
            <li><Link href="/services" className="hover:text-secondary transition duration-300">Services</Link></li>
            <li><Link href="/contact" className="hover:text-secondary transition duration-300">Contact</Link></li>
            {user ? (
              <>
                <li><Link href="/admin" className="hover:text-secondary transition duration-300">Admin</Link></li>
                <li><button onClick={logout} className="hover:text-secondary transition duration-300">Déconnexion</button></li>
              </>
            ) : (
              <li><Link href="/login" className="hover:text-secondary transition duration-300">Connexion</Link></li>
            )} */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;