import { useRouteError, isRouteErrorResponse, useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  let message = isRouteErrorResponse(error) ? error.statusText : '';
  message = error instanceof Error ? error.message : message;
  console.error(error);

  return (
    <Alert variant="danger" dismissible onClick={() => navigate('/')}>
      <Alert.Heading>Oops! An unexpected error has occurred.</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
}

export default ErrorPage;
