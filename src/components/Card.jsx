const Card = ( props ) => {

    return(
        <div className={`card ${ props.themeChange } `}>
            <h1 className="cardH1">
                {props.title}
            </h1>
            <span className="cardSpan">{ props.time }, { props.duration } min read</span>
            <h5 className="cardH5">
                {props.task}
            </h5>
        </div>
    )
};

export default Card;