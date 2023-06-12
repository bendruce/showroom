import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const [scrollY, setScrollY] = useState(0);
  const [hideLogo, setHideLogo] = useState(false);
  const logoRef = useRef(null);
  const headerLogoRef = useRef(null);
  const headerRef = useRef(null);
  const scrollableRef = useRef(null);
  const videoRef = useRef(null);
  const newsRef = useRef(null);
  const footerRef = useRef(null);
  const logoSize = Math.max(4 - scrollY / 150, 1);
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-0.5 w-6 my-1 bg-gray-50 transition ease transform duration-300`;

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = 297; // Total number of images for 360 view

  const handleScrollDiv = (event) => {
    let newIndex = currentIndex;

    if (event.deltaY < 0 && currentIndex > 0) {
      // scrolling up
      newIndex = currentIndex - 1;
      const divMiddleY =
        window.pageYOffset +
        scrollableRef.current.getBoundingClientRect().top +
        scrollableRef.current.getBoundingClientRect().height / 2;
      const scrollPosition = divMiddleY - window.innerHeight / 2;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      // Prevent default scroll behavior
      event.preventDefault();
    } else if (event.deltaY > 0 && currentIndex < totalImages - 1) {
      // scrolling down
      newIndex = currentIndex + 1;
      const divMiddleY =
        window.pageYOffset +
        scrollableRef.current.getBoundingClientRect().top +
        scrollableRef.current.getBoundingClientRect().height / 2;
      const scrollPosition = divMiddleY - window.innerHeight / 2;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      // Prevent default scroll behavior
      event.preventDefault();
    }

    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const container = scrollableRef.current;

    if (container) {
      container.addEventListener("wheel", handleScrollDiv, {
        passive: false,
      });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScrollDiv);
      }
    };
  }, [currentIndex]);

  const discoverRef = useRef(null);
  const modelsRef = useRef(null);
  const showroomsRef = useRef(null);
  const imageShowroomRef = useRef(null);
  let scrollTimeout = null;

  const handleScroll = useCallback(() => {
    const currentScrollY = window.pageYOffset;
    setScrollY(currentScrollY);

    if (logoRef.current && headerLogoRef.current) {
      const logoMid =
        logoRef.current.getBoundingClientRect().bottom -
        logoRef.current.getBoundingClientRect().height / 2;
      const headerMid =
        headerLogoRef.current.getBoundingClientRect().top +
        headerLogoRef.current.getBoundingClientRect().height / 2;

      if (headerMid >= logoMid) {
        setHideLogo(true);
      } else {
        setHideLogo(false);
      }
    }

    if (scrollTimeout) {
      clearTimeout(scrollTimeout); // clear existing timeout if user is still scrolling
    }

    scrollTimeout = setTimeout(() => {
      // after 2 seconds of no scrolling...
      if (
        scrollableRef.current.getBoundingClientRect().top <= 500 &&
        scrollableRef.current.getBoundingClientRect().top >= -500
      ) {
        console.log("check");

        // Calculate where to scroll to put the middle of the div in the middle of the screen
        const divMiddleY =
          window.pageYOffset +
          scrollableRef.current.getBoundingClientRect().top +
          scrollableRef.current.getBoundingClientRect().height / 2;
        const scrollPosition = divMiddleY - window.innerHeight / 2;

        // Scroll to the calculated position
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }
      if (
        videoRef.current.getBoundingClientRect().top <= 250 &&
        videoRef.current.getBoundingClientRect().top >= -250
      ) {
        console.log("check");

        // Calculate where to scroll to put the middle of the div in the middle of the screen
        const divMiddleY =
          window.pageYOffset +
          videoRef.current.getBoundingClientRect().top +
          videoRef.current.getBoundingClientRect().height / 2;
        const scrollPosition = divMiddleY - window.innerHeight / 2;

        // Scroll to the calculated position
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }
      if (
        discoverRef.current.getBoundingClientRect().top <= 250 &&
        discoverRef.current.getBoundingClientRect().top >= -250
      ) {
        console.log("check");

        // Calculate where to scroll to put the middle of the div in the middle of the screen
        const divMiddleY =
          window.pageYOffset +
          discoverRef.current.getBoundingClientRect().top +
          discoverRef.current.getBoundingClientRect().height / 2;
        const scrollPosition = divMiddleY - window.innerHeight / 2;

        // Scroll to the calculated position
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }
      if (
        modelsRef.current.getBoundingClientRect().top <= 400 &&
        modelsRef.current.getBoundingClientRect().top >= -400
      ) {
        console.log("check");

        // Calculate where to scroll to put the middle of the div in the middle of the screen
        const divMiddleY =
          window.pageYOffset +
          modelsRef.current.getBoundingClientRect().top +
          modelsRef.current.getBoundingClientRect().height / 2;
        const scrollPosition = divMiddleY - window.innerHeight / 2;

        // Scroll to the calculated position
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }
      if (
        showroomsRef.current.getBoundingClientRect().top <= 400 &&
        showroomsRef.current.getBoundingClientRect().top >= -400
      ) {
        console.log("check");

        // Calculate where to scroll to put the middle of the div in the middle of the screen
        const divMiddleY =
          window.pageYOffset +
          showroomsRef.current.getBoundingClientRect().top +
          showroomsRef.current.getBoundingClientRect().height / 2;
        const scrollPosition = divMiddleY - window.innerHeight / 2;

        // Scroll to the calculated position
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }
      if (
        newsRef.current.getBoundingClientRect().top <= 250 &&
        newsRef.current.getBoundingClientRect().top >= -250
      ) {
        console.log("check");

        // Calculate where to scroll to put the middle of the div in the middle of the screen
        const divMiddleY =
          window.pageYOffset +
          newsRef.current.getBoundingClientRect().top +
          newsRef.current.getBoundingClientRect().height / 2;
        const scrollPosition = divMiddleY - window.innerHeight / 2;

        // Scroll to the calculated position
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }
      if (
        footerRef.current.getBoundingClientRect().top <= 250 &&
        footerRef.current.getBoundingClientRect().top >= -250
      ) {
        console.log("check");

        // Calculate where to scroll to put the middle of the div in the middle of the screen
        const divMiddleY =
          window.pageYOffset +
          footerRef.current.getBoundingClientRect().top +
          footerRef.current.getBoundingClientRect().height / 2;
        const scrollPosition = divMiddleY - window.innerHeight / 2;

        // Scroll to the calculated position
        window.scrollTo({ top: scrollPosition, behavior: "smooth" });
      }
    }, 2000); // 2000 ms = 2 seconds
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <div
        className="header w-full bg-[rgba(0,0,0,.4)] fixed flex flex-row justify-between items-center px-12 py-6 z-40"
        ref={headerRef}
      >
        <div className="hamburger-menu">
          <button
            className="flex flex-col h-6 w-6 justify-center items-center group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-1.5 opacity-100 group-hover:opacity-50"
                  : "opacity-100 group-hover:opacity-50"
              }`}
            />

            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-1 opacity-100 group-hover:opacity-50"
                  : "opacity-100 group-hover:opacity-50"
              }`}
            />
          </button>
        </div>
        <div className="">
          <img
            ref={headerLogoRef}
            src="/images/aston-logo.png"
            alt="Logo"
            className={`h-6 ${hideLogo ? "opacity-100" : "opacity-0"}`}
          />
        </div>
        <div className="w-6 h-4 "></div>
      </div>
      <div
        className={`nav-menu fixed bg-[rgba(0,0,0,.5)] flex flex-col pt-24 p-8 justify-between items-start font-optima z-30 h-[100vh] left-0 top-0 w-full lg:w-4/12 transform transition-transform duration-1000 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-start items-start gap-8">
          <h1 className=" text-lg text-gray-100">Home</h1>
          <h1 className=" text-lg text-gray-100">Our World</h1>
          <h1 className=" text-lg text-gray-100">Models</h1>
          <h1 className=" text-lg text-gray-100">Owners</h1>
          <h1 className=" text-lg text-gray-100">Store</h1>
          <h1 className=" text-lg text-gray-100">Lifestyle</h1>
          <h1 className=" text-lg text-gray-100">F1</h1>
        </div>
        <div className="flex flex-col gap-4 w-full ">
          <div className="flex flex-col justify-center items-start gap-4 ">
            <h1 className=" text-lg text-gray-100">Enquire</h1>
          </div>
          <div className="flex flex-row gap-2 justify-between items-center ">
            <h1 className=" text-lg text-gray-100">Dealers</h1>
            <div className="flex flex-row justify-end gap-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 37 29"
                >
                  <path
                    fill="#F3F4F6"
                    d="M37 3.429a14.978 14.978 0 01-4.247 1.162 7.38 7.38 0 003.25-4.058 14.829 14.829 0 01-4.692 1.776A7.377 7.377 0 0025.926 0c-4.08 0-7.387 3.278-7.387 7.32 0 .572.067 1.129.193 1.67A21.05 21.05 0 013.508 1.336a7.23 7.23 0 00-1 3.686c0 2.541 1.3 4.778 3.285 6.096a7.52 7.52 0 01-3.349-.914v.086c0 3.551 2.547 6.508 5.923 7.181a7.346 7.346 0 01-1.941.263c-.477 0-.942-.054-1.392-.135.94 2.902 3.667 5.023 6.898 5.086a14.925 14.925 0 01-9.174 3.134c-.598 0-1.183-.034-1.761-.104A21.109 21.109 0 0012.32 29c13.585 0 21.017-11.156 21.017-20.834 0-.317-.01-.633-.025-.945A14.532 14.532 0 0037 3.429z"
                  ></path>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 28 28"
                >
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M20 1H8C4.1 1 1 4.1 1 8v12c0 3.9 3.1 7 7 7h12c3.9 0 7-3.1 7-7V8c0-3.9-3.1-7-7-7z"
                  ></path>
                  <path fill="#fff" d="M21 7a1 1 0 100-2 1 1 0 000 2z"></path>
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M14 20a6 6 0 100-12 6 6 0 000 12z"
                  ></path>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 38 38"
                >
                  <path
                    fill="#F3F4F6"
                    d="M19 0a19 19 0 100 38 19 19 0 000-38z"
                  ></path>
                  <path
                    fill="#000"
                    d="M21.572 24.036h4.917l.772-4.995h-5.69v-2.73c0-2.075.678-3.915 2.619-3.915h3.119V8.037c-.548-.074-1.707-.236-3.897-.236-4.573 0-7.254 2.415-7.254 7.917v3.323h-4.701v4.995h4.701v13.729c.931.14 1.874.235 2.842.235.875 0 1.729-.08 2.572-.194v-13.77z"
                  ></path>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 41 30"
                >
                  <path
                    fill="#F3F4F6"
                    d="M39.2 24.9c-.4 2.1-2.1 3.7-4.2 4-3.3.5-8.8 1.1-15 1.1-6.1 0-11.6-.6-15-1.1-2.1-.3-3.8-1.9-4.2-4C.4 22.6 0 19.2 0 15s.4-7.6.8-9.9C1.2 3 2.9 1.4 5 1.1 8.3.6 13.8 0 20 0c6.2 0 11.6.6 15 1.1 2.1.3 3.8 1.9 4.2 4 .4 2.3.9 5.7.9 9.9-.1 4.2-.5 7.6-.9 9.9z"
                  ></path>
                  <path fill="#000" d="M16 22V8l12 7-12 7z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-[100vh] bg-gradient-to-b bg-aston-green pt-24 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center font-optima">
          <div className="">
            <img
              ref={logoRef}
              src="/images/aston-logo.png"
              alt="Logo"
              className={`aston-logo-div1 z-50 ${
                hideLogo ? "opacity-0" : "opacity-100"
              }`}
              style={{ height: `${logoSize}rem` }}
            ></img>
          </div>
          <h1 className=" text-3xl text-gray-100">Icon</h1>
          <h1 className=" text-3xl text-gray-100">Driven</h1>
        </div>
      </div>

      <div
        className="360-view-div w-full h-[100vh] bg-gradient-to-b flex flex-col items-center justify-center relative overflow-hidden scroll-smooth"
        ref={scrollableRef}
      >
        <img
          src={`/360-images/${currentIndex}.jpg`}
          alt="360 View"
          loading="lazy"
          layout="fill"
          objectFit="cover"
          className="absolute bottom-0 w-full h-full object-cover"
        />
      </div>

      <div
        className="w-full min-h-[100vh] bg-aston-green  px-4 py-8 lg:px-24 lg:py-48 flex flex-col items-center justify-center"
        ref={videoRef}
      >
        <iframe
          className="w-[90vw] h-[40vh] lg:w-[80vw] lg:h-[60vh]"
          src="https://www.youtube.com/embed/nKe98FGACoU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div
        className="image-showroom flex flex-col lg:flex-row h-fit  items-stretch relative"
        ref={imageShowroomRef}
      >
        <div
          className="flex flex-grow relative  min-h-[100vh] z-10"
          ref={discoverRef}
        >
          <Image
            src={"/images/aston-interior.jpg"}
            layout="fill"
            objectFit="cover"
            className="object-cover"
            alt="white-aston"
          />
          <div className="left-8 bottom-8 w-fit h-fit text-gray-50 text-sm z-20 absolute flex flex-row justify-start gap-4 items-center">
            <div>
              <h1>Discover </h1>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 28 26"
              >
                <path
                  fill="#F1F5F9"
                  d="M27.707 13.707l-12 12a.999.999 0 11-1.414-1.414L24.586 14H1a1 1 0 010-2h23.586L14.293 1.707A.999.999 0 1115.707.293l12 12a.999.999 0 010 1.414z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          className="flex flex-grow relative  min-h-[100vh] z-10 "
          ref={modelsRef}
        >
          <Image
            src={"/images/red-aston.jpg"}
            layout="fill"
            objectFit="cover"
            className="object-cover"
            alt="white-aston"
          />
          <div className="left-8 bottom-8 w-fit h-fit text-gray-50 text-sm z-20 absolute flex flex-row justify-start gap-4 items-center">
            <div>
              <h1>Models </h1>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 28 26"
              >
                <path
                  fill="#F1F5F9"
                  d="M27.707 13.707l-12 12a.999.999 0 11-1.414-1.414L24.586 14H1a1 1 0 010-2h23.586L14.293 1.707A.999.999 0 1115.707.293l12 12a.999.999 0 010 1.414z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          className="flex flex-grow relative  min-h-[100vh] z-10"
          ref={showroomsRef}
        >
          <Image
            src={"/images/aston-showroom.jpg"}
            layout="fill"
            objectFit="cover"
            className="object-cover"
            alt="white-aston"
          />
          <div className="left-8 bottom-8 w-fit h-fit text-gray-50 text-sm z-20 absolute flex flex-row justify-start gap-4 items-center">
            <div>
              <h1>Showrooms</h1>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 28 26"
              >
                <path
                  fill="#F1F5F9"
                  d="M27.707 13.707l-12 12a.999.999 0 11-1.414-1.414L24.586 14H1a1 1 0 010-2h23.586L14.293 1.707A.999.999 0 1115.707.293l12 12a.999.999 0 010 1.414z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full min-h-[100vh] bg-gray-200 to-dark-6 "
        ref={newsRef}
      ></div>
      <div
        className="footer w-full min-h-[100vh] bg-aston-green p-12 font-optima"
        ref={footerRef}
      >
        <div className="w-full   border-b-[0.5px] border-gray-50 pt-12 pb-8">
          <h1 className=" text-gray-50 text-xl">Aston Martin</h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className=" flex flex-col lg:flex-row justify-start  items-start pt-24 gap-24 ">
            <div className="flex flex-col justify-start items-start gap-8">
              <h1 className=" text-lg text-gray-100">Home</h1>
              <h1 className=" text-lg text-gray-100">Our World</h1>
              <h1 className=" text-lg text-gray-100">Models</h1>
              <h1 className=" text-lg text-gray-100">Owners</h1>
            </div>
            <div className="flex flex-col justify-start items-start gap-8">
              <h1 className=" text-lg text-gray-100">Store</h1>
              <h1 className=" text-lg text-gray-100">Lifestyle</h1>
              <h1 className=" text-lg text-gray-100">F1</h1>
            </div>
            <div className="flex flex-col justify-start items-start gap-8 ">
              <h1 className=" text-lg text-gray-100">Corporate</h1>
              <h1 className=" text-lg text-gray-100">About us</h1>
              <h1 className=" text-lg text-gray-100">Media</h1>
              <h1 className=" text-lg text-gray-100">Careers</h1>
              <h1 className=" text-lg text-gray-100">Investors</h1>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start pt-24 ">
            <h1 className=" text-lg text-gray-100">Find a dealer</h1>
            <div className="find-dealer border-b-[0.5px] border-gray-50 w-full py-2 flex flex-row justify-between items-center">
              <input
                className="w-full bg-transparent outline-none text-gray-50"
                type="text"
                name="dealerLocation"
                placeholder="Location"
              ></input>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 79 79"
              >
                <path
                  fill="#f9fafb"
                  d="M78.4 76.5L58.5 56.6c12.2-13.2 11.9-33.7-.9-46.6C51 3.4 42.4.2 33.9.2S16.7 3.5 10.2 10C-3 23.2-3 44.5 10.1 57.6c6.6 6.6 15.2 9.8 23.7 9.8 8.2 0 16.4-3 22.8-8.9l19.9 19.9c.3.3.6.4.9.4.3 0 .7-.1.9-.4.6-.5.6-1.4.1-1.9zM33.8 64.8c-8.3 0-16.1-3.2-21.9-9.1-12.1-12.1-12.1-31.8 0-43.8C17.8 6 25.5 2.8 33.8 2.8c8.3 0 16.1 3.2 21.9 9.1 12.1 12.1 12.1 31.8 0 43.8-5.8 5.9-13.6 9.1-21.9 9.1z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
