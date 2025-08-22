import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-semibold text-lg">
        AI Attendance
      </Link>
      {user ? (
        <div className="flex items-center gap-4">
          <span>{user.displayName || user.email}</span>
          <button
            onClick={() => auth.signOut()}
            className="bg-white text-blue-600 px-3 py-1 rounded-lg font-medium"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}
