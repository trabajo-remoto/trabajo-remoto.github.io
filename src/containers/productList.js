import React from "react"

import "./productList.css"

class ProductList extends React.Component {
    constructor() {
      super();
      this.state = {links: ""};
    }
    render() {
        return (
            <div className="products">
            {
                this.props.links.map((link, id) =>
                <div className="product">
                    <iframe style={{
                        width: `120px`,
                        height: '240px',
                        }}
                        marginWidth={0}
                        marginHeight={0}
                        scrolling={"no"}
                        frameBorder={0}
                        src={link}
                        key={id}
                        >
                    </iframe>
                </div>
            )
            }
        </div>
        )
    }
  }

export default ProductList;