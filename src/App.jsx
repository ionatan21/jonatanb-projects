import Projects from "./components/projects";
import AnimatedHeadline from "./components/AnimatedHeadline";
import "./App.css";

function App() {
  return (
    <>
      <AnimatedHeadline />
      <Projects />
      <div class="text-center mb-4 text-xs text-gray-500">
        2025 <a href="https://portfolio-jonatan-barrios.vercel.app/" className="text-black">Jonatan Barrios</a> 
      </div>
    </>
  );
}

export default App;
