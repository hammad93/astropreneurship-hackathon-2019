import React from 'react';
import Tools from './Tools';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lattitude: '',
            altitude: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.loggedIn) {
    //         this.props.history.push('/');
    //     }
    // }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let l = Tools.l_levels(this.state.lattitude, this.state.altitude).toString();
        let final = document.getElementById("final");
        final.innerHTML = "";
        final.innerHTML += l;

        if (l >= 1.5 && l <= 2.5) {
            console.log(l);
            final.innerHTML += '<br/> You are located within the 1st Van Allen Belt!'
        } else if (l >= 4 && l <= 5) {
            final.innerHTML += '<br/> You are located within the 2nd Van Allen Belt!'
        }
    }

    render() {
        return (
            <div className="background">
                <div className="window">
                    <form>
                        <div className="labels">
                            <label className="inputs">
                                Lattitude:
                    <input type="text" name="lattitude" onChange={this.update('lattitude')} />
                            </label>
                            <br />
                            <label className="inputs">
                                Altitude:
                    <input type="text" name="altitude" onChange={this.update('altitude')} />
                            </label>
                        </div>
                        <br/>
                        <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                        <br/>
                    </form>
                </div>
                <div id="final">
                </div>
            </div>
        );
    }
}

export default Form;
