import { Component } from 'react';

class Counterq extends Component {
  state = {
    number: 0,
    fixNum: 2,
  };
  render() {
    const { number, fixNum } = this.state;
    return (
      <div>
        <h2>고정 값: {fixNum}</h2>
        <h2>{number}</h2>
        <button
          onClick={() => {
            this.setState((prevState, props) => {
              return {
                number: prevState.number - 1,
              };
            });
            this.setState((prevState) => ({
              number: prevState.number - 1,
            }));
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default Counterq;
