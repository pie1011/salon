import Image from "next/image";

export default function FrontPage() {
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
        <div className="container flex flex-col justify-center items-center px-0 py-3">
          <div className="container-md w-75 px-1 px-md-2 py-2 text-start">
            <h2>About Us</h2>
            <p>
              Perhaps a re-engineering of your current world view will
              re-energize your online nomenclature to enable a new holistic
              interactive enterprise internet communication solution.{" "}
            </p>
            <p>
              Fundamentally transforming well designed actionable information
              whose semantic content is virtually null.{" "}
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
        <div className="container flex flex-col justify-center items-center px-0 py-1">
          <div className="container-md w-75 py-2 text-center">
            <h2>Services</h2>
            <p className="hidden lg:block">
              Empowerment in information design literacy demands the immediate
              and complete disregard of the entire contents of this cyberspace
              communication.
            </p>

            <div className="text-end self-end my-4 border-line">
              <h4>Hair cutting, coloring & styling</h4>
              <h4>Facials & Skin Care Treatments</h4>
              <h4>Waxing & Other Hair Removal</h4>
              <h4>Manicures & Pedicures</h4>
            </div>
            <p className="text-center small">
              <em>
                Here is a spot for something else, too. Here is a{" "}
                <a href="#">random link</a> that will not work.
              </em>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
