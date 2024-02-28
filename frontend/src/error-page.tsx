import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.statusText : '';
  message = error instanceof Error ? error.message : message;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{ message }</i>
      </p>
    </div>
  );
}

export default ErrorPage;
