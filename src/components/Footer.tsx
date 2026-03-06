const Footer = () => {
  return (
    <footer className="bg-foreground text-background/70 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-lg text-background">
          Alexandra <span className="italic">Lang</span>
        </p>
        <p className="text-sm font-body">
          © {new Date().getFullYear()} Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
