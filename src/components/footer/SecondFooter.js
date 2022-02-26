import twitter from '../../images/twitter.png';
import instagram from '../../images/instagram.png';
import linkedin from '../../images/in.png';
import github from '../../images/github.png';
import facebook from '../../images/facebook.png';

export default function SecondFooter() {
    return (
        <div className="py-3 px-4 footer_icons mt-4">
            <div className="d-flex justify-content-evenly">
                <img src={twitter} alt="twitter" />
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={linkedin} alt="linkedin" />
                <img src={github} alt="github" />
            </div>
        </div>
    )
}