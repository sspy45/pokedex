import React from 'react';

class ItemDetail extends React.Component {
  constructor() {
    super();
  }


  render() {
    const { item } = this.props;
    const info = !item ? "" : (
      <div>
        {this.props.item.name}
      </div>
    );

    return (
      <div>
        { info }
      </div>
    );
  }

}

export default ItemDetail;
