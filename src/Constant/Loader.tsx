// ==============================|| LOADER ||============================== //
const Loader = () => (
  <>
    <div className="max-h-screen w-screen p-4 flex justify-center mx-auto">
      {/* <!-- https://feathericons.dev/?search=loader&iconset=feather --> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="main-grid-item-icon"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <line x1="12" x2="12" y1="2" y2="6" />
        <line x1="12" x2="12" y1="18" y2="22" />
        <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
        <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
        <line x1="2" x2="6" y1="12" y2="12" />
        <line x1="18" x2="22" y1="12" y2="12" />
        <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
        <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
      </svg>
    </div>
  </>
);

export default Loader;
