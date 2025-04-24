function VegetableList() {
  const vegetables = [{ id: 6, name: "potatoes", calories: 110 },
  { id: 7, name: "celery", calories: 15 },
  { id: 8, name: "carrots", calories: 25 },
  { id: 9, name: "corn", calories: 63 },
  { id: 10, name: "broccoli", calories: 50 }];

  const listItems = vegetables.map(vegetable => <li key={vegetable.id}>
    {vegetable.name}: &nbsp;
    <b>{vegetable.calories}</b>
  </li>);

  return (<>
    <h3 className="list-category">Vegetables</h3>
    <ol className="list-items">{listItems}</ol>
  </>);
}

export default VegetableList