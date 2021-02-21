const insertInMiddle = (xs: any[], x: any) => {
  const [a, b] = split(xs)
  return [...a, x, ...b]
}

const noop = () => {}

const shuffle = (xs: any[]) => {
  return xs
    .map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
}

const split = (xs: any[]) => {
  return [
    xs.slice(0, (xs.length / 2)),
    xs.slice(xs.length / 2),
  ]
}

export {
  insertInMiddle,
  noop,
  shuffle,
  split,
}
