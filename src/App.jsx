import { useState } from 'react'
import { HardcoreContext, HardcoreWrapper } from './components/HardcoreContext'
import './App.css'

function App() {
  const { hardcore, setHardcore } = HardcoreContext();
  return (
    <div className="App">
      {hardcore && <div className="x-files-banner hardcore">
        <img src="img/x.gif" />
        <a href="https://www.tomsconsult.no/hardcoreblogg">Nå er vi hardcore! Les mer om hvordan vi hardcorer her.</a>
      </div>
      }
      {!hardcore && <div className="x-files-banner">
        <img src="img/x.gif" />
        <a href="eksfeils.html">Sannheten er der ute. Besøk siden.</a>
      </div>
      }

      <header className="header">
        <img src="img/welcome.gif" />
        <h1 className={hardcore ? "hardcore": ""}>Til Toms hosting!</h1>
        <h2>Porsgrunns tredje beste internetthosting!</h2>
        <img src="img/penguins.gif" />
      </header>
    <div className={`tjenester ${hardcore ? "hardcore" : ""}`}>
      <h1 className={hardcore ? "hardcore": ""}>Våre (mine) tjenester</h1>
      <h2>Trenger du en nettside til:</h2>
      <ul className="tjenester-list">
        <li>
          <img src="img/ChineseMan.gif" />
          <h3>Din middelmådige kinarestaurant</h3>
        </li>
        <li>
          <img src="img/BurgerDance2.gif" />
          <h3>Burgerkjede-konseptet du har stjælt fra McDonalds</h3>
        </li>
        <li>
          <img src="img/mayorbaner.gif" />
          <h3>
            Eller ditt fullstendig feilslåtte forsøk på å være en "kul" ordfører
          </h3>
        </li>
      </ul>
      <p>
        Da er Toms hosting ditt tredjevalg i Porsgrunn.
        <u>Garantert tredje best på service!</u>
      </p>
    </div>

    <div className="prices">
      <h1 className={hardcore ? "hardcore": ""}>Priser</h1>
      <h2>
        Du finner bare bedre priser hos to andre hosting-tjenester i Porsgrunn!
      </h2>
      <ul className="tjenester-list">
        <li>
          <img src="img/oldman_walking_sm_wht.gif" />
          <h3>Henry (billigst)</h3>
          <ol>
            <li>Plass på ei gammel server i kjellerstua mi</li>
            <li>10 mb fillagring</li>
            <li>Maks html3</li>
            <li>ingen CSS-støtte</li>
            <li>Javascript må støtte IE6</li>
            <li>
              ** OBS, serveren går ned av og til. Når bikkja mi Horg pisser på
              strømforsyninga.
            </li>
          </ol>
        </li>
        <li>
          <img src="img/bmuscle.gif" />
          <h3>Nils (middels)</h3>
          <ol>
            <li>Del plass på ei flunka ny server på kjøkkenet mitt</li>
            <li>
              10 gb lagring på ekstern Western Digital USBDisk (ser ut som ei
              bok!)
            </li>
            <li>Støtte for CSS2</li>
            <li>Du kan bruke XHTML!</li>
            <li>Kommer med Angular</li>
            <li>
              ** OBS, Har mista root-passordet, så serveren kan være stabil av
              og til.
            </li>
          </ol>
        </li>
        <li>
          <img src="img/Misc_muscle_man.gif" />
          <h3>Carl (Proff)</h3>
          <ol>
            <li>
              Denne serveren står ikke i huset mitt, men ute i vedskjulet. Der
              er det dritkaldt, som gir optimale forhold!
            </li>
            <li>
              Du får tilgang på hele serveren, og kan sette inn den disken du
              vil selv. Kult om du tar med en big meny fra bergbys nårru stikker
              innom. Uten dressing!
            </li>
            <li>State of the art html4. Nyeste av det nye.</li>
            <li>Støtte for mongodb.</li>
            <li>
              4 gratis e-postadresser følger med. (dittnavn@tomshosting.no)
            </li>
            <li>
              ** OBS! 99% oppetid, men i fjor gikk den ned pga naboen min Gerd
              kjørte grasskleppern inn i skjulet mitt.
            </li>
          </ol>
        </li>
      </ul>
      <p>De tredje beste hostingprisene i Porsgrunn. <u>Garantert!</u></p>
    </div>

    <div className="kontakt-meg">
      <h1 className={hardcore ? "hardcore": ""}>Klar til å sette i gang?</h1>
      <h2>
        mail meg da vel:
        <a href="mailto:tom@tomshosting.no">tom@tomshosting.no</a>
      </h2>
      <img src="img/email_bleu.gif" />
    </div>
    <div className="links">
      <h1 className={hardcore ? "hardcore": ""}>Vi (jeg) tilbyr allerede mine tjenester til</h1>
      <h2>
        Norges første nettavis for utviklere
        <a href="https://www.kode24.no">kode24.no</a>
      </h2>
      <img src="img/hhotlinks.gif" />
    </div>
    </div>
  )
}

export default App
