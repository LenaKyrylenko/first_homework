import './App.scss';
import imageLogo from './img/icon.png';
import imageCamera from './img/camera2.png';
import imageCard1 from './img/video-camera.jpg';
import imageCard2 from './img/dslr-camera.jpg';
import imageCard3 from './img/graphiс_tablet.jpg';
import imageBio from './img/photo_sven.png';
import imageGalery1 from './img/photo1.png';
import imageGalery2 from './img/photo2.png';
import imageGalery3 from './img/photo3.png';
import imageGalery4 from './img/photo4.png';
import imageGalery5 from './img/photo5.png';
import imageGalery6 from './img/photo6.png';
import imageInst from "./img/instagram.png" 
import imageYoutube from "./img/youtube.png" 
import imageTelegram from "./img/telegram.png" 
const Logotype = () => 
<div className="logo">
    <img src={imageLogo}  alt="logo" className="logo_image"/>
<div className="logo_text"> The photographer for your important events in life</div>
</div>
const Wrapper = ({children}) =>
<div className="wrapper">
{children}
</div>
const Offer = () =>
<Wrapper>
    <div className="offer">
        <h1 className="title">
            Hi! I'm Sven! <span> Photographer!</span>
        </h1>
        <p className="intro">
            Photography is not only a way of expression, it is also
            telling a story. I had worked with different brands by
            helping them create content to reach their specific audiences.
        </p>
        <a href="" className="btn" >
            Hire me!
        </a>
    </div>
    <img src={imageCamera} alt="first photo" className="image"/>
</Wrapper>
const Header = ()=> 
<header className="header">
    <div className="container">
        <Logotype/>
        <Offer/>
    </div>
</header>

const Card = ({img='./img/video-camera.jpg',title='NoName', text = 'NoName' }) => //title, url - объявление переменных. После `=` - значение по умолчанию
<>
<div class="bonus">
    <img src={img} />
    <h1 class="bonus-title" >{title}</h1> 
    <p class="bonus-text"> {text} </p>
</div> 
</>

const Main = () => //использование
<main className="possibility"> 
    <div className="container">
        <h2 className="section-title">
            What can do for you
        </h2>
        <div className="bonuses">
            <Card img={imageCard1} title="Video shooting"
            text="I have experience in various niches in the video industry, working with various YouTube users, influencers and famous artists." />
            <Card img={imageCard2} title="Photo shooting"
            text="I can do a portrait, wedding, advertising, studio photo session. Also advertising, interior and reportage photography."/>
            <Card img={imageCard3}   title="Graphic design"
            text="I have over 5 years of experience in graphic design. I have worked with established brands to help them achieve their creative goals."/>
            </div>
    </div>
</main>

const Container = ({children}) =>
<div className="container">
{children}
</div>

const SectionTitle = ({children}) =>
<div className="section-title">
{children}
</div> 

const Biograph = () => //использование
<biograph class="bio"> 
    <Container>
        <SectionTitle>
            <h2> BIO </h2>
        </SectionTitle>
        <Wrapper>
<           div class="list">
                <hr/>
                    <ul>
                        <li> I travel around America, in particular have been to California, Hawaii, LA.</li>
                        <li>I have a French Bulldog Powder.</li>
                        <li> I love extreme sports. Specifically, I was parachuting in Dubai and diving in Hawaii.</li>
                        <li> I have my own lifestyle blog on Instagram, where you can follow me @svenciupka</li>
                    </ul>
                <hr/>
            </div>
            <img src={imageBio} alt="Sven BIO" class="sven_img"/>
</Wrapper>
</Container>
</biograph>

const ImageTable = ({img='./img/video-camera.jpg' }) => 
<>
<img  src={img} class="image_galery" />
</> 
const GaleryTable = () => 
<>
    <div class="galery">
        <SectionTitle>
        <h2 >PROJECTS </h2>
        </SectionTitle>
        <table class="table_galery">
            <tr/> 
            <td> <ImageTable img ={imageGalery1 }/> </td>
            <td> <ImageTable img ={imageGalery2 }/> </td>
            <td> <ImageTable img ={imageGalery3 }/> </td>
            <tr/>
        <tr/>

            <td><ImageTable img ={imageGalery4 }/>  </td>
            <td>  <ImageTable img ={imageGalery5 }/> </td>
            <td> <ImageTable img ={imageGalery6 }/>  </td>

        <tr/>
        </table>
    </div>
</>

const SendMessage = () =>
<>
<div class="mail">
<Container>
<SectionTitle>
<h2 > Send me a message </h2>
</SectionTitle>
<form action="" class="form">
				<input type="name" placeholder="Input name.." name="name" class="input" required/>
				<input type="email" placeholder="Input e-mail.." name="email" class="input" required/>
				<textarea rows="4" cols="40" placeholder="Input message.." class="input text"></textarea>
               <button type="submit" class="btn btn-form">
                    Send me!
				</button>
</form>
    </Container>
    </div>
</>

const ImageLogoNet = ({img='./img/video-camera.jpg' }) => 
<>
<img  src={img} class="logo_image" />
</>  

const Footer = () =>
<footer class="footer">
<Container>
            <Logotype/>
            <Wrapper>
            <div class="contact">
                <p >
			CONTACTS
		</p>
        <p>
            1-212-123-45-67
		</p>
            </div>
  
        <div class="network">
        <ImageLogoNet img ={imageInst }/>
        <ImageLogoNet img ={imageYoutube }/>
        <ImageLogoNet img ={imageTelegram }/>
        </div> 
        </Wrapper>
        </Container>
	</footer>

function App() {
    return (
        <>
        <Header/>
        <Main/>
        <Biograph/>
        <GaleryTable/>
        <SendMessage  />
        <Footer/>
        </>
        );
    }
    
export default App;
    