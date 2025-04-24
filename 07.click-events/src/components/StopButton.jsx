function StopButton() {

  const handleClick = () => console.log("OUCH!");
  const handleClick2 = (name) => alert(`${name}, stop clicking me`);

  return (<button onClick={() => handleClick2("Adelina")}>Don't click me!</button>)
}

export default StopButton