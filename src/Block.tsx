import './Block.css'
import colorMapper from './colorMapper'

export interface BlockProps {
  isClicked: boolean,
  isFreeBlock: boolean,
  toggleIsClicked: () => void,
  word: string,
}

export function Block(props: BlockProps) {
  return <div
    className={`block ${props.isClicked ? 'clicked' : ''}`}
    onClick={props.toggleIsClicked}
    style={{ backgroundColor: colorMapper(props.word) }}
  >
    <div className='block-word'>
      <p>{props.word}</p>
    </div>
  </div>
}
