import NavBar from '../components/NavBar';
import PageContent from '../components/PageContent';
import Footer from '../components/Footer';
import '../components/Style.css'

export default function Home(){
    return(
        <>
            <div id='nav'><NavBar/></div>
            <div id='content'><PageContent/></div>
            <div id='footer'><Footer/></div>

            </>
    )
}
