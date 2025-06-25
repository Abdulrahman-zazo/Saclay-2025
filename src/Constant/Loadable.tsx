import { Suspense, type ComponentType } from "react";
import Loader from "./Loader";

// ==============================|| LOADABLE - LAZY LOADING (TS Version) ||============================== //

const Loadable = <P extends object>(Component: ComponentType<P>) => {
  const WrappedComponent = (props: P) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

  return WrappedComponent;
};

export default Loadable;
