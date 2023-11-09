import React, { Component } from 'react';
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Jérémie AVEDANG",
        bio: "A passionate developer",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsv_LPX22Gkv6gfFCm1MxJi7YA-IkVH6YooyZYpk0F&s",
        profession: "Dev Front-End",
      },
      show: false,
      elapsedTime: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ elapsedTime: prevState.elapsedTime + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    return (
      <div className='card'>
        
        <button onClick={this.toggleShow}>
          {this.state.show ? 'Cacher le profil' : 'Afficher le profil'}
        </button>

        {this.state.show && (
          <div>
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
            <p>Profession: {this.state.person.profession}</p>
          </div>
        )}

        <p>Temps écoulé depuis le montage du composant : {this.state.elapsedTime} secondes</p>
      </div>
    );
  }
}

export default App;
