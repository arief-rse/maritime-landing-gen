
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Anchor } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-maritime-50 to-white">
      <div className="text-center max-w-md px-4">
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-maritime-100 flex items-center justify-center">
            <Anchor className="h-8 w-8 text-maritime-800" />
          </div>
        </div>
        <h1 className="text-6xl font-bold text-maritime-800 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-8">
          Oops! The page you're looking for seems to have drifted away.
        </p>
        <Button className="bg-maritime-800 hover:bg-maritime-700" asChild>
          <a href="/">Return to Shore (Home)</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
