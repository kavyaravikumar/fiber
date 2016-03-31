import React, {Component, PropTypes} from 'react'

import _ from 'lodash'

// React component for visualizing fiber locations on a map
export default class FiberCostTable extends Component {

  render(){
    const { fibers } = this.props

    // TODO: implement the table header
    const rowHeaders = <div className="row"><div className="col s2">id</div><div className="col s5">cost</div><div className="col s4">distance</div></div>

    const rowElements = _.map(fibers, (fiber, i) => {

      // TODO: add logic here to highlight the selected fibers (rows)
      // hint: check the flag: fiber.isSelected
      // hint: (1) add "backgroundColor" in style={}, or
      // (2) add a color word, like className="row yellow"

      let className = 'row'//!fiber.isSelected ? 'row' : 'row yellow'

      if (fiber.isSelected == true) {
        className = 'row yellow'
      }

      return <div key={i} className={className} style={{marginBottom:0}}>
        <div className="col s2"> {i} </div>
        <div className="col s5"> {fiber.cost.toFixed(0)} </div>
        <div className="col s5"> {fiber.distance} </div>
      </div>

    })

    return <div>
      { rowHeaders }
      { rowElements }
    </div>

  }

}
