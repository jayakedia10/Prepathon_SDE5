import React from 'react';
import ReactDOM from 'react-dom';
import { AddressAutofill, SearchBox } from '@mapbox/search-js-react';
import MapboxAutocomplete from "react-mapbox-autocomplete";
 
function Login() {
    function _suggestionSelect(result, lat, long, text) {
        console.log(result, lat, long, text);
      }
    return (
            <MapboxAutocomplete
          publicKey="pk.eyJ1Ijoicm9hc3RlcnMwNSIsImEiOiJjbGx1amU5M2QxY3psM3FwcGtiM3NkaDdlIn0.V82yHMQKe9eWRTWbN9MH8Q"
          inputClass="form-control search"
          onSuggestionSelect={_suggestionSelect}
          country="IN"
          resetSearch={false}
          placeholder="Search Address..."
        />
    );
}
export default Login;