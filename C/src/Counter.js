import { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 6,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h2> 바뀌지 않는 값: {fixedNumber}</h2>
        <h1>{number}</h1>
        <button
          //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            // this.setState({ number: number - 1 });
            // this.setState({ number: this.state.number - 1 });
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
        <button
          //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            this.setState(
              {
                number: number + 2,
              },
              () => {
                console.log('방금 setState가 호출되었습니다.');
                console.log(this.State);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
