const colors = [
  "#ACF7C1",
  "#AEF78E",
  "#CAFFB9",
  "#C0D461",
  "#A393BF",
  "#FF9B85",
  "#FFD97D",
  "#AAF683",
  "#60D394",
  "#EE6055",
  "#ADF5FF",
  "#D55672",
  "#F3E37C",
  "#F3D34A",
  "#EEA243",
  "#F3A738",
  "#F1D9A7",
  "#EDF2F4",
  "#EF233C",
  "#8D99AE",
  "#E8FCC2",
  "#829399",
  "#F2F2F2",
  "#CCCCCC",
  "#E7D7C1",
  "#BF4342",
  "#F4E9CD",
  "#9DBEBB",
  "#77ACA2",
  "#DC758F",
  "#E3D3E4",
  "#00FFCD",
  "#DCF2B0",
  "#C0BABC",
  "#F1C8DB",
  "#B88C9E",
  "#DFD9E2",
  "#C3ACCE",
  "#574AE2",
  "#AB81CD",
  "#E2ADF2",
  "#D6E3F8",
  "#FEF5EF",
  "#E4BB97",
]

function hashCode(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++)
    h = Math.imul(31, h) + s.charCodeAt(i) | 0;
  return Math.abs(h);
}

const generateColor = (word: string) => colors[hashCode(word) % colors.length]

export default generateColor























