import React from "react"

class ProductList extends React.Component {
    constructor() {
      super();
      this.state = {links: ""};
    }
    render() {
        return this.props.links.map((link) =>
        <iframe style={{
            width: `120px`,
            height: '240px',
            }}
            marginWidth={0}
            marginHeight={0}
            scrolling={"no"}
            frameBorder={0} src={link}
            >
        </iframe>)
    }
  }

export default ProductList;