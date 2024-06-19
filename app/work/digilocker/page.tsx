import CasestudyBottomDetials from "@/component/CasestudyBottomDetials/CasestudyBottomDetials";
import CasestudyVideo from "@/component/CasestudyVideo/CasestudyVideo";
import StandardSection from "@/component/StandardSection/StandardSection";
import Image from "next/image";
import React from "react";
import img1 from "/public/casestudyImages/1.png";
import img2 from "/public/casestudyImages/2.png";
import img3 from "/public/casestudyImages/3.png";
import img4 from "/public/casestudyImages/4.png";
import img5 from "/public/casestudyImages/g1.png";
import img6 from "/public/casestudyImages/g2.png";
import img7 from "/public/casestudyImages/lala.png";
import img8 from "/public/casestudyImages/ddd.png";
import img9 from "/public/casestudyImages/77777.png";
import lottie from "/public/Problem1_TextAnimation.json";
import lottie2 from "/public/Problem2_TextAnimation.json";
import lottie3 from "/public/fetchaadhar.json";
import lottie4 from "/public/mobilescreen.json";
import lottie5 from "/public/animatin.json";
import { Metadata } from "next";
import LottiePlayer from "@/component/LottiePlayer/LottiePlayer";
import { TwitterTweetEmbed } from "react-twitter-embed";
import TweetEmbed from "@/component/Tweet/TweetEmbed";

export const metadata: Metadata = {
  title: "Digilocker Case Study | Parallel",
  description: "Reimagining digital documents for a billion Indians",
};

const page = () => {
  return (
    <>
      <div className=" mt-24">
        <div className="pt-8 pb-14">
          <StandardSection>
            <div className="">
              <Image
                src={"/casestudyImages/digi.svg"}
                alt="Digilocker logo"
                width={128}
                height={100}
                className=""
              />
            </div>
            <div className="mt-4">
              <h1 className=" text-[4.5rem] font-extrabold lh-140">
                Every document, all at once
              </h1>
            </div>
            <div className="mt-2 text-[1.5rem] lh-140">
              <p>Reimagining digital documents for a billion Indians</p>
            </div>
          </StandardSection>
        </div>
        <div className="">
          <CasestudyVideo />
        </div>
        <CasestudyBottomDetials />
        <StandardSection>
          <div className=" py-32">
            <h2 className=" text-[2.25rem] font-medium lh-140">
              A great idea <br />
              <span className=" font-bold leading-6">that wasn’t working</span>
            </h2>
            <p className=" mt-6 text-[1.25rem] font-light text-[#111]/60 lh-180">
              Digilocker was a massive step towards India’s paperless
              governance. The platform{" "}
              <span className=" text-[#111] font-bold">
                enables millions to issue and verify government documents &
                certificates digitally,
              </span>{" "}
              thus eliminating the use of physical documents.
              <br /> <br />
              As great as the idea was, enough people were still not using it
              pertaining to high drop-offs and uninstall rates.
            </p>
          </div>
        </StandardSection>
        <StandardSection>
          <div className="  py-32">
            <div className="flex items-start justify-between ">
              <h2 className=" text-[2.25rem] font-medium lh-140">
                What was the
                <br />
                <span className=" text-[#111] font-bold bg-[url('/casestudyImages/heading-bg.svg')] bg-cover">
                  problem?
                </span>
              </h2>
              <div className=" max-w-[46.5625rem]">
                <p className="text-[1.25rem] font-light text-[#111]/60 lh-180">
                  Before we got to work on overhauling the app flow and
                  interface, we had to identify the problem.
                  <br />
                  <br />
                  We ran a{" "}
                  <span className=" font-bold text-[#111]">
                    Design sprint
                  </span>{" "}
                  with the Digilocker team, which started with identifying the
                  issues and framing the critical problem statements for the
                  team to work on.
                </p>
              </div>
            </div>
            <div className=" mt-[6rem] flex items-center justify-between gap-32">
              <Image src={img1} alt="People sitting and discussing things" />
              <Image
                src={img2}
                alt="Parallel team discussing designs with Digilocker team"
                sizes="(min-width: 808px) 50vw, 100vw"
              />
              <Image src={img3} alt="People sitting and discussing" />
            </div>
          </div>
        </StandardSection>

        <section>
          <div className="flex items-end justify-between">
            <div className=" max-w-[50%] py-20 pr-[5.625rem] pl-[2.5rem]">
              <div className=" text-[#111]/40 uppercase font-medium text-base tracking-widest">
                Problem 1
              </div>
              <div className=" mt-4">
                <h2 className="text-[2.25rem] font-medium lh-140">
                  Users didn’t really
                  <br />
                  <span className=" font-bold text-[#111] bg-[url('/casestudyImages/heading-bg.svg')] bg-cover">
                    understand
                  </span>
                  <br />
                  what Digilocker was
                </h2>
              </div>
              <div className=" mt-4 max-w-[30.125rem] w-full">
                <p className="text-[1.25rem] font-light text-[#111]/60 lh-180">
                  People were confusing Digilocker{" "}
                  <span className=" font-bold text-[#111]">
                    for a drive where they could upload documents.
                  </span>
                  <br />
                  <br />
                  This was causing a major trust problem because user-uploaded
                  documents were not considered valid for official purposes and
                  were rejected by government officials when presented by the
                  users.
                  <br />
                  <br />
                  Moreover, users were misusing the drive space provided to
                  upload images, music and movies.
                </p>
              </div>
            </div>
            <div className=" max-w-[50%] relative">
              <Image
                src={img4}
                alt="Old man sitting and reading papers"
                className="z-10"
              />
              <div className="absolute bottom-8 left-8 z-20">
                <LottiePlayer src={lottie} />
              </div>
            </div>
          </div>
        </section>
        <div className="bg-[#323235]">
          <StandardSection>
            <div className=" pt-72 relative">
              <h2 className=" mt-6 text-[2.25rem] lh-140 text-white text-center">
                <span className="font-bold">showing</span> them all that was
                possible
              </h2>
              <div className=" mt-16 h-72 w-[1px] bg-white mx-auto"></div>
              <div className=" bg-[#f3f1ff] rounded-lg text-[#111] flex flex-col px-8 pt-6 pb-6 absolute bottom-8 right-8 gap-2">
                <span className=" text-xs text-[#111]/40 font-medium -tracking-tighter">
                  DID YOU KNOW
                </span>
                <h2 className=" text-[#353535] text-xl font-medium lh-180">
                  Traffic police across India now accept
                  <br />
                  Driving License from Digilocker
                </h2>
              </div>
              <div className=" w-80 absolute top-24 -right-8">
                <Image src={img5} alt="sometext" />
              </div>
              <div className=" w-72 absolute -bottom-4">
                <Image src={img6} alt="sometext" />
              </div>
            </div>
          </StandardSection>
        </div>
        <section>
          <div className=" pt-32 flex items-center">
            <div className=" w-[50%] pl-10">
              <div className=" text-[#111]/40">1/2</div>
              <h2 className=" mt-4 text-[2.25rem] lh-140">
                <span className=" font-bold">Facilitating discovery</span>
                <br />
                before a user signs up
              </h2>
              <div className=" mt-4 max-w-[32.5rem] w-full text-[1.125rem] text-[#111]/40 font-light">
                <p>
                  Realising how crucial it was to educate the users on the usage
                  of the Digilocker, we added introductory screens as a part of
                  the pre-onboarding so{" "}
                  <span className=" font-bold text-[#111]">
                    users understood what they could do
                  </span>{" "}
                  with the app and how to do it{" "}
                  <span className=" font-bold text-[#111]">
                    even before signing up.
                  </span>
                  <br />
                  <br />
                  Now, information like uploaded documents are not considered
                  valid for official purposes and Digilocker’s documents are
                  legally valid under the IT Act were clearly communicated to
                  the user.
                </p>
              </div>
            </div>
            <div className=" w-[50%] ml-auto">
              <Image src={img7} alt="someimage" />
            </div>
          </div>
          <div className=" flex items-center">
            <div className=" w-[50%] mr-auto">
              <Image src={img8} alt="someimage" />
            </div>
            <div className=" w-[50%] pl-20">
              <div className=" text-[#111]/40">2/2</div>
              <h2 className=" mt-4 text-[2.25rem] lh-140">
                <span className=" font-bold">Verification badge</span>
                <br />
                as a trust marker
              </h2>
              <div className=" mt-4 max-w-[32.5rem] w-full text-[1.125rem] text-[#111]/40 font-light">
                <p>
                  We added a prominent verification mark to{" "}
                  <span className=" font-bold text-[#111]">
                    help both users and authorities distinguish
                  </span>{" "}
                  between verified and self-uploaded non-verified documents.
                </p>
              </div>
            </div>
          </div>
          <div className=" flex items-center">
            <div className=" w-[50%] pl-20">
              <div className=" text-[#111]/40">PROBLEM 2</div>
              <h2 className=" text-[2.25rem] font-medium lh-140">
                Massive{" "}
                <span className=" text-[#111] font-bold bg-[url('/casestudyImages/heading-bg.svg')] bg-cover">
                  user dropoffs
                </span>{" "}
                <br />
                during the onboarding
              </h2>
              <div className=" mt-4 max-w-[32.5rem] w-full text-[1.125rem] text-[#111]/40 font-light">
                <p>
                  The{" "}
                  <span className=" font-bold text-[#111]">
                    drop-offs during the onboarding process were a high 60%
                  </span>
                  and we identified the confusing onboarding process as the
                  primary reason for it. There were two ways for the user to
                  onboard. ‍<br /> <br />{" "}
                  <span className=" font-bold text-[#111]">Using Aadhaar:</span>{" "}
                  Validating using Aadhaar number was the only way to access
                  documents because we needed a robust identity verification
                  before letting users fetch all the documents. ‍ ‍<br /> <br />{" "}
                  <span className=" font-bold text-[#111]">Using Mobile:</span>{" "}
                  This allowed the users to set up the app without verifying
                  their Aadhaar, but they could not access documents which
                  caused all the confusion.
                </p>
              </div>
            </div>
            <div className=" w-[50%] relative">
              <Image src={img9} alt="someimg" />
              <div className=" absolute bottom-8 left-8">
                <LottiePlayer src={lottie2} />
              </div>
            </div>
          </div>
        </section>
        <div className="bg-[#323235]">
          <StandardSection>
            <div className=" pt-72 relative">
              <div className=" rounded-2xl border border-white p-4 max-w-96 mx-auto">
                <LottiePlayer src={lottie3} />
              </div>
              <h2 className=" mt-6 text-[2.25rem] lh-140 text-white text-center">
                <span className="font-bold">helping them choose better</span>{" "}
                with the power of defaults
              </h2>
              <div className=" mt-16 h-72 w-[1px] bg-white mx-auto"></div>
            </div>
          </StandardSection>
        </div>
        <section>
          <div className=" flex items-center ">
            <div className=" w-[50%] pl-20 pt-20 pr-20">
              <h2 className=" text-[2.25rem] font-medium lh-140">
                <span className=" font-bold  text-[#111]">
                  Keeping it simple
                </span>{" "}
                for our users
              </h2>
              <div className=" mt-4 max-w-[32.5rem] w-full text-[1.125rem] text-[#111]/40 font-light">
                <p>
                  We revamped the onboarding and nudged the users to add their
                  Aadhaar by educating them about the{" "}
                  <span className=" font-bold  text-[#111]">
                    benefits of adding their Aadhaar
                  </span>{" "}
                  and the drawbacks of not doing so through the onboarding
                  process itself. <br /> <br /> Now when the users completed
                  their onboarding using Aadhaar,{" "}
                  <span className=" font-bold text-[#111]">
                    they already had their Aadhaar fetched and ready to use
                  </span>
                  , thus taking them one step further in the journey without any
                  hassle.
                </p>
              </div>
            </div>
            <div className=" w-[50%] relative bg-[url('/casestudyImages/bgggg.svg')] bg-no-repeat bg-right-bottom">
              <LottiePlayer src={lottie4} />
            </div>
          </div>
        </section>
        <section>
          <div className=" pt-32 flex items-center">
            <div className=" w-[50%] pl-10">
              <div className=" text-[#111]/40">1/2</div>
              <h2 className=" mt-4 text-[2.25rem] lh-140">
                <span className=" font-bold">Facilitating discovery</span>
                <br />
                before a user signs up
              </h2>
              <div className=" mt-4 max-w-[32.5rem] w-full text-[1.125rem] text-[#111]/40 font-light">
                <p>
                  Realising how crucial it was to educate the users on the usage
                  of the Digilocker, we added introductory screens as a part of
                  the pre-onboarding so{" "}
                  <span className=" font-bold text-[#111]">
                    users understood what they could do
                  </span>{" "}
                  with the app and how to do it{" "}
                  <span className=" font-bold text-[#111]">
                    even before signing up.
                  </span>
                  <br />
                  <br />
                  Now, information like uploaded documents are not considered
                  valid for official purposes and Digilocker’s documents are
                  legally valid under the IT Act were clearly communicated to
                  the user.
                </p>
              </div>
            </div>
            <div className=" w-[50%] ml-auto">
              <Image src={img7} alt="someimage" />
            </div>
          </div>
        </section>
        <div className="bg-[#323235]">
          <StandardSection>
            <div className=" pt-72 relative">
              <div className=" rounded-2xl border border-white p-4 max-w-96 mx-auto">
                <LottiePlayer src={lottie5} />
              </div>
              <h2 className=" mt-6 text-[2.25rem] lh-140 text-white text-center">
                <span className="font-bold">serving all the documents</span> on
                a platter
              </h2>
              <div className=" mt-16 h-72 w-[1px] bg-white mx-auto"></div>
            </div>
          </StandardSection>
        </div>
        <section className=" py-20">
          <div className=" flex items-center">
            <div className=" w-[50%] mr-auto">
              <Image src={img8} alt="someimage" />
            </div>
            <div className=" w-[50%] pl-20">
              <div className=" text-[#111]/40">2/2</div>
              <h2 className=" mt-4 text-[2.25rem] lh-140">
                <span className=" font-bold">Verification badge</span>
                <br />
                as a trust marker
              </h2>
              <div className=" mt-4 max-w-[32.5rem] w-full text-[1.125rem] text-[#111]/40 font-light">
                <p>
                  We added a prominent verification mark to{" "}
                  <span className=" font-bold text-[#111]">
                    help both users and authorities distinguish
                  </span>{" "}
                  between verified and self-uploaded non-verified documents.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className=" py-32 bg-[#715bb2]  text-white text-[2rem]">
          <StandardSection>
            <div className=" flex items-center justify-center gap-8">
              <div className=" max-w-[40rem]  w-full">
                <h2>
                  “You’ve helped a govt team in “not only catching the fish, but
                  also teaching them to catch fish themselves in the future.”
                </h2>
                <div className=" mt-10 flex flex-col gap-2">
                  <div className=" font-medium text-[1.5rem]">Amit Ranjan</div>
                  <div className=" font-medium text-[1rem]">
                    Architech at Digilocker
                  </div>
                </div>
              </div>
              <div className=" w-[50%]">
                <TweetEmbed />
              </div>
            </div>
          </StandardSection>
        </div>
      </div>
    </>
  );
};

export default page;
