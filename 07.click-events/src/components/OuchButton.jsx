function OuchButton() {

  let count = 0;

  const handleClick = (e) => e.target.textContent = "OUCH! 🤕";


  return (<button onClick={(e) => handleClick(e)}>Click me! 😄</button>)
}

export default OuchButton