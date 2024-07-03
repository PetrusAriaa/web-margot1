import MainContent from './components/Content'
import HeroSection from './components/Hero'
import Photos from './components/Photos'

function BaseApp() {
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

export default BaseApp;
