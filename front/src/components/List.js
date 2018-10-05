import React from "react";

class List extends React.PureComponent {
  state = {
    currentItem: null,
  };

  onItemClick = index => {
    this.setState({
      currentItem: index,
    })
  };

  render() {
    const { header, children } = this.props;
    const { currentItem } = this.state;

    return (
      <div className="card-container">
        <h3>{header}</h3>
        {children(currentItem, this.onItemClick)}
      </div>
    );
  }
}

export default List;
