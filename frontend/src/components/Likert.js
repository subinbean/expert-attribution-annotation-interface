const Likert = (props) => {
    return (
        <div className="container">
            <h3> {props.text} </h3>
            <input type="radio" id="very" />
            <label for="very"> Very {props.subtext} </label><br></br>
            <input type="radio" id="somewhat" />
            <label for="somewhat"> Somewhat {props.subtext} </label><br></br>
            <input type="radio" id="not" />
            <label for="not"> Not {props.subtext} at all </label><br></br>
        </div>
    )
}

export default Likert