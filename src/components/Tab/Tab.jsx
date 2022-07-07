import React, { PureComponent } from 'react';
import './Tab.scss';

// PureComponent если клкаем для вызова одного и товоже елемента он не перерендерится
class Tab extends PureComponent {
  state = {
    activeTabIdx: 0,
  };

  //   shouldComponentUpdate(nextProps, nextState) {
  //     return nextState.activeTabIdx !== this.state.activeTabIdx;
  //   }

  setActiveTabIdx = index => {
    this.setState({ activeTabIdx: index });
  };

  render() {
    // console.log(this.props);
    const { activeTabIdx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIdx];

    return (
      <div>
        <div>
          {items.map((item, index) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActiveTabIdx(index)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </div>
    );
  }
}

export default Tab;
