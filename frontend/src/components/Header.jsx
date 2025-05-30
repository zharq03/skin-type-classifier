import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-b from-teal-600 to-teal-200 text-black p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Skin Type Classifier</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Beranda</Link>
          <Link to="/cek-wajah" className="hover:underline">Cek Wajah</Link>
          <Link to="/tentang-kami" className="hover:underline">Tentang Kami</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;