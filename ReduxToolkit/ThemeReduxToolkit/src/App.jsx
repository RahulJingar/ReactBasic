import { useSelector, useDispatch } from "react-redux"; 
import { toggleTheme } from "./components/ThemeSlice";

export default function App() {
  // Redux store se dark state access kar rahe hain
  const dark = useSelector((s) => s.theme.dark);

  // Redux store me action bhejne ke liye dispatch function
  const dispatch = useDispatch();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-500 ${
        // agar dark true hai to dark classes, warna light classes
        dark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Dark ya Light ke hisaab se title text dikhayega */}
      <h1 className="text-3xl mb-5">
        {dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </h1>

      {/* Button jo toggleTheme action dispatch karega */}
      <button
        onClick={() => dispatch(toggleTheme())} // action fire karega
        className="px-6 py-2 bg-blue-400 hover:bg-blue-800 cursor-pointer rounded-sm text-white font-semibold"
      >
        Toggle Theme
      </button>
    </div>
  );
}
