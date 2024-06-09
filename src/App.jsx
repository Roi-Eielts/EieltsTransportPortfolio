import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useState } from 'react';

// import images
import homeTruck from './images/HomeTruck.png';
import firstTruck from './images/FirstTruck.jpg';
import secondTruck from './images/secondTruck.jpg';
import thirdTruck from './images/thirdTrucks.jpg';
import FirstTruckAlone from './images/FirstTruckAlone.jpg';
import firstMAN from './images/FirstMAN.jpg';
import firstWhiteMAN from './images/firstWhiteMAN.jpg';
import blackTruck from './images/truck_afbeelding2.png';
import mijlpaal2000 from './images/mijlpaal2000.jpg';

function App() {
  const [companyName, setCompanyName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [contactPerson, setContactPerson] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const windowSize = window.innerWidth;

  const setContactFormNull = () => {
    setCompanyName('')
    setPhoneNumber('')
    setContactPerson('')
    setEmail('')
    setMessage('')
  }

  const sendMail = () => {
    var fullMessage = `Geachte heer Eielts,\n
    ${message} \n
    Met vriendelijke groet,
    ${contactPerson}\n
    ${contactPerson} is te bereiken via:
    Email: ${email}
    Telefoon: ${phoneNumber}
    ${companyName !== undefined ? companyName : ""}`
    var url = `mailto:eielts@hetnet.nl?subject=${encodeURIComponent('Offerte bij uw transport bedrijf')}&body=${encodeURIComponent(fullMessage)}`
    window.location.href = url;
    setContactFormNull();
  }

  return (
    <>
      <div className='divDark pe-5 overflow-hidden' id='top'>
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
                    <a className="nav-link txt-blue" aria-current="page" href="#home">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link txt-blue" aria-current="page" href="#EieltsTransport">Eielts transport</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link txt-blue" aria-current="page" href="#history">Geschiedenis</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link txt-blue" aria-current="page" href="#contact">Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link txt-blue" aria-current="page" href="#offerte">Offerte</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {/* home/welcome */}
        <div className='ms-5 me-n1 border-gold-bottom' id='home' />
        <div className='ms-5 mt-5 mb-5 d-flex justify-content-center'>
          <div className='ms-3 ps-0 row'>
            <div className='col-md-4 ps-3 pe-2'>
              <img className='w-100 h-100' src={homeTruck} alt='afbeelding vrachtwagen' />
            </div>
            <div className='col-md-8'>
              <div className='ms-3 mt-1'>
                <h1 className='txt-gold-header'>Eielts transport</h1>
                <p className='text-white fs-45'>Het beste Transportbedrijf in de regio</p>
                <div className='row mt-5 pt-5'>
                  <div className='col-md-1'></div>
                  <div className='col-md-4  mt-3'>
                    <button className='mainButtons border border-0 p-2 pt-1'
                      onClick={() => {
                        var element = document.getElementById('contact')
                        element.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      <p className='mb-0 mt-0 me-2 fs-5 fw-bold'>Contact opnemen</p>
                    </button>
                  </div>
                  <div className='col-md-4 mt-3'>
                    <button className='mainButtons border border-0 p-2 pt-1'
                      onClick={() => {
                        var element = document.getElementById('offerte')
                        element.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
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
      {/* just for fading */}
      <div id="fadeDivDark" />
      <div className='ms-5 mt-5 mb-5 d-flex justify-content-center' id='EieltsTransport'>
        <div className='d-flex flex-column align-items-center'>
          <h1 className='text-center'>Over Eielts transport</h1>
          <p className='w-75 mt-2'>
          Welkom bij Eielts Transport, gevestigd in Heinkenszand. Voor persoonlijk contact kunt u naar de sectie 'Contact' gaan. Wilt u liever een offerte aanvragen? Dan kunt u naar de sectie 'Offerte' navigeren. Bent u geïnteresseerd in onze geschiedenis? Dan kunt u hieronder de sectie 'Geschiedenis' bekijken.
          </p>
        </div>
      </div>
      {/* display trucks and history */}
      <div className='ms-5 mt-5 mb-5 d-flex justify-content-center' id='history'>
        <div className='d-flex flex-column align-items-center'>
          <h2 className='text-center'>Geschiedenis</h2>
          {/* truck 1 */}
          {windowSize >= 768 ? (
            <>
              <div className='row w-75 mt-3'>
                <div className='col-md-4 ps-3 pe-2'>
                  <img className='w-100 h-100 rounded' src={firstTruck} alt='afbeelding vrachtwagen' />
                </div>
                <div className='col-md-8 d-flex align-items-center'>
                  <div>
                    <h1 className='w-100'>1971</h1>
                    <h3>Start bedrijf</h3>
                    <p className='mt-2'>Eielts transport werd opgericht door de inmiddels overleden Harry Eielts sr., een visionair ondernemer met een passie voor innovatie en kwaliteit.                 </p>
                  </div>
                </div>
              </div>
              {/* truck 2 */}
              <div className='row w-75 mt-5'>
                <div className='col-md-8 d-flex align-items-center flex-row-reverse'>
                  <div className=''>
                    <h2 className='text-end'>±1980</h2>
                    <p className='mt-2 float-end'>In het begin van de jaren '80 werd het dienstenaanbod van ons bedrijf uitgebreid met koel- en vriesttransport.</p>
                  </div>
                </div>
                <div className='col-md-4 ps-3 pe-2'>
                  <img className='w-100 h-100 rounded' src={secondTruck} alt='afbeelding vrachtwagen' />
                </div>
              </div>
              {/* truck 3 */}
              <div className='row w-75 mt-3'>
                <div className='col-md-4 ps-3 pe-2'>
                  <img className='w-100 h-100 rounded' src={thirdTruck} alt='afbeelding vrachtwagen' />
                </div>
                <div className='col-md-8 d-flex align-items-center'>
                  <div>
                    <h1 className='w-100'>±1990</h1>
                    <p className='mt-2'>In 1990 werd ons bedrijf omgezet in een Vennootschap Onder Firma (V.O.F.). 
                    </p>
                  </div>
                </div>
              </div>
              {/* truck 4 */}
              <div className='row w-75 mt-3'>
                <div className='col-md-8 d-flex align-items-center flex-row-reverse'>
                  <div>
                    <h1 className='w-100 text-end'>±2000</h1>
                    <p className='mt-2'>Rond de eeuwwisseling besloot de huidige eigenaar van Eielts transport voort te zetten als zelfstandig rijder. </p>
                  </div>
                </div>
                <div className='col-md-4 ps-3 pe-2'>
                  <img className='w-100 h-100 rounded' src={mijlpaal2000} alt='afbeelding vrachtwagen' />
                </div>
              </div>
              {/* truck 5 */}
              <div className='row w-75 mt-3'>
                <div className='col-md-4 ps-3 pe-2'>
                  <img className='w-100 h-100 rounded' src={firstMAN} alt='afbeelding vrachtwagen' />
                </div>
                <div className='col-md-8 d-flex align-items-center'>
                  <div>
                    <h1 className='w-100'>±2010</h1>
                    <p className='mt-2'>Hierbij is de oude vrachtwagen komen te vervallen en is vervangen door een nieuwe blauwe vrachtwaren waar ik veel plezier mee had.
                    </p>
                  </div>
                </div>
              </div>
              {/* truck 6 */}
              <div className='row w-75 mt-3'>
                <div className='col-md-8 d-flex align-items-center flex-row-reverse'>
                  <div>
                    <h1 className='w-100 text-end'>±2015 - heden</h1>
                    <p className='mt-2'>Hierna zijn er 3 auto's gekomen de witte man als eerste en de 2 in aparte kleuren zijn opvolgend in de jaren waarbij ik van de 3de nog geen foto heb.</p>
                  </div>
                </div>
                <div className='col-md-4 ps-3 pe-2'>
                  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={firstWhiteMAN} class="d-block w-100 rounded" alt="Afbeelding vrachtwagen" />
                      </div>
                      <div class="carousel-item">
                        <img src={blackTruck} class="d-block w-100 rounded" alt="Afbeelding vrachtwagen" />
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className='row w-75 mt-3'>
                <div className='col-md-8 d-flex align-items-center'>
                  <div>
                    <h1 className='w-100'>1971</h1>
                    <h3>Start bedrijf</h3>
                    <p className='mt-2'>Het bedrijf werd opgericht door de inmiddels overleden Harry Eielts sr., een visionair ondernemer met een passie voor innovatie en kwaliteit. </p>
                  </div>
                </div>
                <div className='col-md-4 ps-3 pe-2'>
                  <img className='w-75 rounded' src={firstTruck} alt='afbeelding vrachtwagen' />
                </div>
              </div>
              {/* truck 2 */}
              <div className='row w-75 mt-5'>
                <div className='col-md-8 d-flex align-items-center flex-row-reverse'>
                  <div className=''>
                    <h2 className='text-end'>±1980</h2>
                    <p className='mt-2 float-end'>In het begin van de jaren '80 werd het dienstenaanbod van het bedrijf uitgebreid met koel- en vriesttransport.</p>
                  </div>
                </div>
                <div className='col-md-4 ps-3 pe-2'>
                  <img className='w-100 h-100 rounded' src={secondTruck} alt='afbeelding vrachtwagen' />
                </div>
              </div>
              {/* truck 3 */}
              <div className='row w-75 mt-3'>
                <div className='col-md-8 d-flex align-items-center'>
                  <div>
                    <h1 className='w-100'>±1990</h1>
                    <p className='mt-2'>In 1990 werd het bedrijf omgezet in een Vennootschap Onder Firma (V.O.F.), een belangrijke stap in de professionele ontwikkeling en groei van het bedrijf. 
                    </p>
                  </div>
                </div>
                <div className='col-md-4 ps-3 pe-2'>
                  <img className='w-100 h-100 rounded' src={thirdTruck} alt='afbeelding vrachtwagen' />
                </div>
              </div>
              {/* truck 4 */}
              <div className='row w-75 mt-3'>
                <div className='col-md-8 d-flex align-items-center flex-row-reverse'>
                  <div>
                    <h1 className='w-100 text-end'>±2000</h1>
                    <p className='mt-2'>Rond de eeuwwisseling besloot de huidige eigenaar het bedrijf voort te zetten als zelfstandig rijder. </p>
                  </div>
                </div>
                <div className='col-md-4 ps-3 pe-2'>
                  <img className='w-100 h-100 rounded' src={mijlpaal2000} alt='afbeelding vrachtwagen' />
                </div>
              </div>
              {/* truck 5 */}
              <div className='row w-75 mt-3'>
                <div className='col-md-8 d-flex align-items-center'>
                  <div>
                    <h1 className='w-100'>±2010</h1>
                    <p className='mt-2'>Hierbij is de oude vrachtwagen komen te vervallen en is vervangen door een nieuwe blauwe vrachtwaren waar ik veel plezier mee had.</p>
                  </div>
                </div>
                <div className='col-md-4 ps-3 pe-2'>
                  <img className='w-100 h-100 rounded' src={firstMAN} alt='afbeelding vrachtwagen' />
                </div>
              </div>
              {/* truck 6 */}
              <div className='row w-75 mt-3'>
                <div className='col-md-8 d-flex align-items-center flex-row-reverse'>
                  <div>
                    <h1 className='w-100 text-end'>±2015 - heden</h1>
                    <p className='mt-2'>Hierna zijn er 3 auto's gekomen de witte man als eerste en de 2 in aparte kleuren zijn opvolgend in de jaren waarbij ik van de 3de nog geen foto heb.</p>
                  </div>
                </div>
                <div className='col-md-4 ps-3 pe-2'>
                  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={firstWhiteMAN} class="d-block w-100 rounded" alt="Afbeelding vrachtwagen" />
                      </div>
                      <div class="carousel-item">
                        <img src={blackTruck} class="d-block w-100 rounded" alt="Afbeelding vrachtwagen" />
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* contact */}
      <div id='contact' className="ms-5 mt-5 mb-5 d-flex justify-content-center">
        <div className="d-flex flex-column align-items-center">
          <h1 className="text-center">Contact</h1>
          <div className="w-75 mt-2">
            <p>Eielts transport staat altijd klaar voor u om contact op te nemen per email en mits mogelijk per telefoon. Let hier wel bij op dat Eielts transport niet altijd kan opnemen.</p>
            <p className='fw-bold mt-4 mb-0 pb-0 '>Eielts transport</p>
            <p className='mb-0 pb-0 mt-0 pt-0'>Arendhof 33</p>
            <p className='mb-0 pb-0 mt-0 pt-0'>4451EB Heinkenszand</p>
            <p className='mb-0 pb-0 mt-4'><u>31+ 06 123456789</u></p>
            <p className='mb-0 pb-0 mt-0 pt-0'><u>eielts@hetnet.nl</u></p>
            <p className='mb-0 pb-0 mt-0 pt-0'><u>www.eieltsTransport.nl</u></p>
            <p className='fst-italic mt-4 mb-0 pb-0'>contact pers. Harry Eielts</p>
            <p className='mt-4 mb-0 pb-0'>BTW: 123456789</p>
            <p className='mt-4 mb-0 pb-0'>KVK: 123456</p>
          </div>
        </div>
      </div>
      <div id="invertedFadeDivDark" />
      {/* Offerte */}
      <div id='offerte' className="divDark pb-5">
        <div className='d-flex justify-content-center align-items-center'>
          <div className="w-75">
            <form action="#">
              <div className="d-flex flex-column">
                <h1 className="text-center text-white">Offerte</h1>
                <h2 className="text-center txt-blue">Uw gegevens</h2>
              </div>
              <div className="row d-flex justify-content-center mt-5">
                <div className="col-md-6">
                  <label htmlFor="companyName" className="fs-4 text-white p-0">Bedrijfsnaam:</label>
                </div>
                <div className="col-md-6">
                  <input id="companyName" type="text" className="w-100" placeholder='Bedrijfsnaam' onChange={event => setCompanyName(event.target.value)} value={companyName} />
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-2">
                <div className="col-md-6">
                  <label htmlFor="phoneNumber" className="fs-4 text-white p-0" >Telefoonnummer <span className='text-danger fs-6'>(vereist)</span>: </label>
                </div>
                <div className="col-md-6">
                  <input id="phoneNumber" type="text" className="w-100" placeholder='telefoonnummer' onChange={event => setPhoneNumber(event.target.value)} value={phoneNumber} required={true} />
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-2">
                <div className="col-md-6">
                  <label htmlFor="contactPerson" className="fs-4 text-white p-0">Contactpersoon <span className='text-danger fs-6'>(vereist)</span>: </label>
                </div>
                <div className="col-md-6">
                  <input id='contactPerson' type='text' className='w-100' placeholder='Contactpersoon' onChange={event => setContactPerson(event.target.value)} value={contactPerson} required={true} />
                </div>
              </div>
              <div className="row d-flex justify-content-center mt-2">
                <div className="col-md-6">
                  <label htmlFor="email" className="fs-4 text-white p-0">E-mailadres <span className='text-danger fs-6'>(vereist)</span>: </label>
                </div>
                <div className="col-md-6">
                  <input id='email' type='email' className='w-100' placeholder='E-mailadres' onChange={event => setEmail(event.target.value)} value={email} required={true} />
                </div>
              </div>
              <div className='mt-2 mb-5'>
                <label htmlFor="message" className="fs-4 text-white p-0">Beschrijf uw wens <span className='text-danger fs-6'>(vereist)</span>: </label>
                <textarea className='w-100 form-control min-height mt-2' placeholder='Zet hier het bericht wat u wilt verzenden' name="message" onChange={event => setMessage(event.target.value)} value={message} required={true}></textarea>
              </div>
              <div className="row d-flex justify-content-center mt-2">
                {/* redo */}
                <div className="col-md-6 d-flex justify-content-center mt-2">
                  <button className='fs-5 fw-bold btn btn-danger' onClick={() => setContactFormNull()}>Leeg de invoervelden.</button>
                </div>
                <div className="col-md-6 d-flex justify-content-center ps-4 mt-2" onClick={() => sendMail()}>
                  <button className='fs-5 fw-bold btn btn-eielts text-white' type='submit'>Verzend de offerte.</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-100 mt-5">
          <button className="btn btn-eielts-to-top float-end"
            onClick={() => {
              var element = document.getElementById('top')
              element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <FontAwesomeIcon icon={faArrowUpLong} size="xl" className='text-white' />
          </button>
        </div>
      </div>
    </>
  )
}

export default App
