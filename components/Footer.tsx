import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Et Cetera</h3>
            <p>Votre tabac-presse de confiance à Droué</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-secondary transition duration-300">Accueil</Link></li>
              <li><Link href="/produits" className="hover:text-secondary transition duration-300">Produits</Link></li>
              <li><Link href="/services" className="hover:text-secondary transition duration-300">Services</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>1 Place de l'Hôtel de Ville, 41270 Droué</p>
            <p>Tél: 02.54.80.XX.XX</p>
            <p>Email: contact@etcetera-droue.fr</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Et Cetera Droué. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;