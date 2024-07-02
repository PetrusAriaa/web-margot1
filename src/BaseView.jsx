import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

const BaseView = ({content}) => {
  return (
    <>
      <Navbar />
      {content}
      <Footer />
    </>
  )
}


export default BaseView;