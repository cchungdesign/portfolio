import Head from "next/head";
import Image from "next/image";
import styles from "/components/projectpage.module.css";
import Layout from "/components/layout.js";
import SideBySide from "/components/sidebyside";
import ImgCaption from "/components/imgcaption";

import imgMain from "/public/work/mcubed/1-main.png";
import imgMockup from "/public/work/mcubed/2-mockup.png";
import imgOnboarding from "/public/work/mcubed/3-onboarding.jpeg";
import imgTryon from "/public/work/mcubed/4-tryon.jpeg";
import imgVision from "/public/work/mcubed/5-vision.jpeg";
import imgOverlay from "/public/work/mcubed/6-overlay.jpeg";
import imgOverlay2 from "/public/work/mcubed/6-overlay2.jpeg";
import imgSizer from "/public/work/mcubed/7-sizer.jpeg";

export default function About() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.cover}>
          <div className={styles.company}>M^3 · 2021</div>
          <h1 className={styles.title}>Virtual Try-On</h1>
          <h2>
            Designing a mask sizer with to help provide custom-fit masks to
            underserved and marginalized communities.
          </h2>
        </div>
        <div className={styles.section}>
          <h2>About</h2>
          <div className={styles.overview}>
            <div className={styles.description}>
              <p>
                Mask sizing varies across different face shapes, affecting
                people whose face shapes do not fit "one-size-fits-all" masks.
                Our team developed an augmented reality (AR) camera solution
                that addresses difficulties in facial sizing. The challenge was
                creating an accessible experience accounting for different
                camera elements (glasses, beard, camera angle) while having an
                easy-to-understand experience.
              </p>
              <p>
                In response, we set out to streamline the user experience from
                scratch (Onboarding Process, Virtual Try-On, Size Results) and
                shipped a mask sizer that helps provide custom-fit masks to
                underserved and marginalized communities.
              </p>
            </div>
            <div className={styles.sidebar}>
              <div className={styles.item}>
                <h3>Role</h3>
                <ul className={styles.ul}>
                  <li>UI/UX Design</li>
                  <li>Brand Identity</li>
                  <li>Creative Direction</li>
                  <li>AI</li>
                </ul>
              </div>

              <div className={styles.item}>
                <h3>Team</h3>
                <ul className={styles.ul}>
                  <li>Founder: Jesse Chang</li>
                  <li>Engineering: John Boiles</li>
                  <li>Applied Science: Kai Yeh</li>
                  <li>PM: Amy Kim</li>
                </ul>
              </div>

              <div className={styles.item}>
                <h3>Duration</h3>2 months
              </div>
            </div>
          </div>
        </div>
        <div className={styles.padding}>
          <Image src={imgMockup} />
        </div>

        <div className={styles.section}>
          <h2>Approach</h2>
          <p className={styles.p}>
            I joined this project in the middle of its beta stage as their sole
            UX designer. To tackle the challenge of integrating novel design
            practices, I started working with easy but impactful changes,
            scaling up in complexity once I had the opportunity to redesign the
            entire camera interface in later beta stages.
          </p>
          <p className={styles.p}>
            I streamlined the color scheme and general visual design for a
            friendlier onboarding experience. One initial change I made that I
            later revisited was coloring the action buttons pink to match the
            heart—I later switched to blue for user empathy with medical color
            associations.
          </p>
          <div className={styles.padding}>
            <ImgCaption
              img={imgOnboarding}
              caption="Copywriting and design flow for user onboarding"
            />
          </div>
        </div>

        <div className={styles.section}>
          <h2>The Virtual Try-On</h2>
          <p className={styles.p}>
            In onboarding, I had to solve how to present information about the
            virtual try-on in a meaningful way. As a solution, I separated the
            onboarding (steps prior to the camera interface) and the tutorial
            (which I integrated with the actual camera interface). I addressed a
            few key issues: users skipped through text, and users did not know
            what the interface meant during the virtual try-on. My solution of
            separating the two steps allows for users to focus on permissions
            prior to virtual try-on, and immediate instruction feedback during
            scanning.
          </p>
          <p className={styles.p}>
            For this step, I chose a black overlay to contrast against the
            camera display, which would provide a reference point for the user's
            own face in relation to the phone camera. We included text at the
            bottom to deliver live directions to the user, which would be
            cleared once the current step conditions were checked.
          </p>
          <div className={styles.padding}>
            <ImgCaption
              img={imgTryon}
              caption="Augmented Reality UX Flow for Try-On"
            />
          </div>
        </div>

        <div className={styles.section}>
          <h2>20/20 Vision</h2>
          <p className={styles.p}>
            One edge case I worked on solving was the presence of glasses. For a
            better scanning experience, we needed the user to take off their
            glasses while facing the camera. I added this additional check
            condition for glasses, skipping if the user does not take off their
            glasses in a specified duration. We had the issue of users not being
            able to see the screen without their glasses initially, so I opted
            to increase the sizes of the visual elements in the virtual try-on.
          </p>
          <div className={styles.padding}>
            <ImgCaption
              img={imgVision}
              caption="Edge case for people with glasses"
            />
          </div>
        </div>

        <div className={styles.section}>
          <h2>Face Overlay</h2>
          <p className={styles.p}>
            While working through the virtual try-on interface, we realized that
            the user would benefit from a visual indicator that their face was
            in the frame. Collaborating with our Science lead, I mocked up a
            face overlay accounting for the specifications of the scanning
            borders. We implemented the overlay to track the user's face live in
            virtual try-on. I worked through these iterations before landing on
            the final iteration (9).
          </p>
          <p className={styles.p}>
            I chose the final overlay as it focused on the user's face with a
            transcluent black overlay. The final iteration also highlighted just
            the user's chin, which was a required variable for our mask sizing
            calculation.
          </p>
          <div className={styles.padding}>
            <ImgCaption img={imgOverlay} caption="Prototyping a face overlay" />
          </div>
        </div>

        <div className={styles.section}>
          <h2>Your Perfect Size</h2>
          <p className={styles.p}>
            I added a brief confirmation screen saying "You're all set" after
            completing the virtual try-on to show progress and reduce churning.
            With the actual sizing process out of the way, we had to figure out
            how to deliver this information to the user.
          </p>
          <p className={styles.p}>
            One challenge I kept returning to was how to present information
            about the user's ideal size while acknowledging for variation in
            results. We decided to present an additional confidence percentage
            and allow the user to assess their own results. I added color
            contrast to indicate the recommended choice for the user. To solve
            an issue of fitting information into a single screen, I added a
            collapsible table for the percentages and descriptions with a faded
            gradient. With this information presented, the user is then directed
            to a purchasing screen.
          </p>

          <div className={styles.padding}>
            <ImgCaption
              img={imgSizer}
              caption="An expandable and personalized confirmation"
            />
          </div>
        </div>

        <div className={styles.section}>
          <h2>Outcome</h2>
          <p className={styles.p}>
            I am proud of the work I've completed to streamline this process and
            help users have an easier experience finding their personal mask
            size. I was happy with the new paradigms and solutions I developed
            to solve some of our key issues: accessibility, reducing customer
            churn, and overall user experience.
          </p>
          <p className={styles.p}>
            In hindsight, I believe there could be an alternative to the edge
            case issue given more development time. Moving forward, I learned
            the importance of developing a design system early on and will be
            using this knowledge to reduce production time for engineering.
          </p>
          <p className={styles.p}>
            This project provided valuable information on how to approach
            augmented reality fitting for future products. I am grateful to have
            been able to contribute to this project and work towards an
            inclusive future.
          </p>
          <p className={styles.p}>The app beta launched in May 2021.</p>
        </div>
      </div>
    </Layout>
  );
}
