import NavBar from "./Navbar"
import SearchBoxmedicine from "./SearchBoxmedicine"
import Carousalone from "./Carousalone"
import Browse from "./Browse"
import BrowseSnd from "./BrowseSnd"
import Products from "./Products"
import Introducing from "./Introducing"
import Users from "./Users"
import DownloadPracto from "./DownloadPracto"
import HiddenText from "./HiddenText"


export default function Medicines() {
  return (
    <div>
        <NavBar/>
        <SearchBoxmedicine/>
      <Carousalone/>
      <Browse/>
      <BrowseSnd/>
      <Products/>
      <Introducing/>
      <Users/>
      <DownloadPracto/>
      <HiddenText/>
      
    </div>
  )
}
