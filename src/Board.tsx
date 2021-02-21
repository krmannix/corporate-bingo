import React from 'react'
import { Block, BlockProps } from './Block'
import './Board.css'

interface BoardProps {
  words: string[],
}

interface BoardState {
  blocks: BlockProps[],
}

const freeBlockProps = {
  isClicked: true,
  isFreeBlock: true,
  word: 'Free',
}

class Board extends React.Component<BoardProps, BoardState> {
  constructor(props: BoardProps) {
    super(props)
    this.state = {
      blocks: props.words.map(word => ({ isClicked: false, isFreeBlock: false, word }))
    }
    this.buildBlocks = this.buildBlocks.bind(this)
  }

  render() {
    const blocks = this.buildBlocks().map(blockRow => [...blockRow.map(block => <Block {...block} />), <br />])

    return <div className='board'>
      {blocks}
    </div>
  }

  buildBlocks() {
    const blocks = this.state.blocks.map(blockProps => blockProps)
    blocks.splice(this.state.blocks.length / 2, 0, freeBlockProps)

    const sqrt = Math.sqrt(blocks.length)
    const blocks2d = []
    let i, j;
    for (i = 0; i < sqrt; i++) {
      let blockRow = []
      for (j = 0; j < sqrt; j++) {
        blockRow.push(blocks[i * sqrt + j])
      }
      blocks2d.push(blockRow)
    }

    return blocks2d
  }
}

export default Board
