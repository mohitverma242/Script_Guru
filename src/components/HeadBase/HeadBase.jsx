import "./HeadBase.css"

const HeadBase=()=>{
    return(
         <div className="dropDownContainer">
   <div className="row gap-5 mb-3">
    <div className="col-sm-3 col-md-2 col-lg-1 col-xs-3">
      <div className="image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjvrWvv4c55AD7iKK29qAI7N9jbeRlGYacEQ&usqp=CAU" style={{width:"50px",height:"50px"}}/>
     <span className="fs-6">Grocery</span>
    </div>
    </div>
    <div className=" col-sm-3 col-md-2 col-lg-1 col-xs-3">
      <div className="image">
        <img src="https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-pro-plus-db-gadgets360-800x600-1673019783.jpg"style={{width:"50px",height:"50px"}}/>
        <span className="fs-6">Mobiles</span>
        </div>
    </div>
    <div className="col-sm-3 col-md-2 col-lg-1 col-xs-3">
  <div className="image">
    <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"style={{width:"50px",height:"50px"}}/>
    <div class="dropdown">
  <button class="btn dropdown-toggle p-0 border-none outline-none " type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    Fashion
  </button>
  <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
    <li><a class="dropdown-item active" href="#">Men Bottom Wear</a></li>
    <li><a class="dropdown-item" href="#">Women Ethnic</a></li>
    <li><a class="dropdown-item" href="#">Men Footwear</a></li>
    <li><a class="dropdown-item" href="#">Women Footwear</a></li>
    <li><a class="dropdown-item" href="#">Watches & Accessories</a></li>
    <li><a class="dropdown-item" href="#">Bags, Suitcase & Luggage</a></li>
    <li><a class="dropdown-item" href="#">Kids</a></li>
    <li><a class="dropdown-item" href="#">Winter</a></li>
  </ul>
</div>
</div>
    </div>
    <div className=" col-sm-3 col-md-2 col-lg-1 col-xs-3">
    <div className="image">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgeQIsbaW5RTc1WRbJrkbU5rfHF7n1fiDkwA&usqp=CAU"style={{width:"50px",height:"50px"}}/>
    <div class="dropdown">
  <button class="btn p-0 border-none outline-none dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
  Electronics
  </button>
  <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
    <li><a class="dropdown-item active" href="#">Electronics Gst Store</a></li>
    <li><a class="dropdown-item" href="#"> Cameras & Accessories</a></li>
    <li><a class="dropdown-item" href="#">Gaming</a></li>
    <li><a class="dropdown-item" href="#">Laptop & Desktop</a></li>
    <li><a class="dropdown-item" href="#">Mobile Accessory</a></li>
    <li><a class="dropdown-item" href="#">PowerBank</a></li>
  </ul>
  </div>
</div>
    </div>
    <div className="col-sm-3 col-md-2 col-lg-1 col-xs-3">
    <div className="image">
    <img src="https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129804.jpg"style={{width:"50px",height:"50px"}}/>
    <div class="dropdown">
  <button class="btn p-0 border-none  dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    Furniture
  </button>
  <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
    <li><a class="dropdown-item active" href="#">Home furniture</a></li>
    <li><a class="dropdown-item" href="#">Home decor</a></li>
    <li><a class="dropdown-item" href="#">Living Room Furniture</a></li>
    <li><a class="dropdown-item" href="#">Home Furniture</a></li>
    <li><a class="dropdown-item" href="#">Tools and Utility</a></li>
    <li><a class="dropdown-item" href="#">Kids Furniture</a></li>
  </ul>
</div>
</div>
    </div>
    <div className="col-sm-3 col-md-2 col-lg-1 col-xs-3">
   <div className="image">
    <img src="https://cdn.firstcry.com/education/2023/01/13101355/Names-Of-Household-Appliances-In-English.jpg"style={{width:"50px",height:"50px"}}/>
        <span className="fs-6">Appliances</span>
   </div>
    </div>
    <div className="col-sm-3 col-md-2 col-lg-1 col-xs-3">
    <div className="image">
    <img src="https://t4.ftcdn.net/jpg/02/80/82/81/360_F_280828158_ZZ2W8atYMHiSkLoDzxgDHNhdmXJ31jCR.jpg"style={{width:"50px",height:"50px"}}/>
        <span className="fs-6">Travel</span>
    </div>
    </div>
    <div className="col-sm-3 col-md-2 col-lg-1 col-xs-3">
    <div className="image">
    <img src="https://5.imimg.com/data5/SELLER/Default/2021/9/SB/ON/FB/38890037/soft-toys-for-kids-500x500.jpeg"style={{width:"50px",height:"50px"}}/>
    <div class="dropdown">
  <button class="btn p-0 border-none outline-none dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    Toys
  </button>
  <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
    <li><a class="dropdown-item active" href="#">Men Grooming</a></li>
    <li><a class="dropdown-item" href="#">Foods & Drinks</a></li>
    <li><a class="dropdown-item" href="#">Nutrition & Health Care</a></li>
    <li><a class="dropdown-item" href="#">Baby care</a></li>
    <li><a class="dropdown-item" href="#">Sport & Fitness</a></li>
    <li><a class="dropdown-item" href="#">Books</a></li>
  </ul>
</div>
</div>
    </div >
    <div className="col-sm-3 col-md-2 col-lg-1  col-xs-3">
    <div className="image">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_zwwC5axD1xjeswOzGXf623cuoprqhCsKw&usqp=CAU"style={{width:"50px",height:"50px"}}/>
    <div class="dropdown">
  <button class="btn p-0 border-none outline-none  dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    Two Wheelers
  </button>
  <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
    <li><a class="dropdown-item active" href="#">petrol vehicles</a></li>
    <li><a class="dropdown-item" href="#">Electric Vehicles</a></li>
  </ul>
</div>
</div>
    </div>
   </div>
   </div>
    )
}

export default HeadBase;
