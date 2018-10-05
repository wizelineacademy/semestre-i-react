import * as React from 'react'
import { getSteps } from "../utils/webServices";
import List from "./List";
import ListItem from "./ListItem";

class About extends React.PureComponent {
  state = {
    steps: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const steps = await getSteps();
    this.setState({ steps, loading: false });
  }

  render() {
    const { steps, loading } = this.state;
    return (
      <div className="about-container">
        <h1>React JS Workshop</h1>
        {loading
          ? (
            <h3>Loading steps...</h3>
          )
          : (
            <List header="List of steps">
              {(currentItem, onClick) => (
                steps.map((step, i) => (
                  <ListItem
                    key={i}
                    active={currentItem === i}
                    onClick={() => onClick(i)}
                  >
                    {step}
                  </ListItem>
                ))
              )}
            </List>
          )
        }
      </div>
    )
  }
}

export default About;
