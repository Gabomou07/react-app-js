function Product() {
  return (
    <div>
      <h1>Producto</h1>
    </div>
  );
}

//se exporta de esta manera, si hay un export default

export function Navbar() {
  return <nav>Navigation</nav>;
}

//forma n2 para exportar componentes || exporta todo dentro del componente
export default Product;
