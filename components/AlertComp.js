import Alert from 'react-bootstrap/Alert';

function AlertComp({ showAlert }) {
  
if (showAlert) {
  return (
    <Alert variant="success">
      <Alert.Heading>Submitted!</Alert.Heading>
    </Alert>
  );
}
}

export default AlertComp;
