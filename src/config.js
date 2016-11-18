/**
 * Created by dima on 18.11.16.
 */

export default {
    API_ENDPOINT_URI: [process.env.REACT_APP_API_URI || 'http://localhost:8090', 'api' ].join('/'),
    ASSETS_URI: process.env.REACT_APP_API_URI || 'http://localhost:8090'
}
