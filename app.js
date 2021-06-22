import React from 'react';

export default function App(props) {
  const [status, setStatus] = React.useState(null);
  const [response, setResponse] = React.useState(null);

  React.useEffect(() => {
    setStatus('pending');
    fetch('http://krautipsum.com/api/noun')
      .then((x) => {
        setStatus(x.status);
        return x;
      })
      .then((x) => x.json())
      .then((x) => setResponse(x))
      .catch((err) => {
        setStatus('failed');
        console.err(err);
      });
  }, []);

  if (status === 200) {
    return <pre>{JSON.stringify(response, null, 2)}</pre>;
  }
  return <h1>{status}</h1>;
}
