import React from 'react'
import './App.css'
import { BlockProps } from './Block'
import Board from './Board'
import { shuffle } from './util'
import { insertInMiddle, noop } from './util'
import allWords from './words'

interface AppState {
  blocks: BlockProps[],
}

const boardSize = 9

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

const freeBlockProps = {
  isClicked: true,
  isFreeBlock: true,
  key: 'Free',
  toggleIsClicked: noop,
  word: 'Free',
}


class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      blocks: this.buildBlocks(),
    }

    this.buildBlocks = this.buildBlocks.bind(this)
    this.reset = this.reset.bind(this)
  }

  buildBlocks() {
    const words = shuffle(allWords).slice(0, boardSize - 1)
    const blockProps = words.map(word => ({ isClicked: false, isFreeBlock: false, key: word, toggleIsClicked: this.buildSetIsClicked(word), word }))
    return insertInMiddle(blockProps, freeBlockProps)
  }

  isWinner() {
    return winningCombinations.some(is => is.every(i => this.state.blocks[i].isClicked))
  }

  render() {
    return (
      <div className='app'>
        <Board
          blocks={this.state.blocks}
          isWinner={this.isWinner()}
          reset={this.reset}
        />
      </div>
    )
  }

  reset() {
    this.setState({
      blocks: this.buildBlocks(),
    })
  }

  buildSetIsClicked(word: string) {
    return () => {
      this.setState(prev => ({
        ...prev,
        blocks: prev.blocks.map(block => {
          return block.word === word && !block.isFreeBlock ?
            { ...block, isClicked: !block.isClicked } :
            block
        })
      }))
    }
  }
}

export default App
