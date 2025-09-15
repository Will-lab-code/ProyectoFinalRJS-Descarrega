import Item from './Item';

function ItemList({ items }) {
  return (
    <div className="item-list">
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 d-flex justify-content-center">
            <Item item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;