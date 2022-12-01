import Footer from "./Footer";
import Header from "./Header";
import { BsSearch } from "react-icons/bs";
import { InputGroup } from "react-bootstrap";
function Locate() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-9">
                    <h1>Zip or City & State</h1>
                        <input type={"text"} placeholder="Zip or City & State" className="m-4"></input>
                    </div>
                    <div className="col-3">
                            <p className="btn  btn-warning "><BsSearch/></p>
                    </div>
                    <hr></hr>
                </div>

            </div>
            <div className="container">

                <iframe className="map_google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30687993.837639336!2d64.43555456294712!3d20.13016745561519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1669204074507!5m2!1sen!2sin" ></iframe>
            </div>

            <Footer />
        </>
    )


}
export default Locate