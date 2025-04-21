// The main gameboard function
export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {/* means “go through each row of the board.” */}
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {/* When you click the button, it calls handleSelectSquare and passes the position. */}
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
