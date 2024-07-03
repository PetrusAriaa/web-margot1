import MyNavbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

const BaseView = ({content}) => {
  return (
    <>
      <MyNavbar />
      {content}
      <Footer />
    </>
  )
}


export default BaseView;