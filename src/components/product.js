import one from '../assets/images/one1.jpg';
import two from '../assets/images/two2.jpg';
import three from '../assets/images/three3.jpg';
export default Product

function Product() {
  return (
    <div class="productbox">
      <div class="products">
        <img src={one} alt="text" class="img"></img>
        <p style={{ padding: '20px' }}>
          A captivating perfume for the charismatic, Fogg Impressio has a panache of magnetic
          elegance and modern masculinity. Wear it casually or for special occasions, the strong,
          crisp aromatic scent makes it an enticing fragrance for all occasions.
        </p>
      </div>
      <div class="products">
        <img src={two} alt="text" class="img"></img>
        <p style={{ padding: '20px' }}>
          A captivating perfume for the charismatic, Fogg Impressio has a panache of magnetic
          elegance and modern masculinity. Wear it casually or for special occasions, the strong,
          crisp aromatic scent makes it an enticing fragrance for all occasions.
        </p>
      </div>
      <div class="products">
        <img src={three} alt="text" class="img"></img>
        <p style={{ padding: '20px' }}>
          A captivating perfume for the charismatic, Fogg Impressio has a panache of magnetic
          elegance and modern masculinity. Wear it casually or for special occasions, the strong,
          crisp aromatic scent makes it an enticing fragrance for all occasions.
        </p>
      </div>
    </div>
  );
}
