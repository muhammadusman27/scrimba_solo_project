import email from '../../../images/email.png';


export default function FirstSingle(props) {
    return (
        <div className="row px-3">
            <div className="col-12">
                <button type="button" className={props.email}>
                    <img src={email} alt="icon" />
                    <span className='email_single_text ms-2'>Email</span>
                </button>
            </div>
        </div>
    )
}