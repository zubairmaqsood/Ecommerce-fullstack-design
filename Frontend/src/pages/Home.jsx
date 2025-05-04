import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <div className="topbar">
        <Header />
        <Navbar />
      </div>

      <div className="homePageContainer">

        <div className='homePagediv1'>
          {/* for side bar navlinks */}
          <div className='homepagecategorylink'>
            <NavLink className="homepagenavlink">Automobiles</NavLink>
            <NavLink className="homepagenavlink">Clothes and wears</NavLink>
            <NavLink className="homepagenavlink">Home Interiors</NavLink>
            <NavLink className="homepagenavlink">Computer and Tech</NavLink>
            <NavLink className="homepagenavlink">Tools,equipments</NavLink>
            <NavLink className="homepagenavlink">Sports and outdoor</NavLink>
            <NavLink className="homepagenavlink">Animals and pets</NavLink>
            <NavLink className="homepagenavlink">Machinary Tools</NavLink>
            <NavLink className="homepagenavlink">More Category</NavLink>
          </div>

          {/* for middle image */}
          <div className='homepagedesignpic'>

            <img src="homepageimg.png" alt="homepagedesignpic" className='homepagedesignpicimg' />

            <div className='homepagedesigntext'>
              <p>Latest Trending</p>
              <h3>Electronics Items</h3>
              <button className='homepagedesignbutton'>Learn more</button>
            </div>

          </div>

          {/* for right sidebar */}
          <div className='homepageuserinteract'>

            <div className='homepageuserinteract1'>
              <div className='homepageuserinteract1piccontainer'>
                <img className='homepageuserinteract1pic' src="default.png" alt="" />
                <h3>Hi,user let's get started</h3>
              </div>
              <button className='homepageuserinteract1join'>Join Now</button>

              <button className='homepageuserinteract1login'>Login</button>

            </div>

            <div className='homepageuserinteract2'>
              <h2>Get US $10 of with a new supplier</h2>

            </div>

            <div className='homepageuserinteract3'>
              <h2>Send quotes with supplier preferences</h2>

            </div>

          </div>

        </div>

        <div className='homePagediv2'>

          <div className='homePagediv2deals'>
            <h3>Deals and offers</h3>
            <p>Hygiene equipments</p>
            <div className="homepagediv2dealtimecontainer">
              <div className="homepagediv2dealtime">04 Days</div>
              <div className="homepagediv2dealtime">13 Hour</div>
              <div className="homepagediv2dealtime">34 Min</div>
              <div className="homepagediv2dealtime">56 Sec</div>
            </div>
          </div>

          <div className='homepagediv2immgcontainer'>
            <img className='homepagediv2img' src="watch.png" alt="watch" />
            <p>Smrart Watch</p>
            <p className='homepagediv2discount'>-25%</p>
          </div>

          <div className='homepagediv2immgcontainer'>
            <img className='homepagediv2img' src="Laptop.png" alt="Laptop" />
            <p>Laptop</p>
            <p className='homepagediv2discount'>-15%</p>
          </div>

          <div className='homepagediv2immgcontainer'>
            <img className='homepagediv2img' src="Camera.png" alt="Camera" />
            <p>Camera</p>
            <p className='homepagediv2discount'>-40%</p>
          </div>

          <div className='homepagediv2immgcontainer'>
            <img className='homepagediv2img' src="Gaming Headset.png" alt="Gaming headphone" />
            <p>Gaming Headphone</p>
            <p className='homepagediv2discount'>-25%</p>
          </div>

          <div className='homepagediv2immgcontainer'>
            <img className='homepagediv2img' src="Smartphone.png" alt="smartphone" />
            <p>Smartphone</p>
            <p className='homepagediv2discount'>-25%</p>
          </div>

        </div>

        <div className='homePagediv3'>
          <div className="homepage3divimgcontainer">
            <img className='homepagediv3mainimg' src="div2 leftside.png" alt="" />
          </div>
          

          <div className='homepagediv3product'>
            <div className='homepagediv3productimgcontainer'>
              <p>Sofa Chair</p>
              <p>From USD 19</p>
              <img className='homepagediv3img' src="Sofa.png" alt="" />
            </div>

            <div className='homepagediv3productimgcontainer'>
              <p>Sofa Lamp</p>
              <p>From USD 19</p>
              <img className='homepagediv3img' src="Sofa Lamp.png" alt="" />
            </div>

            <div className='homepagediv3productimgcontainer'>
              <p>Kitchen Dishes</p>
              <p>From USD 19</p>
              <img className='homepagediv3img' src="image 93.png" alt="Kitchen Dishes" />
            </div>

            <div className='homepagediv3productimgcontainer'>
              <p>Coffee Maker</p>
              <p>From USD 19</p>
              <img className='homepagediv3img' src="Coffee Maker.png" alt="" />
            </div>

            <div className='homepagediv3productimgcontainer'>
              <p>Kitchen Mixer</p>
              <p>From USD 100</p>
              <img className='homepagediv3img' src="Kitchen Mixer.png" alt="Kitchen mixer" />
            </div>

            <div className='homepagediv3productimgcontainer'>
              <p>Blender</p>
              <p>From USD 39</p>
              <img className='homepagediv3img' src="Blender.png" alt="Blender" />

            </div>

            <div className='homepagediv3productimgcontainer'>
              <p>Home appliances</p>
              <p>From USD 19</p>
              <img className='homepagediv3img' src="Home appliances.png" alt="Home appliances" />
            </div>

            <div className='homepagediv3productimgcontainer'>
              <p>Vase</p>
              <p>From USD 19</p>
              <img className='homepagediv3img' src="Vase.png" alt="Vase" />
            </div>

          </div>
        </div>


        {/* for div 4  */}
        <div className='homePagediv4'>
          <div className="homepage4divimgcontainer">
            <img className='homepagediv4mainimg' src="div3leftside.png" alt="" />
          </div>
          

          <div className='homepagediv4product'>
            <div className='homepagediv4productimgcontainer'>
              <p>Smart Watch</p>
              <p>From USD 19</p>
              <img className='homepagediv4img' src="watch.png" alt="" />
            </div>

            <div className='homepagediv4productimgcontainer'>
              <p>Cameras</p>
              <p>From USD 89</p>
              <img className='homepagediv4img' src="Camera.png" alt="" />
            </div>

            <div className='homepagediv4productimgcontainer'>
              <p>Headphones</p>
              <p>From USD 19</p>
              <img className='homepagediv4img' src="Headphones.png" alt="Headphone" />
            </div>

            <div className='homepagediv4productimgcontainer'>
              <p>Electric Kettle</p>
              <p>From USD 90</p>
              <img className='homepagediv4img' src="Electric kettle.png" alt="Electric Kettle" />
            </div>

            <div className='homepagediv4productimgcontainer'>
              <p>Gaming Headset</p>
              <p>From USD 35</p>
              <img className='homepagediv4img' src="Gaming Headset.png" alt="Gaming Headset" />
            </div>

            <div className='homepagediv4productimgcontainer'>
              <p>Laptops and PC</p>
              <p>From USD 340</p>
              <img className='homepagediv4img' src="Laptop.png" alt="Laptop" />

            </div>

            <div className='homepagediv4productimgcontainer'>
              <p>Smart phones</p>
              <p>From USD 19</p>
              <img className='homepagediv4img' src="Smartphone.png" alt="Smartphone" />
            </div>

            <div className='homepagediv4productimgcontainer'>
              <p>Smartphone</p>
              <p>From USD 240</p>
              <img className='homepagediv4img' src="Smartphone 2.png" alt="Smartphone" />
            </div>

          </div>
        </div>

        {/* for div 5 */}
        <div className="homepagediv5">
          <img className='homepagediv5img' src="div5.png" alt="" />
        </div>

        <h3 className='recommendeditem'>Recommended Items</h3>

        <div className='homePagediv6'>
            <div className='homepagediv6productimgcontainer'>
              <img className='homepagediv6img' src="T-shirt.png" alt="" />
              <p>$10.30</p>
              <p>T-shirts with multiple color for men</p>
            </div>

            <div className='homepagediv6productimgcontainer'>
              <img className='homepagediv6img' src="Brown Coat.png" alt="" />
              <p>$10.30</p>
              <p>Brown Winter Coat medim size</p>
            </div>

            <div className='homepagediv6productimgcontainer'>
              <img className='homepagediv6img' src="Blue Coat.png" alt="" />
              <p>$12.50</p>
              <p>Blue coat for men</p>
            </div>

            <div className='homepagediv6productimgcontainer'>
              <img className='homepagediv6img' src="Leather Wallet.png" alt="" />
              <p>$34.00</p>
              <p>Blue Leather Wallet</p>
            </div>

            <div className='homepagediv6productimgcontainer'>
              <img className='homepagediv6img' src="Jeans bag.png" alt="" />
              <p>$99.00</p>
              <p>Jeans bag for travel</p>
            </div>

            <div className='homepagediv6productimgcontainer'>
              <img className='homepagediv6img' src="Jeans short.png" alt="" />
              <p>$9.99</p>
              <p>Jeans short for men blue color</p>

            </div>

            <div className='homepagediv6productimgcontainer'>
              <img className='homepagediv6img' src="Headphones.png" alt="" />
              <p>$8.99</p>
              <p>Headsets for gaming with mic</p>
            </div>

            <div className='homepagediv6productimgcontainer'>
              <img className='homepagediv6img' src="Jeans bag.png" alt="" />
              <p>$10.30</p>
              <p>Jeans bag for travel</p>
            </div>

            <div className='homepagediv6productimgcontainer'>
              <img className='homepagediv6img' src="Clay port.png" alt="" />
              <p>$10.30</p>
              <p>Clay port for water and storing food</p>
            </div>

            <div className='homepagediv6productimgcontainer'>
              <img className='homepagediv6img' src="Electric kettle.png" alt="" />
              <p>$80.95</p>
              <p>Electric Kettle for tea making</p>
            </div>

        </div>

        {/* for div 7 */}
        <div className="homepagediv7">
          <img className='homepagediv7img' src="div7.png" alt="" />
        </div>

        <div className="homepagediv8">
          <img className='homepagediv8img' src="div8.png" alt="" />
        </div>

        <NewsLetter />

        <Footer/>

      </div>

    </>
  )
}

export default Home
