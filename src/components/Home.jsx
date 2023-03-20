import '../App.css';
import '../App_Start.css';
import BigBot from '../images/bot_big.png';
import SmallBot from '../images/bot_small.png';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <Link to="/choosebot"><img src={SmallBot} className="App-logo" alt="logo" /></Link>

                <p>
                    cHaOSNet
                </p>
                <p className='small'>
                    This is the 3rd step for ChaosNet
                </p>
                Build 0.0.24
                <div>

                </div>
                <div className="content">
                    <img src={BigBot} alt={"BigBot"} />

                    <div className="contentStartPage_A">
                        <p>This is the content for "contentStartPage_A"</p>
                    </div>

                    <div className="contentStartPage_B">
                        <p>This is the content for "contentStartPage_B"</p>
                    </div>

                    <div className="contentStartPage_C">
                        <p>This is the content for "contentStartPage_C"</p>
                    </div>


                </div>

                <p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </p>
            </header >
        </div >
    );
}


export default Home;
