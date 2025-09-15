import { useCart } from "../context/CartContext";

function CartWidget() {
  const { totalItems } = useCart();

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <span className="fs-4">🛒</span>

      {totalItems > 0 && (
        <span 
          style={{
            position: 'absolute',
            top: '-5px',
            right: '-10px',
            background: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 6px',
            fontSize: '0.75rem',
            fontWeight: 'bold'
          }}
        >
          {totalItems}
        </span>
      )}
    </div>
  );
}

export default CartWidget;
