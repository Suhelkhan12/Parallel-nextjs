import Link from "next/link";
import StandardSection from "../StandardSection/StandardSection";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-[999] w-full bg-white font-pjsans">
      <StandardSection>
        <div className=" flex items-center justify-between py-6">
          <Link href={"/"} className=" w-32">
            <svg width="100%" height="100%" viewBox="0 0 128 32">
              <path
                d="M22.519 8.58139C20.7536 6.36905 18.4655 5.255 15.5968 5.255C11.8664 5.255 8.93194 6.56874 6.70421 9.23825L7.32157 5.74897H4.61046L0 32.0001H2.70848L4.48962 21.9C5.92661 25.0189 9.08169 26.7399 12.6492 26.7399C15.3892 26.7399 17.8534 25.8386 20.1048 24.0336C22.3561 22.2285 23.7826 19.6851 24.3684 16.4139C24.8991 13.4159 24.2818 10.7963 22.519 8.58139ZM21.6652 16.2011C21.2107 18.705 20.1048 20.631 18.3 22.0209C16.6482 23.3766 14.5784 24.1192 12.4417 24.1229C10.2691 24.1229 8.46433 23.424 7.06937 21.9946C5.67441 20.5653 5.14375 18.621 5.51679 16.1249L5.5956 15.4654C6.0311 13.3241 7.21365 11.4075 8.93194 10.058C10.6139 8.64249 12.7444 7.87137 14.9426 7.88248C17.236 7.88248 19.0408 8.70225 20.3123 10.3418C21.5785 11.9419 22.0304 13.9099 21.6652 16.2037V16.2011Z"
                fill="black"
              ></path>
              <path
                d="M46.819 5.74886L46.044 10.1C44.6123 6.97852 41.4572 5.2549 37.8897 5.2549C35.1511 5.2506 32.4978 6.20739 30.3921 7.95857C28.1354 9.76364 26.7405 12.3018 26.1704 15.5782C25.645 18.5683 26.2519 21.1879 28.0094 23.4002C29.7668 25.6126 32.0655 26.724 34.9342 26.724C38.6646 26.724 41.6174 25.4102 43.8268 22.746L43.2173 26.2484H45.9205L49.5301 5.75412L46.819 5.74886ZM45.0221 15.996L44.9354 16.4847C44.5021 18.6401 43.334 20.5782 41.6307 21.968C39.9273 23.3577 37.7944 24.1128 35.5962 24.1044C33.2976 24.1044 31.4981 23.2846 30.2266 21.6871C28.9551 20.0476 28.505 18.0796 28.8763 15.7832C29.3281 13.2818 30.4289 11.3559 32.189 9.96596C33.8631 8.62138 35.9449 7.88658 38.0919 7.88237C40.2645 7.88237 42.0667 8.61544 43.4616 10.0553C44.8986 11.4873 45.3899 13.4999 45.0221 16.0039V15.996Z"
                fill="black"
              ></path>
              <path
                d="M55.8353 8.61836L56.3318 5.74916H53.6286L50.019 26.2435H52.7223L54.7346 14.8481C55.5542 10.1187 58.6752 8.04557 62.3977 8.04557L62.8889 5.4181C60.0202 5.21841 57.6821 6.28779 55.8353 8.61836Z"
                fill="black"
              ></path>
              <path
                d="M81.7823 5.74887L80.9941 10.1C79.5677 6.97852 76.41 5.2549 72.8451 5.2549C70.1064 5.25016 67.453 6.207 65.3475 7.95857C63.0909 9.76365 61.7011 12.3018 61.1258 15.5782C60.6004 18.5683 61.2046 21.1879 62.9648 23.4002C64.7249 25.6126 67.0262 26.724 69.8949 26.724C73.62 26.724 76.5728 25.4102 78.7874 22.746L78.1727 26.2484H80.8759L84.4855 5.75412L81.7823 5.74887ZM79.9775 15.996L79.8908 16.4847C79.4575 18.6401 78.2894 20.5782 76.5861 21.968C74.8828 23.3577 72.7498 24.1128 70.5517 24.1044C68.2582 24.1044 66.4535 23.2846 65.182 21.6871C63.9079 20.0476 63.4639 18.077 63.8291 15.7832C64.2835 13.2818 65.3895 11.3559 67.1496 9.96596C68.8207 8.61366 70.9031 7.87215 73.0526 7.86398C75.2252 7.86398 77.0221 8.59705 78.417 10.0369C79.8619 11.4873 80.3426 13.4999 79.9775 16.0039V15.996Z"
                fill="black"
              ></path>
              <path
                d="M89.6037 0L87.1444 13.9913L85.0161 26.2485H87.7198L89.8454 13.9913L92.3152 0H89.6037Z"
                fill="black"
              ></path>
              <path
                d="M95.4333 5.67822L92.5431 22.1866L90.8379 32.0003H93.5468L95.2547 22.1866L98.1449 5.67822H95.4333Z"
                fill="black"
              ></path>
              <path
                d="M118.246 8.46052C116.64 6.32439 114.276 5.255 111.2 5.255C108.277 5.26018 105.451 6.30201 103.225 8.19518C100.998 10.0883 99.5149 12.7101 99.0393 15.5941C98.5138 18.7471 99.0813 21.4113 100.763 23.5396C102.444 25.6678 104.898 26.7399 108.053 26.7399C111.949 26.7399 115.839 24.9768 117.809 21.9868L115.674 20.5916C113.998 22.9274 111.576 24.115 108.42 24.115C104.12 24.115 101.417 21.4875 101.577 17.3545H119.486C119.632 16.9409 119.743 16.5154 119.817 16.0828C120.423 13.1374 119.89 10.5888 118.246 8.46052ZM117.224 14.7297H101.987C103.243 10.5888 106.734 7.88248 111.034 7.88248C115.009 7.88248 117.555 10.2472 117.224 14.7297Z"
                fill="black"
              ></path>
              <path
                d="M125.311 0L122.851 13.9913L120.705 26.2485H123.414L125.542 13.9913L128.001 0H125.311Z"
                fill="black"
              ></path>
            </svg>
          </Link>
          <div className=" flex items-center gap-10">
            <Link href={"#"} className=" text-[.875rem]">
              About
            </Link>
            <Link href={"#"} className=" text-[.875rem]">
              Word
            </Link>
            <Link href={"#"} className=" text-[.875rem]">
              Services
            </Link>
            <Link href={"#"} className=" text-[.875rem]">
              Careers
            </Link>
            <Link href={"#"} className=" text-[.875rem]">
              Contact Us
            </Link>
          </div>
        </div>
      </StandardSection>
    </nav>
  );
};

export default Navbar;
