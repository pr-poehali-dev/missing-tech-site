
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="container flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-tech-primary flex items-center justify-center text-white font-bold">
            К
          </div>
          <span className="text-xl font-bold">Кремков Кирилл</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link to="/">Главная</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/about-kirill">Обо мне</Link>
          </Button>
          <Button variant="default" asChild>
            <Link to="/contact">Связаться</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
