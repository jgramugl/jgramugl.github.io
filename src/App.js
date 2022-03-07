import logo from './logo.svg';
import './App.css';
import Icon from '@mdi/react'
import { mdiEmail, mdiCellphone, mdiMapMarker, mdiEarth, mdiGithub, mdiLinkedin, mdiOpenInNew, mdiPrinter } from '@mdi/js'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <div className="App-resume">
        <div className="App-doc-padding" style={{paddingBottom: 0}}>
          {/* <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline"}}> */}
          <div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
              <h1>Joseph Gramuglia</h1>
              <button className='print-button print-hide' onClick={()=>{window.print()}}><Icon path={mdiPrinter} size={'2vmax'} color={'#0687B2'}/></button>
            </div>
            <h2>UI Architect</h2>
            {/* <p>Creative and ambitious UI Architect looking to make a difference and play an important role in the software development life cycle</p> */}
          </div>
        </div>
        <div className="App-doc-contact-info">
          <div style={{display: "flex", flexDirection: "column"}}>
            <span><Icon path={mdiEmail} size={'2vmax'} color={'#0687B2'}/>jgramugl@gmail.com</span>
            <span><Icon path={mdiCellphone} size={'2vmax'} color={'#0687B2'}/>(201) 874-0138</span>
            <span><Icon path={mdiMapMarker} size={'2vmax'} color={'#0687B2'}/>Caldwell, NJ</span>
          </div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <span><Icon path={mdiEarth} size={'2vmax'} color={'#0687B2'}/>jgramugl.github.io</span>
            <span><Icon path={mdiGithub} size={'2vmax'} color={'#0687B2'}/>github.com/jgramugl</span>
            <span><Icon path={mdiLinkedin} size={'2vmax'} color={'#0687B2'}/>linkedin.com/in/joseph-gramuglia</span>
          </div>
        </div>
        <div className="App-doc-padding" style={{paddingTop: 0}}>
          <h2>TECHNICAL SKILLS</h2>
          <button className='App-skill'>C++</button>
          <button className='App-skill'>C#</button>
          <button className='App-skill'>SQL</button>
          <button className='App-skill'>WPF</button>
          <button className='App-skill'>Java</button>
          <button className='App-skill'>Python</button>
          <button className='App-skill'>JavaScript</button>
          <button className='App-skill'>NodeJs</button>
          <h2>EXPERIENCE</h2>
          <div className="App-resume-card">
            <p><b>UI Architect</b></p>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", margin: 0}}>
              <div>BondXN <a href="https://bondxn.com/" target="_blank" rel="noreferrer"><Icon path={mdiOpenInNew} size={'1.25vmax'} color={'#0687B2'}/></a></div>
              <div>04/2019 - Present</div>
            </div>
            <ul>
              <li>Analyze and diagnose issues with legacy products and systems, propose solutions to resolve the issues and provide guidance to development teams on the implementation</li>
              <li>Mentor other engineering staff members in their overall career growth, skills development, and technical competency</li>
              <li>Experience in JavaScript developing interactive web applications over REST and websockets</li>
              <li>Participate in full SDLC (agile), including iterative development, estimations, design sessions, and testing strategy</li>
              <li>Leads a team in developing an light-weight online version of the WPF GUI using Angular and Java</li>
              <li>Develop and maintain standalone GUI application software using WPF Controls, Windows controls in .NET, C# and XAML</li>
            </ul>
          </div>
          <div className="App-resume-card">
            <p><b>Full Stack Software Developer</b></p>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", margin: 0}}>
              <div>DeltaBlaze <a href="https://www.deltablaze.com/site/index.html" target="_blank" rel="noreferrer"><Icon path={mdiOpenInNew} size={'1.25vmax'} color={'#0687B2'}/></a></div>
              <div>01/2017 - 03/2019</div>
            </div>
            <ul>
              <li>Develop cloud-based technologies with C++ to assist Fortune 500 companies at improving their workflow.</li>
              <li>Create XAML Custom Controls to address the business needs</li>
              <li>Collaborate with developers, project managers and business analysts in conceptualizing and developing new software applications and enhancements</li>
              <li>Develops and supports database architecture and development to create and enhance the Enterprise Applications</li>
              <li>Develop unit tests and perform the validation using contemporary tools, moving us towards continuous development/continuous integration</li>
            </ul>
          </div>
          <div className="App-resume-card">
            <p><b>Software Developer</b></p>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", margin: 0}}>
              <div>United Parcel Service <a href="https://www.ups.com/us/en/Home.page" target="_blank" rel="noreferrer"><Icon path={mdiOpenInNew} size={'1.25vmax'} color={'#0687B2'}/></a></div>
              <div>08/2016 - 11/2016</div>
            </div>
            <ul>
              <li>Assist team in design and develop of an internal employee website</li>
              <li>Lead in developing in ASP.Net MVC, creating dynamic web pages, and designing/developing future projects using the Leap Motion Controller</li>
              <li>Collaborate and work efficiently amongst a team of tech leads, developers and designers</li>
              <li>Develop Leap Motion project in Unity and art assets in Blender.</li>
            </ul>
          </div>
          <h2>EDUCATION</h2>
          <div className="App-resume-card">
            <div>B.S. Computer Science</div>
            <div>Ramapo College of New Jersey</div>
            <div>Mahwah, NJ / 2016</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
