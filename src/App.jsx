import './App.css';

function App() {
  return (
    <>
      {/* ===================== Navbar start===================== */}
      <nav>
        <div className="ROW">
          <div className="logo">
            <img src="./photos/scoterLOGO.png" alt="Scooter Logo" />
          </div>
          <ul className='link'>
            <li><a className='see' href="#">Home</a></li>
            <li><a className='see' href="#">Services</a></li>
            <li><a className='see' href="#">Contact Us</a></li>
          </ul>
          <div className="btOFnav">
            <button className='btONE'><a href="#">Login</a></button>
            <button className='btTWO'><a href="#">Book Scooter</a></button>
          </div>
        </div>
      </nav>
      {/* ===================== Navbar ends===================== */}




      {/* ======================= Section One Start ======================== */}
      <section id='secONE'>
        <div className="container">
          <div className="secONEleftDIV">
            <div className="bigatowTEXT">
            <div className="imgFORback"><img src="./photos/vereyLIGHTcolorO.png" alt="leef" /></div>
            <div className="imgFORbackD"><img src="./photos/leefLEAFT.png" alt="leef" /></div>
            </div>

            <h1 className='bigtextONE'>Fair price ride</h1>
            <h2 className='bigtextTWO'>Rent our <span className='scoterTEXTcolor'>Scooter</span></h2>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="secONEdivFORKlink">
              <img className='Fline' src="./photos/fLINE.png" alt="line" />
              <img className='Fline2' src="./photos/fLINE.png" alt="line" />
              <img className='Fline3' src="./photos/fLINE.png" alt="line" />
              <ul className='secONEul'>
                <li className='secONEliA'><a href="#">Location</a></li>
                <li className='secONEliA'><a href="#">Pickup Date</a></li>
                <li className='secONEliA'><a href="#">Kilometers</a></li>
                <li className='secONEliA'><a href="#">Book Scooter</a></li>
              </ul>
            </div>
          </div>
          <div className="secONErightDIV">
            <div className="dotONE">
              <img className='img1' src="./photos/dotetSARCELsmall.png" alt="DOT" />
              <img className='img2' src="./photos/dotetSARCELsmall.png" alt="DOT" />
              <img className='imgCARCEL' src="./photos/SARCELseccend.png" alt="carcel" />
             </div>
            <div className="manWITHscoterdiv">
            <img className='manWIHTscoter' src="./photos/manWITHscoter.png" alt="scoter" />
            </div>
            <div className="SmallBACKsarcel">
              <img className='wtf' src="./photos/smallSARCELright.png" alt="carcel" />
            </div>
            <div className="startingPRAISE">
              <h3 className="praise">Starting From</h3>
              <h3 className="praiseAMMAOUNT">$40</h3>
            </div>
            <div className="leefFORright">
              <img className='rightLEEF' src="./photos/leefFORright.png" alt="carcel" />
            </div>
          </div>
        </div>
      </section>
      {/* ======================= Section One End ======================== */}
    </>
  );
}

export default App;
