import email from '../../../images/email.png';
import linkedin from '../../../images/in3.png';


export default function FirstDouble(props) {
    return (
        <div className="row px-3">
            <div className="col-6">
                <button type="button" className={props.email}>
                    <img src={email} alt="icon" />
                    <span className='email_single_text ms-2'>Email</span>
                </button>
            </div>
            <div className="col-6">
                <button type="button" className="btn linkedin_btn w-100 shadow-none">
                    <img src={linkedin} alt="icon" />
                    <span className='text-light ms-2'>LinkedIn</span>
                </button>
            </div>
        </div>
    )
}