const WhatsApp = () => {
  const nomorWa = "+6282326065654";
  const pesan = "Saya ingin Order product anda, Apakah Ready?";
  const linkWa = `http://wa.me/${nomorWa}?text=${pesan}`;
  return (
    <button
      onClick={() => window.open(linkWa, "_blank")}
      className="text-green-400 text-xl"
    >
      Hubungi Kami
    </button>
  );
};
export default WhatsApp;
