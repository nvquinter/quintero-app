const ItemListContainer = (props) => {
  return (
    <div className="container"> 
    <div className="row">
      <main  className="col-12">
        <h2>{props.greeting}</h2>
      </main>
    </div>
    </div>
  )
}

export default ItemListContainer