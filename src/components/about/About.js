export default function About(props) {
    return (
        <div className="mt-4 mb-2 px-4">
            <h5 className={props.title_class}>{props.title}</h5>
            <p className={props.description_class}>
                {props.description}
            </p>
        </div>
    )
}