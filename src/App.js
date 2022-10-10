import "./App.css";
import { Component } from "react";
import Header from "./Components/Header/Header";
import ProductCard from "./Components/ProductCard/ProductCard";
import Sidebar from "./Components/Sidebar";

const dataProducts = [
  {
    id: 1,
    productImg:
      "https://olcha.uz/image/425x425/products/7M20uQvVIJGLUOVHe4FqLhA7Jr2L9p0aBxdOXVlcFqxX2WB33xaPvuEjfoNp.",
    groupname: "Офисные кресла",
    price: "2 453 000",
    priceMonth: "254 000",
    title: "Кресло для персонала GB-W009",
  },
  {
    id: 2,
    productImg:
      "https://olcha.uz/image/original/products/0xbhTZeFcTqDIcTp43Z9lZJFed469vZ7U0eUkmK0kgqZcfPYBOUPQBq8Iae4.",
    groupname: "Офисные кресла",
    price: "840 000",
    priceMonth: "109 000",
    title: "Конференц кресло LG-813C",
  },
  {
    id: 3,
    productImg:
      "https://olcha.uz/image/200x200/products/qnEgeZhpTB2lLDRerFhcwGA5ilnFe04GJCflF2kx0s5AVoMox2p9yXaEsJ9l.",
    groupname: "Офисные кресла",
    price: "840 000",
    priceMonth: "109 000",
    title: "Конференц кресло LG-810C",
  },
  {
    id: 4,
    productImg:
      "https://olcha.uz/image/200x200/products/wd5DLe4hxlS4XMTwxC6UKOGNquuoB6gfleOwlAIq6CUv2g0PXk2ZeeIbdIrF.",
    groupname: "Офисные кресла",
    price: "907 000",
    priceMonth: "118 000",
    title: "Конференц кресло LJ-901C хром база",
  },
  {
    id: 5,
    productImg:
      "https://olcha.uz/image/200x200/products/ROQt2ZyrGlVBDjmyND9I8o4zrtcud2roODbX4Y41d8Edf4ZXgeq0o2MeOx93.",
    groupname: "Офисные кресла",
    price: "1 299 000",
    priceMonth: "168 000",
    title: "Конференц кресло 5601",
  },
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      hide: false,
      mode: "light",
    };
  }

  changeMode = () => {
    this.setState((state) => {
      return { mode: state.mode == "dark" ? "light" : "dark" };
    });
    localStorage.setItem("mode", this.state.mode);
  };

  changeHide = (v) => this.setState({ hide: v });

  render() {
    // localStorage.setItem("mode", this.state.mode);
    const storage = localStorage.getItem("mode");
    return (
      <div className={`container-fluid app ${storage || "light"}`}>
        {/* Bu yerda Sidebar joylashgan */}
        <Sidebar changeHide={this.changeHide} hide={this.state.hide} />

        {/* Bu yerda Header componentasi chaqirilgan! */}
        <Header
          changeHide={this.changeHide}
          changeMode={this.changeMode}
          mode={storage || "light"}
        />

        {/* Bu yerda card lar chizilgan */}
        <section id="products" className="py-3">
          <div className="container-fluid">
            <div className="row p-5">
              {dataProducts.map((v, i) => (
                <div key={v.id} className="col-sm-4 col-md-4 col-lg-3">
                  <ProductCard
                    data={v}
                    changeMode={this.changeMode}
                    mode={storage || "light"}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
