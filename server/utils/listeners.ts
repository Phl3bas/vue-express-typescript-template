import http from "http";

export function onError(port: number, error: any) {
  if (error !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

export function onListening(server: http.Server) {
  const addr = server.address();
  var bind =
    typeof addr === "string"
      ? "ws://localhost:" + addr
      : "http://localhost:" + addr?.port;
  console.log(
    "\x1b[36m",
    "> Server --",
    "\x1b[0m",
    "listening",
    "\x1b[32m",
    "-- " + bind
  );
}
