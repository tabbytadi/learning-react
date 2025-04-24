function WinButton() {

  let count = 0;

  const handleClick = (name) => {
    if (count < 2) {
      count++;
      alert(`${name}, you clicked me ${count} time/s.`)
    }
    else {
      alert(`${name}, you won!`)
    }
  }

  return (<button onClick={() => handleClick("Adelina")}>Click me 3 times!</button>)
}

export default WinButton