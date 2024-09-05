import LogoutBtn from "./LogoutBtn";
import SideBar from "./SideBar";
import UserNavbar from "./UserNavbar";
const HelpandSupport = () => {
  return (
    <div className="help-n-support-container">
      <div className="help-n-support-container-leftside">
        <SideBar />
        <LogoutBtn />
      </div>
      <div className="help-n-support-container-rightside">
        <div
          className="userHeader"
          style={{
            marginTop: "32px",
          }}
        >
          <UserNavbar />
        </div>
        <div className="help-content">
          {/* help boxes */}
          <div className="helbox">
            <div className="the-icon" style={{ background: "#EE5D50" }}>
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.59983 20.6H3.59982C2.27433 20.6 1.19982 19.5254 1.19983 18.2L1.19992 3.80001C1.19993 2.47453 2.27444 1.40002 3.59992 1.40002H14.4002C15.7257 1.40002 16.8002 2.47454 16.8002 3.80002V8.00002M12.0002 14.5479C12.0002 13.2512 13.0747 12.2 14.4002 12.2C15.7257 12.2 16.8002 13.2512 16.8002 14.5479C16.8002 15.8446 15.7257 16.8958 14.4002 16.8958M14.4002 20.0903V20"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="the-texts">
              <p className="the-texts-p">Frequently Asked Questions</p>
              <div className="the-text-clickables">
                <p style={{ marginRight: "10px" }}> See FAQ</p>
                <span>
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.83333 1.125L11 5.5M11 5.5L6.83333 9.875M11 5.5L1 5.5"
                      stroke="#4169E1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="helbox">
            <div className="the-icon" style={{ background: "#FFB547" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5325 10.9334C4.5325 6.22053 8.35301 2.40002 13.0658 2.40002C17.7787 2.40002 21.5992 6.22053 21.5992 10.9334C21.5992 12.16 21.3403 13.3263 20.8743 14.3804L21.6008 19.4659L17.2426 18.3763C16.008 19.0707 14.5832 19.4667 13.0658 19.4667M2.40018 16.2667C2.40018 17.0334 2.56194 17.7623 2.85319 18.4211L2.39917 21.5995L5.12276 20.9186C5.89432 21.3525 6.78476 21.6 7.73301 21.6C10.6782 21.6 13.0658 19.2122 13.0658 16.2667C13.0658 13.3212 10.6782 10.9334 7.73301 10.9334C4.78777 10.9334 2.40018 13.3212 2.40018 16.2667Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="the-texts">
              <p className="the-texts-p">Live Chat</p>
              <div className="the-text-clickables">
                <span>Chat Now</span>
                <span>
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.83333 1.125L11 5.5M11 5.5L6.83333 9.875M11 5.5L1 5.5"
                      stroke="#4169E1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="helbox">
            <div className="the-icon" style={{ background: "#2DAE32" }}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9999 2.91005C16.0832 1.98398 14.9911 1.24972 13.7876 0.750108C12.5841 0.250493 11.2931 -0.0044801 9.98997 5.95695e-05C4.52999 5.95695e-05 0.0799999 4.45005 0.0799999 9.91003C0.0799999 11.66 0.539998 13.36 1.4 14.86L0 20L5.24998 18.62C6.69998 19.41 8.32998 19.83 9.98997 19.83C15.45 19.83 19.8999 15.38 19.8999 9.92003C19.8999 7.27004 18.8699 4.78005 16.9999 2.91005ZM9.98997 18.15C8.50997 18.15 7.05998 17.75 5.78998 17L5.48998 16.82L2.36999 17.64L3.19999 14.6L2.99999 14.29C2.17774 12.977 1.74113 11.4593 1.73999 9.91003C1.73999 5.37004 5.43998 1.67005 9.97997 1.67005C12.18 1.67005 14.25 2.53005 15.8 4.09005C16.5674 4.85401 17.1756 5.7627 17.5893 6.76346C18.003 7.76422 18.214 8.83714 18.2099 9.92003C18.2299 14.46 14.53 18.15 9.98997 18.15ZM14.51 11.99C14.26 11.87 13.04 11.27 12.82 11.18C12.59 11.1 12.43 11.06 12.26 11.3C12.09 11.55 11.62 12.11 11.48 12.27C11.34 12.44 11.19 12.46 10.94 12.33C10.69 12.21 9.88997 11.94 8.94997 11.1C8.20998 10.44 7.71998 9.63003 7.56998 9.38003C7.42998 9.13003 7.54998 9.00003 7.67998 8.87003C7.78998 8.76003 7.92998 8.58003 8.04998 8.44003C8.16998 8.30003 8.21998 8.19003 8.29998 8.03004C8.37998 7.86004 8.33997 7.72004 8.27997 7.60004C8.21998 7.48004 7.71998 6.26004 7.51998 5.76004C7.31998 5.28004 7.10998 5.34004 6.95998 5.33004H6.47998C6.30998 5.33004 6.04998 5.39004 5.81998 5.64004C5.59998 5.89004 4.95999 6.49004 4.95999 7.71004C4.95999 8.93003 5.84998 10.11 5.96998 10.27C6.08998 10.44 7.71998 12.94 10.2 14.01C10.79 14.27 11.25 14.42 11.61 14.53C12.2 14.72 12.74 14.69 13.17 14.63C13.65 14.56 14.64 14.03 14.84 13.45C15.05 12.87 15.05 12.38 14.98 12.27C14.91 12.16 14.76 12.11 14.51 11.99Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="the-texts">
              <p className="the-texts-p">Whatsapp</p>
              <div className="the-text-clickables">
                <span>Drop a Message</span>
                <span>
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.83333 1.125L11 5.5M11 5.5L6.83333 9.875M11 5.5L1 5.5"
                      stroke="#4169E1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="helbox">
            <div className="the-icon" style={{ background: "#4169E1" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8711 6.32596C14.071 6.52705 15.1609 7.09377 16.0311 7.96214C16.9012 8.8305 17.4645 9.91824 17.6706 11.1157M13.0543 2.40002C15.1884 2.76108 17.1348 3.77113 18.6828 5.31133C20.2307 6.85611 21.2382 8.7985 21.6 10.9283M19.933 19.4017C19.933 19.4017 18.7743 20.5397 18.4904 20.8733C18.0278 21.3669 17.4828 21.6 16.7684 21.6C16.6997 21.6 16.6264 21.6 16.5577 21.5954C15.1976 21.5086 13.9336 20.9785 12.9856 20.526C10.3935 19.2737 8.11736 17.4959 6.22594 15.2427C4.66427 13.3643 3.6201 11.6275 2.92856 9.76284C2.50265 8.62482 2.34694 7.73818 2.41564 6.90181C2.46143 6.36708 2.66752 5.92375 3.04763 5.54442L4.60931 3.98593C4.83372 3.77569 5.07186 3.66144 5.30542 3.66144C5.59395 3.66144 5.82751 3.83511 5.97406 3.98136C5.97864 3.98593 5.98322 3.9905 5.9878 3.99507C6.26716 4.25558 6.53278 4.52523 6.81214 4.81316C6.95412 4.95941 7.10067 5.10566 7.24722 5.25648L8.49747 6.50419C8.98292 6.98864 8.98292 7.43654 8.49747 7.92099C8.36466 8.05353 8.23643 8.18607 8.10362 8.31404C7.71892 8.70709 8.02112 8.40551 7.62269 8.76199C7.61353 8.77113 7.60437 8.7757 7.59979 8.78485C7.20594 9.17789 7.27921 9.5618 7.36165 9.82231C7.36623 9.83602 7.37081 9.84973 7.37539 9.86345C7.70055 10.6495 8.15852 11.3899 8.85463 12.272L8.85921 12.2766C10.1232 13.8305 11.4559 15.0416 12.926 15.9694C13.1137 16.0882 13.3061 16.1842 13.4893 16.2756C13.6542 16.3579 13.8099 16.4356 13.9427 16.5179C13.961 16.527 13.9793 16.5407 13.9976 16.5499C14.1533 16.6275 14.2999 16.6641 14.451 16.6641C14.8311 16.6641 15.0693 16.4265 15.1471 16.3488L16.0448 15.4529C16.2005 15.2975 16.4478 15.1101 16.7363 15.1101C17.0203 15.1101 17.2539 15.2884 17.3958 15.4438C17.4004 15.4483 17.4004 15.4483 17.405 15.4529L19.9284 17.9712C20.4001 18.4373 19.933 19.4017 19.933 19.4017Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="the-texts">
              <p className="the-texts-p">Live Chat</p>
              <div className="the-text-clickables">
                <span> Call Us</span>
                <span>
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.83333 1.125L11 5.5M11 5.5L6.83333 9.875M11 5.5L1 5.5"
                      stroke="#4169E1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="helbox">
            <div className="the-icon" style={{ background: "#EE5D50" }}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 11L11 15.8M11 7.44221V7.40002M1.40002 11C1.40002 5.69809 5.69809 1.40002 11 1.40002C16.302 1.40002 20.6 5.69809 20.6 11C20.6 16.302 16.302 20.6 11 20.6C5.69809 20.6 1.40002 16.302 1.40002 11Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="the-texts">
              <p className="the-texts-p">Report Our Support</p>
              <div className="the-text-clickables">
                <span>Not Satisfied?</span>
                <span>
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.83333 1.125L11 5.5M11 5.5L6.83333 9.875M11 5.5L1 5.5"
                      stroke="#4169E1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="helbox">
            <div className="the-icon" style={{ background: "#2DAE32" }}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.495 1.71393C10.7016 1.29539 11.2984 1.29539 11.505 1.71393L14.179 7.13206C14.261 7.29826 14.4196 7.41346 14.603 7.44012L20.5823 8.30895C21.0441 8.37607 21.2286 8.94369 20.8944 9.26948L16.5677 13.4869C16.435 13.6163 16.3744 13.8027 16.4058 13.9854L17.4271 19.9404C17.506 20.4005 17.0232 20.7513 16.6101 20.5341L11.2621 17.7225C11.098 17.6362 10.902 17.6362 10.738 17.7225L5.38995 20.5341C4.97683 20.7513 4.49398 20.4005 4.57288 19.9404L5.59426 13.9854C5.62559 13.8027 5.56502 13.6163 5.4323 13.4869L1.10567 9.26948C0.771444 8.94369 0.955875 8.37607 1.41777 8.30895L7.39702 7.44012C7.58044 7.41346 7.739 7.29826 7.82103 7.13206L10.495 1.71393Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="the-texts">
              <p className="the-texts-p">Report Our Support</p>
              <div className="the-text-clickables">
                <span>Not Satisfied?</span>
                <span>
                  <svg
                    width="12"
                    height="11"
                    viewBox="0 0 12 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.83333 1.125L11 5.5M11 5.5L6.83333 9.875M11 5.5L1 5.5"
                      stroke="#4169E1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpandSupport;
