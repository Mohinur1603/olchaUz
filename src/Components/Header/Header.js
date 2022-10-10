import "./Header.css";
import { Component } from "react";
import logo from "./olchauz.png";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={`${this.props.mode} container-fluid shadow d-flex align-items-center gap-5 p-4`}
      >
        <div>
          <img src={logo} alt="olcha"></img>
        </div>
        {this.props.mode == "light" ? (
          <div
            className="btn1 d-flex align-items-center gap-3"
            onClick={() => this.props.changeHide(false)}
          >
            <div>Каталог</div>
            <div className="bars">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ) : (
          <div
            className="btn1Dark d-flex align-items-center gap-3"
            onClick={() => this.props.changeHide(false)}
          >
            <div>Каталог</div>
            <div className="bars">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        {this.props.mode == "light" ? (
          <div class="input-group">
            <input
              className={`${this.props.mode} input p-2 px-4`}
              type="text"
              placeholder="Поиск товаров.."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-dark px-4 fs-4"
              type="button"
              id="button-addon2"
            >
              &#9990;
            </button>
          </div>
        ) : (
          <div class="input-group">
            <input
              className={`${this.props.mode} inputDark p-2 px-4`}
              type="text"
              placeholder="Поиск товаров.."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-dark px-4 fs-4"
              type="button"
              id="button-addon2"
            >
              &#9990;
            </button>
          </div>
        )}

        <div>
          <button
            className={`${this.props.mode} btn2`}
            onClick={this.props.changeMode}
          >
            {this.props.mode == "light" ? (
              <img
                src="https://cdn.onlinewebfonts.com/svg/download_400181.png"
                alt="light"
              />
            ) : (
              <img
                src="https://www.jing.fm/clipimg/full/277-2779998_light-icon-in-white.png"
                alt="dark"
              />
            )}
          </button>
        </div>
      </div>
    );
  }
}
export default Header;
