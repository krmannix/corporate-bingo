import React from 'react'
import { Block, BlockProps } from './Block'
import './Board.css'

interface BoardProps {
  blocks: BlockProps[],
  isWinner: boolean,
  reset: () => void,
}

export function Board(props: BoardProps) {
  const sqrt = Math.sqrt(props.blocks.length)
  const blockGrid = []
  let i, j;
  for (i = 0; i < sqrt; i++) {
    let blockRow = []
    for (j = 0; j < sqrt; j++) {
      blockRow.push(props.blocks[i * sqrt + j])
    }
    blockGrid.push(blockRow)
  }

  const winnersCircle = props.isWinner ? <div>Bingo!</div> : null
  const blocks = blockGrid.map((blockRow, index) => {
    return <div key={index}>
      {blockRow.map(block => <Block key={block.word} {...block} />)}
    </div>
  })
  const resetButton = props.isWinner ?
    <button onClick={props.reset}>Play Again</button> :
    null

  return <div>
    {winnersCircle}
    <div className='board'>{blocks}</div>
    {resetButton}
  </div>
}

export default Board
