import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/70 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-lg text-background">
          Alexandra <span className="italic">Lang</span>
        </p>
        <div className="flex items-center gap-6 text-sm font-body">
          <Link to="/impressum" className="hover:text-background transition-colors">
            Impressum
          </Link>
          <span>© {new Date().getFullYear()} Alle Rechte vorbehalten.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
