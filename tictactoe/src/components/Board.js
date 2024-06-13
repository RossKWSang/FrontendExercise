import React from 'react'
import Square from './Square'
import "./Board.css"

// export default class Board extends Component {

const Board = ({ squares, onClick }) => {
    // super 키워드는 자식 클래스 내에서 부모 클래스의 생성자를 호출할 때 사용됨
    // super 키워드는 자식 클래스 내에서 부모 클래스의 메서드를 호출할 때 사용됨

    // const [getter, setter]

    const renderSquare = (i) => {
        return <Square value={squares[i]}
            onClick={() => onClick(i)} />;
    }

    return (
        <div>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board;
