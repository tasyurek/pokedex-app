import AppContext from "./app-context";

const ContextConsumer = () => {
  return (
    <AppContext.Consumer>
      {(values) => {
        if (window._REACT_CONTEXT_DEVTOOL) {
          window._REACT_CONTEXT_DEVTOOL({
            id: "uniqContextId",
            displayName: "App Context",
            values,
          });
        }
        return null;
      }}
    </AppContext.Consumer>
  );
};

export default ContextConsumer;
