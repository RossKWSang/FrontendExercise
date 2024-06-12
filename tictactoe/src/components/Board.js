import React, { Component } from 'react'
import Square from './Square'
import "./Board.css"

export default class Board extends Component {

    // super 키워드는 자식 클래스 내에서 부모 클래스의 생성자를 호출할 때 사용됨
    // super 키워드는 자식 클래스 내에서 부모 클래스의 메서드를 호출할 때 사용됨

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({ squares: squares });
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]}
            onClick={() => this.handleClick(i)} />;
    }

    render() {
        return (
            <div>
                <div className='status'>Next Player: X, O</div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
