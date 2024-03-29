import { CgEnter } from "react-icons/cg";

const Footer=()=>{
    return(
   <div className="container-fluid bg-dark mt-5">
     <div  className="row w-100 p-5 gap-5">
        <div className="col-sm-3 col-md-2 col-lg-1 text-white fs-6 "style={{width:"200px"}}>
            <h6 className="text-secondary">About Us</h6>
            <p>contact us</p>
            <p>about us</p>
            <p>carrers</p>
            <p>Flipkart Services</p>
            <p>Cleartrip</p>
            <p>Corporation Information</p>
        </div>
        <div className="col-sm-3 col-md-2 col-lg-1 text-white  fs-6 "style={{width:"200px"}}>
            <h6 className="text-secondary">Help</h6>
            <p>payment</p>
            <p>Shipping</p>
            <p>Cancellation Information</p>
            <p>FAQs</p>
            <p>Report Infiringment</p>
        </div>
        <div className="col-sm-3 col-md-2 col-lg-1 text-white  fs-6 "style={{width:"200px"}}>
            <h6 className="text-secondary">Consumer Policy</h6>
            <p>Cancellation & Returns</p>
            <p>Terms of Use</p>
            <p>Security</p>
            <p>Sitemap</p>
            <p>Grienvance Redressed</p>
            <p>EPR Compiliance</p>
        </div>
        <div className="col-sm-3 col-md-2 col-lg-1 text-white fs-6 "style={{width:"200px"}}>
            <h6 className="text-secondary">Social</h6>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Youtube</p>
        </div>
        <div className="col-sm-3 col-md-2 col-lg-1 text-white fs-6  text-wrap" style={{width:"200px"}}>
            <h6 className="text-secondary">Mail Us:</h6>
            <p className="gap-2 text-wrap">
              Flipkart Internet Private Limited,Building Alyass,Begonia & clove Embassy Tech Village,
 Outer Ring Road ,Devarabeesanahalli Village, Bengaluru 560103,
            <p>  Karnataka, India</p>
            </p>
        </div>
        <div className="col-sm-3 col-md-2 col-lg-1 text-white  fs-6 text-wrap" style={{width:"200px"}}>
            <h6 className="text-secondary">Registered Office Address:</h6>
            <p>
             Flipkart Internet Private Limited,Buildings Alyss,Begonia & Clove Embassy Tech Village,Outer Ring Road ,Devarabeesanashalli village ,Bengaluru , 560103, Karnataka ,
            </p>
            <p className="text-wrap">India CIN:U51109KA2012PTC066107 </p>
            <p>Telephone: 044-45614700</p>
        </div>
     </div>
     </div>

    )
}

export default Footer;