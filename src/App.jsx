import { useState } from 'react';
import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {

  return (
    <>
      <div className='divDark pe-5 overflow-hidden'>
        {/* navbar */}
        <div id='navbar' className='ms-5 me-5'>
          <nav className="navbar navbar-expand-lg navbar-dark bg-body-transparent ms-3">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link txt-blue" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link txt-blue" aria-current="page" href="#">Eielts transport</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link txt-blue" aria-current="page" href="#">Geschiedenis</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link txt-blue" aria-current="page" href="#">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link txt-blue" aria-current="page" href="#">Offerte</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className='ms-5 me-n1 border-gold-bottom' />
        <div className='ms-5 mt-5 mb-5 d-flex justify-content-center'>
          <div className='ms-3 ps-0 row'>
            <div className='col-md-4 ps-3 pe-2'>
              <img className='w-100 h-100' src='https://media.discordapp.net/attachments/898138782648381451/1248557296443854858/1516969929052_1.png?ex=66641918&is=6662c798&hm=1b21d70d2eb3a0158274aa72960cbb2e3817d21d8b6a3557077a369f7689ecc2&=&format=webp&quality=lossless&width=500&height=463' alt='afbeelding vrachtwagen' />
            </div>
            <div className='col-md-8'>
              <div className='ms-3 mt-1'>
                <h1 className='txt-gold-header'>Eielts transport</h1>
                <p className='text-white fs-45'>Het beste Transportbedrijf in de omgeving</p>
                <div className='row mt-5 pt-5'>
                  <div className='col-md-1'></div>
                  <div className='col-md-4  mt-3'>
                    <button className='mainButtons border border-0 p-2 pt-1'>
                      <p className='mb-0 mt-0 me-2 fs-5 fw-bold'>Contact opnemen</p>
                    </button>
                  </div>
                  <div className='col-md-4 mt-3'>
                    <button className='mainButtons border border-0 p-2 pt-1'>
                      <p className='mb-0 mt-0 fs-5 fw-bold'>Offerte aanvragen</p>
                    </button>
                  </div>
                  <div className='col-md-4'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='fadeDivDark'>
      </div>
      <div className='ms-5 mt-5 mb-5 d-flex justify-content-center'>
        <div className='d-flex flex-column align-items-center'>
          <h1 className='text-center'>Over Eielts transport</h1>
          <p className='w-75 mt-2'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus  tempus purus at pharetra. Quisque scelerisque tempor lectus venenatis  aliquet. Donec eu ornare massa. Aenean enim sapien, dapibus quis dui  efficitur, accumsan interdum tortor. Praesent varius auctor ex, at  tempor nisl condimentum eget. Integer et sapien id libero tempus  convallis. Quisque tincidunt molestie sem quis rutrum. Proin vel ex sit  amet elit eleifend maximus sed quis felis. Vivamus nec rutrum ex, et  tempus metus.
            Etiam iaculis ut dolor ut porta. Quisque rutrum mattis velit a  venenatis. Nullam eleifend nec libero nec viverra. Aenean ut ullamcorper  velit, sit amet egestas ipsum. Donec fringilla sodales nulla, eu  gravida nunc dapibus eu. Ut finibus placerat orci nec molestie. Cras  euismod sollicitudin nisl, dapibus pretium risus consequat at. Nunc  accumsan vel dolor efficitur ornare. Quisque augue eros, tempus quis  rutrum nec, eleifend id tortor. Etiam blandit et ex quis finibus. Donec  vel lorem dolor. Phasellus pharetra feugiat massa quis suscipit. Lorem  ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className='ms-5 mt-5 mb-5 d-flex justify-content-center'>
        <div className='d-flex flex-column align-items-center'>
          <h2 className='text-center'>Geschiedenis</h2>
          <div className='row w-75 mt-3'>
            <div className='col-md-4 ps-3 pe-2'>
              <img className='w-100 h-100' src='https://media.discordapp.net/attachments/898138782648381451/1248557296443854858/1516969929052_1.png?ex=66641918&is=6662c798&hm=1b21d70d2eb3a0158274aa72960cbb2e3817d21d8b6a3557077a369f7689ecc2&=&format=webp&quality=lossless&width=500&height=463' alt='afbeelding vrachtwagen' />
            </div>
            <div className='col-md-8'>
              <h2>2001</h2>
              <h3>Start bedrijf</h3>
              <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget  enim magna. Praesent gravida pellentesque magna eu venenatis. Sed  ultrices lacus metus, nec gravida leo aliquet ut. Curabitur rhoncus  augue nisi, nec mattis neque dignissim non. Aliquam quis lacus ut tortor  dictum maximus. Morbi nisl lacus, euismod at ante sit.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
