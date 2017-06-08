import React from 'react';
import api from '../api';
import { query } from 'redux-bees';
import { invalidateRequests } from 'redux-bees';

@query('site', api.getSite)

export default class App extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.dispatch(invalidateRequests(api.getSite));
    }, 1000);
  }

  render() {
    const { site, status } = this.props;

    return (
      <div>
        {
          !status.site.hasStarted &&
            'Request not started...'
        }
        {
          status.site.isLoading &&
            'Loading...'
        }
        {
          status.site.hasFailed &&
            JSON.stringify(status.site.error)
        }
        {
          site &&
            JSON.stringify(site)
        }
      </div>
    );
  }
}


