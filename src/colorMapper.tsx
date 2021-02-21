const colors = [
  '#441151',
  '#883677',
  '#CA61C3',
  '#EE85B5',
  '#FF958C',
  '#F4D06F',
  '#B84A62',
  '#FF8811',
  '#FEC0CE',
  '#EA3546',
  '#662E9B',
  '#43BCCD',
  '#084B83',
  '#42BFDD',
  '#BBE6E4',
  '#FF66B3',
  '#8AFFC1',
  '#8FDC97',
  '#9DD9D2',
  '#FFF8F0',
  '#392F5A',
  '#D3F8E2',
  '#E4C1F9',
  '#F694C1',
  '#F0F6F6',
  '#EDE7B1',
  '#A9DEF9',
  '#F9C80E',
  '#F86624',
  '#AC8887',
  '#AEFFD8',
  '#D183C9',
  '#E3879E',
  '#CBEF43',
  '#72A98F',
  '#8DE969',
  '#F5A6E6',
]

function hashCode(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++)
    h = Math.imul(31, h) + s.charCodeAt(i) | 0;
  return Math.abs(h);
}

const generateColor = (word: string) => colors[hashCode(word) % colors.length]

export default generateColor























