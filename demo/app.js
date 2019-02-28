import React from 'react'
import GoogleContacts from '../src/index'
// import FontAwesome from 'react-fontawesome';

const clientId = '429632624144-40js6mbas4r3tmjursoco68eoum0a24v.apps.googleusercontent.com'

const success = response => {
  console.log(response) // eslint-disable-line
}

const error = response => {
  console.error(response) // eslint-disable-line
}

const loading = () => {
  console.log('loading') // eslint-disable-line
}

export default () => (
  <div>
    <GoogleContacts onRequest={loading} onSuccess={success} onFailure={error} clientId={clientId} />
    <br />
    <br />
    <GoogleContacts theme="dark" onRequest={loading} onSuccess={success} onFailure={error} clientId={clientId} />
    <br />
    <br />
    <GoogleContacts theme="dark" onRequest={loading} onSuccess={success} onFailure={error} clientId={clientId} disabled />
    <br />
    <br />
    <GoogleContacts
      theme="dark"
      onRequest={loading}
      onSuccess={success}
      onFailure={error}
      clientId={clientId}
      render={renderProps => <button onClick={renderProps.onClick}>This is my custom Google button</button>}
    />
  </div>
)
