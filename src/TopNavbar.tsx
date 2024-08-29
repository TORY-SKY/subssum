const TopNavbar = () => {
  return (
    <div>
      <nav>
        <div>
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.39998 10.7998L1.59998 5.9998L6.39998 1.19981"
              stroke="#4169E1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Home</span>
        </div>
        <button className="sign-up-btn">Sign Up</button>
      </nav>
    </div>
  );
};

export default TopNavbar;
