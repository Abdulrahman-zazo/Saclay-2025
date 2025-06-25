import { Loader2 } from "lucide-react";

// ==============================|| LOADER ||============================== //
const Loader = () => (
  <>
    <div className="max-h-screen w-screen p-4 flex justify-center mx-auto">
      <Loader2 className="animate-spin" />
    </div>
  </>
);

export default Loader;
