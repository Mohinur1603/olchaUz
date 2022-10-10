import { Component } from "react";
import "./ProductCard.css";

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { productImg, groupname, price, priceMonth, title } = this.props.data;
    return (
      <div>
        {(this.props.mode == "light" && (
          <div className={`${this.props.mode} productCard p-3`}>
            <img className="d-block productImg mb-2" src={productImg} alt="1" />
            <div className={`${this.props.mode} px-2`}>
              <a href="#" className="groupname">
                {groupname}
              </a>
              <p className="mb-2 mt-5 price">{price} сум</p>
              <p className="priceMonth mb-4">от {priceMonth} сум/месяц</p>
              <p className="title">{title}</p>
              <a href="#" className="btn3 p-1 my-3 shadow">
                Купить
              </a>
            </div>
          </div>
        )) || (
          <div
            className={`${this.props.mode} productCardDark productCard p-3 mb-4`}
          >
            <img className="d-block productImg mb-2" src={productImg} alt="1" />
            <div className={` px-2`}>
              <a href="#" className="groupname" style={{ color: "white" }}>
                {groupname}
              </a>
              <p className="mb-2 mt-5 price">{price} сум</p>
              <p className="priceMonth mb-4">от {priceMonth} сум/месяц</p>
              <p className="title">{title}</p>
              <a href="#" className="btn3 p-1 my-3 shadow buy">
                Купить
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProductCard;
