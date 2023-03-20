import '../App.css';
import '../App_Start.css';
import BigBot from '../images/bot_big.png';
import SmallBot from '../images/bot_small.png';

function ChooseBot() {
    return (
        <div className="App">
            <h1>this is the ChooseBot page</h1>
            <img src={SmallBot} className="App-logo" alt="logo" />
            <div className="content">
                <img src={BigBot} alt={"BigBot"} />

                <div className="contentStartPage_A">
                    <p>This is the content for "contentStartPage_A"</p>
                </div>
            </div>

        </div>
    );
}


export default ChooseBot;
