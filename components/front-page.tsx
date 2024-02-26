import { playfair_display } from "@/app/fonts";
import Image from "next/image";

export default function FrontPage() {
    const aboutText = "text-xl md:text-3xl font-serif tracking-wide uppercase text-teal-600";
  return (
    <main>
      <div
        className="container-fluid flex flex-col sm:flex-row p-0 m-0"
        id="aboutus"
      >
        <div className="container m-0 p-0">
          <Image
            src="/images/img-greg-trowman-jsuWg7IXx1k-unsplash.jpg"
            alt="About Us Image - Greg Trowman"
            className="w-full"
            width={1920}
            height={1280}
          />
        </div>
        <div className="container flex flex-col justify-center items-center px-0 py-3 bg-white">
          <div className="container-md w-3/4 px-1 px-md-2 py-2 text-left ">
          <h1 className={` ${aboutText} ${playfair_display.className}`}>About Us</h1>
            <p className="py-4 text-slate-600">
              Perhaps a re-engineering of your current world view will
              re-energize your online nomenclature to enable a new holistic
              interactive enterprise internet communication solution.
            </p>
            <p className="py-4">
              Fundamentally transforming well designed actionable information
              whose semantic content is virtually null.
            </p>
          </div>
        </div>
      </div>

      <div
        className="container-fluid flex flex-col sm:flex-row-reverse m-0 p-0"
        id="services"
      >
        <div className="container m-0 p-0">
          <Image
            src="/images/img-adam-winger-fI-TKWjKYls-unsplash.jpg"
            alt="Services Image - Adam Winger"
            className="w-full"
            width={1920}
            height={1280}
          />
        </div>
        <div className="container flex flex-col justify-center items-center px-0 py-1 bg-white">
          <div className="container-md w-3/4 py-2 text-left" id="services">
          <h1 className={` ${aboutText} ${playfair_display.className}`}>Services</h1>
            <p className="py-4">
              Empowerment in information design literacy demands the immediate
              and complete disregard of the entire contents of this cyberspace
              communication.
            </p>

            <ul className="list-disc list-inside mx-1 md:mx-4">
              <li>Hair cutting, coloring & styling</li>
              <li>Facials & Skin Care Treatments</li>
              <li>Waxing & Other Hair Removal</li>
              <li>Manicures & Pedicures</li>
            </ul>
            <p className="py-4">
              <em>
                Here is a spot for something else, too. Here is a{" "}
                <a href="#" className="text-rose-500">random link</a> that will not work.
              </em>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
