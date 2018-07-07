import React, { Component } from 'react'
import Highlight from 'react-highlight'

import './style.css'


class Home extends Component {

  render() {
    return (
      <div>
        <h1>HOME PAGE</h1>
        <h5>To Create A New Page:</h5>
        <ol className="instructions">
          <li>Create a new folder inside the<code>components</code> directory (name it what the component will be)</li>
          <li>Inside your new component folder add 2 files: <code>index.js</code> and <code>style.scss</code></li>
          <li>In <code>index.js</code> create a react compnent like this:
          <Highlight language="javascript">
             {`
              import React, { Component } from 'react'
              import './style.css'

              class [COMPONENT NAME] extends Component {

                render() {
                  return (
                    <div>
                      {JSX goes here}
                    </div>
                  )
                }
              }

              export default [COMPONENT NAME]
              `}
          </Highlight>
          </li>

          <li>In <code>Routes.js</code> import your new component and then add the route like this:
            <Highlight language="javascript">
            {`  <Route path="/your-component" component={YourComponent} />`}
            </Highlight>
          </li>
          <li>In the Nav component's <code>index.js</code> you can now add a Link to your new component. Be sure to add the link to both the desktop and mobile lists:
            <Highlight language="javascript">
            {`  <NavLink to="/your-component" className="nav-link" activeClassName="active"><p>YourComponent</p></NavLink>`}
            </Highlight>
          </li>
        </ol>
      </div>
    )
  }
}

export default Home;

