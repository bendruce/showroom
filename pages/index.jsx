import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";

export default function Page() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isNameVisible, setIsNameVisible] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isArrowVisible, setIsArrowVisible] = useState(false);
  const [openEmploymentBunning, setOpenEmploymentBunning] = useState(false);
  const [openEmploymentDH, setOpenEmploymentDH] = useState(false);

  // Function to toggle the openEmployment state
  function toggleOpenEmploymentDH() {
    setOpenEmploymentDH((prevState) => !prevState);
  }
  // Function to toggle the openEmployment state
  function toggleOpenEmploymentBunning() {
    setOpenEmploymentBunning((prevState) => !prevState);
  }

  //closes dropdown when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (dropdownVisible) {
        setDropdownVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dropdownVisible]);

  //loads in the name, description arrow incrementally
  useEffect(() => {
    setIsLoaded(true);
    const a = setTimeout(() => {
      setIsNameVisible(true);
    }, 1000);
    const b = setTimeout(() => {
      setIsTitleVisible(true);
    }, 2000);
    const c = setTimeout(() => {
      setIsArrowVisible(true);
    }, 3000);

    return () => {
      clearTimeout(a);
      clearTimeout(b);
      clearTimeout(c);
    };
  }, []);

  //checks if the arrow has been loaded at the start before the breathing animation starts
  useEffect(() => {
    if (isArrowVisible) {
      setIsLoaded(true);
    }
  }, [isArrowVisible]);

  //closes dropdown when the user clicks outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownVisible &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        event.target !== buttonRef.current
      ) {
        setDropdownVisible(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownVisible]);

  function toggleDropdown() {
    setDropdownVisible((prevState) => !prevState);
  }

  return (
    <>
      <div className="topnav-dropdown-container fixed w-full  flex flex-col justify-between z-50 bg-[rgba(0,0,0,.2)]">
        <div className="topNavBar flex flex-row justify-between w-full  h-[7.5vh] items-center p-3 sm:p-8 ">
          <Link href="#title">
            <h1 className="name w-fit text-2xl sm:text-4xl  font-font-custom-1 text-topnav-font">
              Benjamin W J Druce
            </h1>
          </Link>
          <div className="dropdown-container">
            <button
              onClick={toggleDropdown}
              className="hamburger-menu flex flex-col  justify-around w-6 h-6 bg-transparent border-none cursor-pointer p-0 sm:hidden"
              ref={buttonRef}
            >
              <span className="hamburger-line w-full h-0.5 bg-white"></span>
              <span className="hamburger-line w-full h-0.5 bg-white"></span>
              <span className="hamburger-line w-full h-0.5 bg-white"></span>
            </button>
          </div>
          <div className="link-container w-fit hidden sm:flex flex-row justify-between gap-12 text-light-text">
            <Link
              href="/#expertise"
              passHref
              className="text-center text-xl font-font-custom-1"
            >
              <p>// expertise</p>
            </Link>
            <Link
              href="/#employment"
              passHref
              className="text-center text-xl font-font-custom-1"
            >
              <p>// employment</p>
            </Link>
            <Link
              href="/#projects"
              passHref
              className="text-center text-xl font-font-custom-1"
            >
              <p>// projects</p>
            </Link>
            <Link
              href="/#contact-me"
              passHref
              className="text-center text-xl font-font-custom-1"
            >
              <p>// contactMe</p>
            </Link>
          </div>
        </div>
        {dropdownVisible && (
          <div
            className="dropdown-container flex flex-col justify-between w-full h-fit p-5 gap-5 text-light-text"
            ref={dropdownRef}
          >
            <Link
              href="/#expertise"
              passHref
              className="text-center text-xl font-font-custom-1"
            >
              <p>// expertise</p>
            </Link>
            <Link
              href="/#employment"
              passHref
              className="text-center text-xl font-font-custom-1"
            >
              <p>// employment</p>
            </Link>
            <Link
              href="/#projects"
              passHref
              className="text-center text-xl font-font-custom-1"
            >
              <p>// projects</p>
            </Link>
            <Link
              href="/#contact-me"
              passHref
              className="text-center text-xl font-font-custom-1"
            >
              <p>// contactMe</p>
            </Link>
          </div>
        )}
      </div>
      <div
        id="title"
        className={`title flex flex-col p-3 sm:p-12 w-full bg-gradient-to-b from-background-dark1 to-background-dark6 h-[100vh] -mb-px items-center justify-center gap-3 
    transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div
          className={`font-bold text-5xl sm:text-8xl text-center transition-opacity duration-1000 text-light-text ${
            isNameVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1>Benjamin Druce</h1>
        </div>
        <div
          className={`text-4xl sm:text-5xl text-center transition-opacity duration-1000 text-light-text ${
            isTitleVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1>Software Engineer</h1>
        </div>
        <div className=" pt-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-[10vw] h-[10vh] fill-white ${
              isArrowVisible ? "arrow-animate-breathe opacity-100" : "opacity-0"
            }`}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1a.5.5 0 01.5.5v11.793l3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 01.708-.708L7.5 13.293V1.5A.5.5 0 018 1z"
            ></path>
          </svg>
        </div>
      </div>

      <div
        id="expertise"
        className={`expertise flex flex-col sm:flex-row gap-4 sm:gap-20 p-3 sm:p-20 h-fit sm:h-[100vh] w-full bg-gradient-to-b from-background-dark6 to-background-dark2  items-center
  transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="box1 border-black border-2  w-full sm:min-h-[50vh] sm:h-80 p-4 mt-12 sm:mt-0 flex flex-col gap-4 sm:gap-12">
          <div className="flex flex-row justify-between gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5/12 h-[10vh] "
              viewBox="0 0 677 556"
            >
              <path
                fill="#fff"
                d="M48.672.881C21.875.881 0 22.432 0 48.681V404.79c0 26.249 21.875 47.8 48.672 47.8h194.4l-31.781 80.101h-71.14c-6.443 0-11.667 5.105-11.667 11.407 0 3.032 1.229 5.931 3.417 8.076a11.8 11.8 0 008.25 3.342h396.36c3.093 0 6.062-1.202 8.25-3.342 2.187-2.145 3.416-5.044 3.416-8.076 0-6.302-5.224-11.407-11.666-11.407h-71.14l-31.782-80.101h194.4c26.798 0 48.672-21.551 48.672-47.8V48.68c0-26.248-21.874-47.799-48.672-47.799H48.672zm0 22.825l579.32.006c14.208 0 25.339 10.908 25.339 24.974V321.53h-95.798v-54.107l.006-.005c-.006-6.298-5.224-11.403-11.667-11.408h-36.479a173.094 173.094 0 00-16.953-40.244l25.86-25.423a11.237 11.237 0 000-16.095l-49.864-49.028v-.005a11.81 11.81 0 00-8.271-3.362 11.797 11.797 0 00-8.266 3.362l-25.797 25.367a179.064 179.064 0 00-40.839-16.629v-35.94.005c0-3.031-1.229-5.93-3.416-8.075a11.803 11.803 0 00-8.25-3.343h-70.531c-6.443.006-11.667 5.116-11.667 11.418v35.97a178.349 178.349 0 00-40.797 16.64l-25.839-25.408v-.005a11.793 11.793 0 00-8.265-3.362 11.81 11.81 0 00-8.271 3.362l-49.86 49.028v.005a11.237 11.237 0 000 16.095l25.907 25.469a172.37 172.37 0 00-16.948 40.198H130.79c-6.443.005-11.662 5.11-11.667 11.408v54.107H23.326V48.681c0-14.067 11.135-24.974 25.338-24.974h.008zm266.067 85.712h47.197v33.438c0 5.359 3.818 10.001 9.172 11.147a155.429 155.429 0 0150.484 20.564v-.006c4.63 2.92 10.719 2.273 14.599-1.548l23.984-23.579 33.401 32.847-24.068 23.666c-3.849 3.796-4.49 9.691-1.542 14.195a150.04 150.04 0 0120.927 49.68c1.161 5.253 5.911 8.997 11.401 8.997h33.937v42.695H408.179a70.336 70.336 0 002.735-19.427c0-39.215-32.599-71.303-72.574-71.303-39.973 0-72.573 32.092-72.573 71.303 0 6.597.927 13.134 2.734 19.427H142.449v-42.695h33.99-.011c5.49 0 10.235-3.744 11.401-8.987a150.346 150.346 0 0120.927-49.64c2.948-4.504 2.302-10.403-1.547-14.194l-24.12-23.717 33.407-32.848 24.031 23.63c3.885 3.827 9.973 4.474 14.603 1.554a155.47 155.47 0 0150.438-20.583c5.349-1.151 9.161-5.788 9.161-11.147l.01-33.469zm23.598 144.188c27.303 0 49.246 21.542 49.246 48.483 0 6.71-1.412 13.318-4.146 19.428h-90.224c-2.688-6.109-4.146-12.717-4.146-19.428 0-26.941 21.948-48.483 49.245-48.483h.025zm-70.226 198.985h140.466l31.782 80.101H236.332l31.779-80.101z"
              ></path>
            </svg>
            <div className="mx-auto text-center w-7/12 flex flex-col items-center justify-center gap-3 text-xl font-bold text-light-text">
              <h1 className="w-fit border-b-8 border-red-300 inline-block">
                Software
              </h1>
              <h1>Development</h1>
            </div>
          </div>
          <div className="description3 w-full h-full text-light-text text-xl ">
            <p>
              Experience in both OOP and Functional programming. Proficient at
              Python, Java, HTML, CSS, JavaScript
            </p>
          </div>
        </div>
        <div className="box2 border-black border-2  w-full sm:min-h-[50vh] sm:h-80 p-4 flex flex-col gap-4 sm:gap-12">
          <div className="flex flex-row justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5/12 h-[10vh] "
              viewBox="0 0 730 768"
            >
              <path
                fill="#F7F7F7"
                d="M363.667 11.667c-24.579 0-47.522 11.63-67.183 30.822-19.667 19.198-36.604 46.052-50.76 78.714-28.307 65.328-45.385 154.12-45.385 252.133 0 98.016 17.078 186.8 45.385 252.12 14.156 32.661 31.093 59.521 50.76 78.713 19.661 19.194 42.604 30.818 67.183 30.818 24.578 0 47.521-11.625 67.188-30.818 19.666-19.193 36.614-46.052 50.77-78.713 28.307-65.328 45.386-154.107 45.386-252.12 0-98.016-17.079-186.813-45.386-252.133-14.156-32.662-31.104-59.516-50.77-78.714-19.667-19.193-42.61-30.822-67.188-30.822zm0 23.333c17.306 0 34.265 7.958 50.89 24.188 16.626 16.23 32.36 40.62 45.651 71.297 26.588 61.355 43.464 147.574 43.464 242.854 0 95.281-16.875 181.493-43.464 242.84-13.292 30.677-29.027 55.073-45.651 71.297-16.625 16.229-33.584 24.193-50.89 24.193-17.303 0-34.26-7.963-50.886-24.193-16.625-16.224-32.354-40.62-45.645-71.297-26.584-61.355-43.469-147.56-43.469-242.84 0-95.287 16.885-181.494 43.469-242.854 13.292-30.677 29.021-55.068 45.645-71.297C329.405 42.958 346.365 35 363.667 35z"
              ></path>
              <path
                fill="#F7F7F7"
                d="M676.88 192.506c-12.286-21.286-33.828-35.344-60.281-42.776-26.459-7.432-58.194-8.682-93.558-4.609-70.724 8.146-156.16 37.76-241.04 86.771-84.885 49.005-153.24 108.177-195.653 165.36C65.14 425.84 50.353 453.949 43.56 480.58c-6.786 26.625-5.385 52.306 6.901 73.593 12.292 21.287 33.834 35.344 60.287 42.776 26.459 7.432 58.188 8.672 93.552 4.599 70.724-8.146 156.147-37.749 241.04-86.755 84.885-49.01 153.24-108.197 195.653-165.373 21.214-28.588 36-56.688 42.792-83.312 6.792-26.631 5.391-52.312-6.901-73.593l-.005-.009zm-20.203 11.662c8.651 14.984 10.235 33.656 4.495 56.166-5.74 22.511-19 48.339-38.917 75.188-39.839 53.698-106.068 111.422-188.587 159.067-82.516 47.64-165.613 76.131-232.04 83.787-33.213 3.823-62.208 2.39-84.573-3.891-22.364-6.286-37.74-16.989-46.396-31.973-8.651-14.99-10.235-33.656-4.495-56.167 5.745-22.511 19-48.339 38.921-75.188 39.839-53.697 106.058-111.416 188.574-159.053 82.516-47.646 165.613-76.14 232.053-83.792 33.208-3.823 62.208-2.396 84.573 3.89 22.364 6.282 37.74 16.99 46.391 31.974l.001-.008z"
              ></path>
              <path
                fill="#F7F7F7"
                d="M48.223 195.244c-11.918 21.494-12.873 47.199-5.619 73.702 7.257 26.507 22.53 54.353 44.235 82.568 43.408 56.427 112.795 114.408 198.521 161.922 85.725 47.521 171.651 75.637 242.51 82.541 35.428 3.454 67.138 1.652 93.463-6.242 26.318-7.896 47.61-22.324 59.528-43.819 11.915-21.499 12.87-47.204 5.616-73.707-7.257-26.507-22.536-54.343-44.241-82.558-43.408-56.427-112.779-114.402-198.508-161.93-85.729-47.518-171.667-75.626-242.521-82.534-35.431-3.459-67.133-1.662-93.452 6.229-26.325 7.894-47.617 22.322-59.528 43.819l-.004.009zm20.401 11.311c8.388-15.133 23.578-26.107 45.829-32.781 22.252-6.674 51.22-8.61 84.493-5.366 66.546 6.492 150.136 33.532 233.476 79.725 83.334 46.193 150.554 102.748 191.328 155.743 20.384 26.501 34.089 52.092 40.224 74.498 6.13 22.407 4.875 41.099-3.511 56.236-8.393 15.136-23.578 26.107-45.829 32.781-22.254 6.67-51.22 8.61-84.495 5.363-66.546-6.493-150.125-33.526-233.457-79.721-83.339-46.19-150.562-102.743-191.34-155.752-20.38-26.496-34.094-52.089-40.224-74.497-6.134-22.405-4.875-41.1 3.514-56.233l-.008.004z"
              ></path>
              <circle cx="364" cy="371" r="50" fill="#F7F7F7"></circle>
            </svg>
            <div className="mx-auto text-center w-7/12 flex flex-col items-center justify-center gap-3  text-xl font-bold text-light-text">
              <h1 className="w-fit border-b-8 border-react-color inline-block">
                Web & App
              </h1>
              <h1>Development</h1>
            </div>
          </div>
          <div className="description2 w-full text-light-text text-xl">
            <p>
              Experienced in front and back end development for Web Development
              and App Design. Proficient at Node.js, React, HTML, CSS,
              JavaScript
            </p>
          </div>
        </div>
        <div className="box3 border-black border-2  w-full sm:min-h-[50vh] sm:h-80 p-4 flex flex-col gap-4 sm:gap-12">
          <div className="flex flex-row justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4/12 h-[10vh] "
              viewBox="0 0 399 599"
            >
              <path
                fill="#F7F7F7"
                d="M199.667 299.333c54.88 0 99.557-45.797 99.557-102.046v-56.995l67.079-28.62c4.354-1.865 7.343-6.099 7.588-10.828.25-4.73-2.364-9.208-6.469-11.573L205.649 2.16c-3.734-1.989-8.088-1.989-11.823 0L32.053 89.272c-1.12.62-1.99 1.245-2.865 2.114 0 0-.125.125-.125.25-.994.995-1.62 2.115-2.24 3.36-.124.375-.25.745-.5 1.12-.374 1.12-.62 2.364-.744 3.609 0 .25-.125.375-.125.62v74.666c0 6.844 5.599 12.443 12.443 12.443 6.843 0 12.442-5.599 12.442-12.443v-55.874l49.776 21.281v56.995c0 56.125 44.678 101.921 99.558 101.921h-.006zm74.666-102.046c0 42.562-33.473 77.156-74.666 77.156-41.194 0-74.667-34.594-74.667-77.156v-12.693c49.651-12.568 99.803-12.568 149.333 0v12.693zm0-38.328c-49.65-11.698-99.682-11.698-149.333 0v-24.14c49.651-12.568 99.803-12.568 149.333 0v24.14zM66.507 98.98l133.156-71.683L332.819 98.98l-38.454 16.427c-.375-.25-.869-.375-1.244-.62a9.381 9.381 0 00-2.24-1.12c-.25-.125-.375-.25-.62-.375-60.104-17.172-120.959-17.172-181.067 0-.25.125-.375.25-.619.375-.87.25-1.495.745-2.24 1.12-.375.25-.87.375-1.245.62L66.507 98.98zM.56 431.373V585.56c0 6.844 5.599 12.443 12.443 12.443h373.333c6.844 0 12.443-5.599 12.443-12.443V431.373c0-18.917-6.099-36.958-17.547-52.39-11.448-15.432-28.125-26.755-47.167-31.86l-36.213-9.584c-9.333-2.489-18.047-6.968-25.385-13.192-.375-.375-.87-.5-1.245-.745-.25-.25-.5-.5-.745-.62-.25-.125-.5-.125-.87-.25-.869-.375-1.744-.62-2.739-.87l-1.865-.375c-.25 0-.5-.125-.745-.125h.125c-.619 0-1.119.25-1.619.375-.745.125-1.495.25-2.24.5-.87.25-1.745.745-2.49 1.245-.5.375-.994.62-1.494.995-.745.62-1.37 1.495-1.99 2.364-.25.375-.62.5-.745.87l-54.136 103.662-54.01-103.786c-.25-.375-.62-.62-.87-.995-.25-.25-.25-.619-.5-.869-.25-.375-.62-.5-.995-.745-.62-.62-1.37-1.245-2.115-1.62-.619-.375-1.244-.745-1.989-.995-.745-.25-1.495-.5-2.365-.619-.744-.125-1.494-.25-2.239-.125-.745 0-1.62.125-2.365.25-.87.125-1.62.375-2.364.744-.375.125-.87.125-1.245.375-.375.25-.5.5-.87.745-.375.25-.745.375-1.12.62-7.343 6.099-15.802 10.578-25.385 13.193l-36.213 9.708c-19.042 5.104-35.344 16.052-47.167 31.86C6.654 394.416.56 412.457.56 431.373zm24.885 0c0-13.437 4.354-26.38 12.568-37.458 8.464-11.198 20.036-19.042 33.724-22.771l36.339-9.708c8.088-2.24 15.682-5.599 22.65-9.709l58.115 103.042c2.24 3.979 6.349 6.344 10.828 6.344 4.479 0 8.589-2.365 10.828-6.349l58.115-102.918c7.219 4.229 14.932 7.714 23.021 9.834l36.088 9.583c13.563 3.609 25.386 11.698 33.599 22.651 8.214 11.078 12.568 24.016 12.568 37.458l.005 141.734H25.44l.005-141.733z"
              ></path>
            </svg>
            <div className="mx-auto text-center w-7/12 flex flex-col items-center justify-center gap-3 text-xl font-bold text-light-text">
              <h1 className="w-fit border-b-8 border-green-300 inline-block whitespace-nowrap">
                Computer Science
              </h1>
              <h1>Student</h1>
            </div>
          </div>
          <div className="description3 w-full text-light-text text-xl">
            <p>
              Second Year Computer Science BSc student at Loughborough
              University
            </p>
          </div>
        </div>
      </div>
      <div
        id="employment"
        className={`employment flex flex-col justify-center p-3 sm:p-12 w-full bg-gradient-to-b from-background-dark2 to-background-dark4 min-h-[100vh] h-fit -mb-px items-center gap-4 sm:gap-8 
    transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="w-[85%] sm:w-[80%] h-fit bg-custom-main p-4 sm:p-8 rounded-xl flex flex-row justify-between">
          <h1 className="text-light-text text-xl sm:text-4xl">
            Machine operator @ GT Bunning & Sons
          </h1>
          <button
            className="flex items-center justify-center"
            onClick={toggleOpenEmploymentBunning}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 sm:w-10"
              viewBox="0 0 12 12"
            >
              <path
                fill="#F7F7F7"
                fillRule="evenodd"
                d="M6 0a.5.5 0 01.5.5v5h5a.5.5 0 010 1h-5v5a.5.5 0 01-1 0v-5h-5a.5.5 0 010-1h5v-5A.5.5 0 016 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        {openEmploymentBunning && (
          <div className="w-[85%] sm:w-[80%] h-fit bg-custom-main-darker p-4 sm:p-8 rounded-xl flex flex-col gap-8">
            <div className="row1 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="location flex flex-row gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 sm:w-7"
                  viewBox="0 0 12 16"
                >
                  <path
                    fill="#F7F7F7"
                    d="M6 16s6-5.686 6-10A6 6 0 100 6c0 4.314 6 10 6 10zm0-7a3 3 0 110-6 3 3 0 010 6z"
                  ></path>
                </svg>
                <h1 className="text-light-text text-xl sm:text-4xl">
                  Gressenhall, UK
                </h1>
              </div>
              <div className="date flex flex-row gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 sm:w-7"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#F7F7F7"
                    d="M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z"
                  ></path>
                </svg>
                <h1 className="text-light-text text-xl sm:text-4xl">
                  07-22 to 09-22
                </h1>
              </div>
            </div>
            <div>
              <h1 className="text-light-text text-lg sm:text-xl ">
                Worked within multiple teams on the production line to
                manufacture parts used to create agricultural and industrial
                machinery for a company with a turnover of £17 million in 2021.
              </h1>
            </div>
          </div>
        )}
        <div className="w-[85%] sm:w-[80%] h-fit bg-custom-main p-4 sm:p-8 rounded-xl flex flex-row justify-between">
          <h1 className="text-light-text text-xl sm:text-4xl">
            Bartender @ Dial House
          </h1>
          <button
            className="flex items-center justify-center"
            onClick={toggleOpenEmploymentDH}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 sm:w-10"
              viewBox="0 0 12 12"
            >
              <path
                fill="#F7F7F7"
                fillRule="evenodd"
                d="M6 0a.5.5 0 01.5.5v5h5a.5.5 0 010 1h-5v5a.5.5 0 01-1 0v-5h-5a.5.5 0 010-1h5v-5A.5.5 0 016 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        {openEmploymentDH && (
          <div className="w-[85%] sm:w-[80%] h-fit bg-custom-main-darker p-4 sm:p-8 rounded-xl flex flex-col gap-8">
            <div className="row1 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="location flex flex-row gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 sm:w-7"
                  viewBox="0 0 12 16"
                >
                  <path
                    fill="#F7F7F7"
                    d="M6 16s6-5.686 6-10A6 6 0 100 6c0 4.314 6 10 6 10zm0-7a3 3 0 110-6 3 3 0 010 6z"
                  ></path>
                </svg>
                <h1 className="text-light-text text-xl sm:text-4xl">
                  Reepham, UK
                </h1>
              </div>

              <div className="date flex flex-row gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 sm:w-7"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#F7F7F7"
                    d="M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z"
                  ></path>
                </svg>
                <h1 className="text-light-text text-xl sm:text-4xl">
                  07-20 to 09-21
                </h1>
              </div>
            </div>
            <div>
              <h1 className="text-light-text text-lg sm:text-xl ">
                Worked as a bartender within a front of house team, engaging
                with customers whilst creating and serving their drinks.
              </h1>
            </div>
          </div>
        )}
      </div>
      <div
        id="projects"
        className={`projects text-light-text flex flex-col sm:flex-row p-3 sm:p-12 w-full bg-gradient-to-b from-background-dark4 to-background-dark6 h-fit -mb-px items-center justify-center gap-3 
    transition-opacity  ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="box1 border-black border-2  w-full sm:min-h-[50vh] sm:h-96 p-4 flex flex-col gap-4 sm:gap-12">
          <div className="flex flex-row p-4 w-">
            <div className="w-5/12 flex flex-col items-center">
              <img
                src="/images/movement-clinics-logo.jpg"
                alt="Logo"
                className="h-[10vh]  rounded shadow mr-3"
              ></img>
            </div>

            <div className="mx-auto text-center w-7/12 flex flex-col items-center justify-center gap-3 text-xl font-bold text-light-text">
              <h1 className="w-fit border-b-8 border-black inline-block whitespace-nowrap">
                Movement
              </h1>
              <h1>Clinics</h1>
            </div>
          </div>
          <div className="w-full h-fit">
            <h1>
              Creating a bespoke website for a sports therapy clinic using
              Next.js and React. This project involves using AWS for hosting,
              Stripe for payments and a custom booking system.
            </h1>
          </div>
        </div>
        <div className="box2 border-black border-2  w-full sm:min-h-[50vh] sm:h-96  p-4 flex flex-col gap-4 sm:gap-12">
          <div className="flex flex-row p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5/12 h-[10vh]"
              viewBox="0 0 710 710"
            >
              <path
                fill="#F7F7F7"
                d="M695.307 224.093c18.552-18.552 18.552-48.645 0-67.197l-34.167-34.167 6.448-6.448c9.844-9.843 15.271-22.964 15.271-36.88 0-13.915-5.433-27.035-15.271-36.88-20.364-20.364-53.511-20.364-73.875 0l-6.448 6.448-34.166-34.166c-18.552-18.552-48.646-18.552-67.198 0l-17.65 17.65c-6.787 6.787-11.089 15.162-12.896 23.984l-19.574-19.573c-8.937-8.937-20.926-13.917-33.598-13.917s-24.662 4.979-33.599 13.917l-17.651 17.65c-8.937 8.938-13.917 20.927-13.917 33.6 0 12.671 4.979 24.661 13.917 33.598l81.792 81.792-230.106 230-81.792-81.792c-18.552-18.552-48.645-18.552-67.197 0l-17.651 17.651C27.04 378.3 22.06 390.289 22.06 402.961s4.98 24.662 13.918 33.599l19.573 19.573c-8.823 1.813-17.197 6.11-23.984 12.896l-17.541 17.536c-18.552 18.552-18.552 48.646 0 67.198l34.166 34.166-6.447 6.448c-20.364 20.364-20.364 53.511 0 73.875 9.843 9.843 22.964 15.27 36.88 15.27 13.916 0 27.036-5.432 36.88-15.27l6.447-6.448 34.167 34.167c8.938 8.937 20.927 13.917 33.599 13.917 12.672 0 24.661-4.979 33.598-13.917l17.651-17.651c6.787-6.786 11.089-15.161 12.896-23.984l19.573 19.573c9.276 9.276 21.495 13.917 33.599 13.917 12.104 0 24.323-4.64 33.599-13.917l17.65-17.65c8.938-8.938 13.918-20.927 13.918-33.599 0-12.672-4.98-24.661-13.918-33.599l-81.792-81.792 230.334-230.333 81.792 81.792c8.937 8.937 20.926 13.917 33.598 13.917s24.662-4.979 33.599-13.917l17.651-17.651c18.552-18.552 18.552-48.645 0-67.197l-19.574-19.573c8.823-1.813 17.198-6.11 23.984-12.896l17.43-17.318zm-86.323-166.52c11.99-11.99 31.448-11.99 43.443 0 5.77 5.771 8.937 13.464 8.937 21.719 0 8.26-3.167 15.953-8.937 21.719l-6.448 6.448-43.443-43.443 6.448-6.443zm-508.64 595.414c-11.542 11.541-31.792 11.541-43.443 0-11.99-11.99-11.99-31.448 0-43.443l6.448-6.448 43.443 43.443-6.448 6.448zm125.464 10.177l-17.651 17.65c-10.182 10.183-26.697 10.183-36.765 0L29.179 538.601c-10.183-10.182-10.183-26.697 0-36.765l17.65-17.651c5.089-5.088 11.766-7.578 18.443-7.578 6.677 0 13.234 2.49 18.328 7.578l142.32 142.32c9.953 10.073 9.953 26.588-.115 36.656l.003.003zm124.896-40.386c0 6.901-2.714 13.464-7.578 18.443l-17.651 17.651c-10.068 10.182-26.584 10.182-36.765 0l-47.631-47.631v-.115L98.866 469.033h-.115l-47.63-47.631c-10.183-10.182-10.183-26.697 0-36.765l17.65-17.651c5.089-5.088 11.766-7.578 18.443-7.578 6.677 0 13.349 2.49 18.443 7.578l237.346 237.347c4.974 4.979 7.693 11.542 7.693 18.443l.008.002zm-89.489-130.552l-43.443-43.442L448.105 218.45l43.443 43.443-230.333 230.333zm396.973-166.08l-17.651 17.651c-9.843 9.844-26.926 9.844-36.765 0L366.305 106.224c-4.864-4.865-7.578-11.427-7.578-18.443 0-6.901 2.714-13.464 7.578-18.443l17.651-17.65c5.089-5.089 11.766-7.578 18.443-7.578 6.677 0 13.349 2.49 18.442 7.578l189.84 189.84h.115l47.631 47.63c9.828 10.297 9.828 26.812-.24 36.995l.001-.007zm-32.469-99.666L483.505 84.266c-10.182-10.182-10.182-26.697 0-36.765l17.651-17.65c5.089-5.09 11.766-7.579 18.443-7.579 6.677 0 13.349 2.49 18.442 7.578l142.094 142.094c10.182 10.182 10.182 26.697 0 36.765l-17.651 17.651c-10.073 10.182-26.588 10.291-36.771.114l.006.006z"
              ></path>
              <path
                fill="#F7F7F7"
                d="M627.362 32H699.583V77.77199999999999H627.362z"
                transform="rotate(43.25 627.362 32)"
              ></path>
              <path
                fill="#F7F7F7"
                d="M60.362 597.661H132.583V643.433H60.362z"
                transform="rotate(43.25 60.362 597.661)"
              ></path>
              <path
                fill="#F7F7F7"
                d="M202 437.467H535V537.467H202z"
                transform="rotate(-45 202 437.467)"
              ></path>
            </svg>
            <div className="mx-auto text-center w-7/12 flex flex-col items-center justify-center gap-3 text-xl font-bold text-light-text">
              <h1 className="w-fit border-b-8 border-sigma-color inline-block whitespace-nowrap">
                App Development
              </h1>
              <h1>Module</h1>
            </div>
          </div>

          <div className="w-full h-fit">
            <h1>
              Created a workout tracker app in Java using Android Studio and a
              Firebase Database for an app development module during year two of
              University.
            </h1>
          </div>
        </div>
        <div className="box3 border-black border-2  w-full sm:min-h-[50vh] sm:h-96 p-4 flex flex-col gap-4 sm:gap-12">
          <div className="flex flex-row p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5/12 h-[10vh]"
              viewBox="0 0 598 598"
            >
              <path
                fill="#F7F7F7"
                d="M224 388.933h149.333c24.708 0 44.803-20.093 44.803-44.802V45.464c0-24.708-20.093-44.803-44.803-44.803H224c-24.708 0-44.803 20.094-44.803 44.803v298.667c0 24.702 20.094 44.797 44.803 44.797v.005zM209.068 45.467c0-8.235 6.698-14.932 14.932-14.932h149.333c8.235 0 14.932 6.698 14.932 14.932v298.666c0 8.235-6.698 14.932-14.932 14.932H224c-8.234 0-14.932-6.697-14.932-14.932V45.467zM149.333 508.4h-134.4C6.69 508.4.001 515.093.001 523.332v59.735c0 8.245 6.693 14.932 14.932 14.932h134.4c8.245 0 14.932-6.693 14.932-14.932v-59.735c0-8.245-6.687-14.932-14.932-14.932zm-14.932 59.735H29.865v-29.864h104.531l.005 29.864zm448-59.735h-134.4c-8.244 0-14.932 6.693-14.932 14.932v59.735c0 8.245 6.693 14.932 14.932 14.932h134.4c8.245 0 14.932-6.693 14.932-14.932v-59.735c0-8.245-6.692-14.932-14.932-14.932zm-14.932 59.735H462.933v-29.864h104.531l.005 29.864zm-201.6-59.735h-134.4c-8.244 0-14.932 6.693-14.932 14.932v59.735c0 8.245 6.693 14.932 14.932 14.932h134.4c8.245 0 14.932-6.693 14.932-14.932v-59.735c0-8.245-6.692-14.932-14.937-14.932h.005zm-14.932 59.735h-104.53v-29.864h104.53v29.864zm-112-358.4h9.672c1.037 3.463 2.396 6.797 4.099 9.916l-6.823 6.823c-5.833 5.834-5.833 15.287 0 21.115a14.85 14.85 0 0010.558 4.375A14.87 14.87 0 00267 247.589l6.823-6.823a52.393 52.393 0 009.916 4.099v9.667c0 8.244 6.693 14.932 14.932 14.932 8.245 0 14.932-6.693 14.932-14.932v-9.672c3.464-1.037 6.797-2.396 9.917-4.099l6.823 6.823a14.848 14.848 0 0010.557 4.375c3.823 0 7.646-1.459 10.558-4.375 5.833-5.834 5.833-15.287 0-21.115l-6.823-6.823a52.525 52.525 0 004.099-9.916l9.672.005c8.244 0 14.932-6.693 14.932-14.932 0-8.245-6.693-14.932-14.932-14.932h-9.672c-1.037-3.464-2.396-6.797-4.099-9.917l6.823-6.823c5.833-5.833 5.833-15.287 0-21.115-5.823-5.833-15.292-5.833-21.115 0l-6.823 6.823a52.507 52.507 0 00-9.917-4.099v-9.671c0-8.245-6.692-14.932-14.932-14.932-8.244 0-14.932 6.692-14.932 14.932v9.671c-3.463 1.037-6.796 2.396-9.916 4.099L267 142.016c-5.823-5.833-15.292-5.833-21.115 0-5.833 5.834-5.833 15.287 0 21.115l6.823 6.823a52.441 52.441 0 00-4.099 9.917l-9.672-.005c-8.244 0-14.932 6.692-14.932 14.932 0 8.244 6.693 14.937 14.932 14.937zm59.735-37.334c12.349 0 22.401 10.053 22.401 22.402s-10.052 22.401-22.401 22.401-22.401-10.052-22.401-22.401c0-12.354 10.052-22.402 22.401-22.402zM67.205 478.535v-29.864c0-8.245 6.693-14.932 14.932-14.932h201.6v-14.932c0-8.245 6.693-14.932 14.932-14.932 8.245 0 14.932 6.692 14.932 14.932v14.932h201.6c8.245 0 14.932 6.692 14.932 14.932v29.864c0 8.245-6.692 14.932-14.932 14.932-8.244 0-14.932-6.693-14.932-14.932v-14.932H313.603v14.932c0 8.245-6.693 14.932-14.932 14.932-8.245 0-14.932-6.693-14.932-14.932v-14.932H97.072v14.932c0 8.245-6.693 14.932-14.932 14.932-8.245.005-14.937-6.688-14.937-14.932h.002z"
              ></path>
              <path fill="#F7F7F7" d="M448 527H574V577H448z"></path>
              <path fill="#F7F7F7" d="M239 530H358V577H239z"></path>
              <path fill="#F7F7F7" d="M22 526H146V577H22z"></path>
            </svg>
            <div className="mx-auto text-center w-7/12 flex flex-col items-center justify-center gap-3 text-xl font-bold text-light-text">
              <h1 className="w-fit border-b-8 border-purple-300  inline-block whitespace-nowrap">
                Team Projects
              </h1>
              <h1>Module</h1>
            </div>
          </div>

          <div className="w-full h-fit">
            <h1>
              Completed a 3-stage team project module. This has involved
              creating a knowledge and tasks management system using HTML,
              Node.js, React, JavaScript, SQL and GCP. The current stage
              involves creating an API for a team member analytics system.
            </h1>
          </div>
        </div>
      </div>
      <div
        id="contact-me"
        className="contact-me h-fit w-full flex flex-col bg-gradient-to-b from-background-dark6 to-background-dark3 p-4 sm:p-12 items-center gap-24 sm:gap-48"
      >
        <h1 className="pt-24 text-6xl sm:text-9xl text-center font-bold text-topnav-font">
          Avaliable for hire
        </h1>
        <div className="work flex flex-col h-fit w-full gap-5 sm:gap-12  items-center p-4">
          <h1 className="text-light-text text-center text-2xl sm:text-4xl">
            Seeking software engineering projects that challenge and inspire
          </h1>
          <h1 className="text-light-text text-center text-2xl sm:text-4xl">
            Contact me to explore how my expertise can benefit your initiatives
          </h1>
          <h1
            className={` text-3xl text-topnav-font 
              animate-breathe opacity-100" : "opacity-0
            }`}
          >
            <a href="mailto:hello@benwjd.com?subject=Software%20Opportunity">
              hello@benwjd.com
            </a>
          </h1>
        </div>
      </div>
      <div className="footer w-full h-fit bg-gray-950 flex flex-col sm:flex-row text-light-text p-3 items-center justify-between sm:px-12">
        <h1>Built from Scratch by Me</h1>
        <a
          href="/files/benjamin-druce-cv.pdf"
          alt="alt text"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download My CV
        </a>
      </div>
    </>
  );
}
