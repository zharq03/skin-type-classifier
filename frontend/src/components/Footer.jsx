function Footer() {
  return (
    <footer className="bg-gradient-to-b from-teal-300 to-teal-500 text-black p-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">Layanan Pengguna</h3>
          <ul>
            <li className="text-sm">• cek jenis kulit</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Hubungi Kami</h3>
          <p className="text-sm">
            Email: azhar.rizqullah234@gmail.com <br />
            WhatsApp: +62 123 456 7890 <br />
            Alamat: Jl. Sehat Kulit No. 123, Yogyakarta, Indonesia
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Ikuti Kami :</h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <img
                src="/images/Fr.png"
                alt="Instagram"
                className="w-5 h-5 mr-2"
              />
              <span className="text-sm">@NamaAplikasi</span>
            </div>
            <div className="flex items-center">
              <img
                src="/images/Fr.png"
                alt="TikTok"
                className="w-5 h-5 mr-2"
              />
              <span className="text-sm">@NamaAplikasi</span>
            </div>
            <div className="flex items-center">
              <img
                src="/images/Fr.png"
                alt="WhatsApp"
                className="w-5 h-5 mr-2"
              />
              <span className="text-sm">@NamaAplikasi</span>
            </div>
            <div className="flex items-center">
              <img
                src="/images/Fr.png"
                alt="Twitter"
                className="w-5 h-5 mr-2"
              />
              <span className="text-sm">@Nama Aplikasi</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">Hak Cipta</p>
        <p className="text-sm">© 2025 Nama Aplikasi. Semua hak dilindungi.</p>
      </div>
    </footer>
  );
}

export default Footer;