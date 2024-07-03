import HeroSection from "./components/Hero";
import MainContent from "./components/Content"
import Photos from "./components/Photos";

const App = () => {
  return (
    <div className='flex flex-col'>
      <div>
        <HeroSection />
        <MainContent />
      </div>
      <Photos />
    </div>
  )
}

export default App;