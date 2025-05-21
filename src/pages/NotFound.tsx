
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20">
      <h1 className="text-6xl md:text-8xl font-serif mb-6">404</h1>
      <p className="text-xl md:text-2xl mb-8 text-center">
        The page you are looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-8 py-4 border border-white hover:bg-white hover:text-black transition-all duration-300"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
