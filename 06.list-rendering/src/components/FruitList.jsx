function FruitList() {
  const fruits = [{ id: 1, name: "apple", calories: 95 },
  { id: 2, name: "orange", calories: 45 },
  { id: 3, name: "banana", calories: 105 },
  { id: 4, name: "coconut", calories: 155 },
  { id: 5, name: "pineapple", calories: 37 }];


  //fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
  //fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
  //fruits.sort((a, b) => a.calories - b.calories); //NUMERIC
  //fruits.sort((a, b) => b.calories - a.calories); //REVERSE NUMERIC

  //LOW CALORIE FRUITS ARR
  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
  // const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
  //   {lowCalFruit.name}: &nbsp;
  //   <b>{lowCalFruit.calories}</b>
  // </li>);

  //DISPLAYING NORMAL ARR
  const listItems = fruits.map(fruit => <li key={fruit.id}>
    {fruit.name}: &nbsp;
    <b>{fruit.calories}</b>
  </li>);

  return (<>
    <h3 className="list-category">Fruits</h3>
    <ol className="list-items">{listItems}</ol>
  </>);
}

export default FruitList