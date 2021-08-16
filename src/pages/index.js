/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }

  componentWillMount() {
    // AUTHCENTER.ready(() => { });
  }



  getToTalData = data => {
    const { counted, noCounted, countRate } = data;
    console.log('counted', counted)
    console.log('noCounted', noCounted)
    console.log('countRate', countRate)
  }

  closeFun = () => {
    this.setState({
      show: false,
    })
  }

  personListItemStyleFun = remark => {
    console.log('personListItemStyleFun remark', remark)
    const config = {
      "0": { color: '#f00', text: '有变化' },
      "1": { color: '#949494', text: '同昨日' },
    };
    const select = config[remark] || {};
    return <div style={{ color: select.color }}>{select.text || ''}</div>
  };

  render() {
    const { show } = this.state;

    return (
      <div>
        <div onClick={() => this.setState({ show: true })}>点击</div>
      </div>

    );
  }
}

ReactDOM.render(<Test />, document.getElementById('root'));
