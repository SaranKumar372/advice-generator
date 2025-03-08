import Component1 from "./component1"
function Component2(props) {

    function Clickevent() {
        location.reload();
    }

    return (
        <section className="card">
            <p className="advice-no">Advice #<span>{props.id}</span></p>
            <p className="advice">"<span>{props.advice}</span>"</p>
            <div className="divider">
                <img src={props.divider} />
            </div>
            <div className="dice" onClick={() => Clickevent()}>
                <img src={props.dice} />
            </div>
        </section>
    )
}

export default Component2