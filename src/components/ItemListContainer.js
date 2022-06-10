import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
  const onAdd=() => {}
  return (
  <main>
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>{props.greeting}</h2>
        </div>
        <div className="col">
          <ItemCount stock={5} onAdd={onAdd} initial= {0} />
        </div>
      </div>
    </div>
  </main> 
  )
}

export default ItemListContainer