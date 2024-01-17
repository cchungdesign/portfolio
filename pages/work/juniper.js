import Head from "next/head";
import Image from "next/image";
import styles from "/components/projectpage.module.css";
import Layout from "/components/layout.js";
import Section from "/components/section.js";
import SideBySide from "/components/sidebyside.js";
import ImgCaption from "/components/imgcaption.js";

import cover from "/public/work/juniper/cover.png";
import userJourneyMap from "/public/work/juniper/user-journey-map.png";
import liveViewInitial from "/public/work/juniper/live-view-initial.png";
import liveViewAfter1 from "/public/work/juniper/live-view-after1.png";
import liveViewAfter2 from "/public/work/juniper/live-view-after2.png";
import anchorQuickEdit from "/public/work/juniper/anchor-quickedit.png";
import autoPlacement from "/public/work/juniper/auto-placement.png";
import autoOrientation from "/public/work/juniper/auto-orientation.png";

export default function About() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.cover}>
          <h1 className={styles.title}>Mist AI Auto Placement & Orientation</h1>
          <h2>
            Designing an automated solution for Juniper Networks to save time
            and increase accuracy for location services administrators.
          </h2>
        </div>

        <div className={styles.section}>
          <h2>About</h2>
          <div className={styles.overview}>
            <div className={styles.description}>
              <p>
                Location services administrators spend significant overhead
                manually setting multiple APs for a floor-plan, which can
                multiply across thousands of stores in a franchise. The
                multiplying costs of time, administrative resources, and lower
                fidelity of services can risk a loss of revenue for businesses,
                which results in frustration for both administrators and
                installers.
              </p>
              <p>
                We designed a new solution to set the placement and rotation of
                access points (APs) automatically, saving time and increasing
                accuracy for small businesses to scaling franchises seeking
                user-centered location services. We also overhauled the existing
                location services environment based on extensive usability
                research.
              </p>
            </div>
            <div className={styles.sidebar}>
              <div className={styles.item}>
                <h3>Role</h3>
                <ul className={styles.ul}>
                  <li>UI/UX Design</li>
                  <li>User Research</li>
                  <li>Prototyping</li>
                  <li>Copywriting</li>
                </ul>
              </div>

              <div className={styles.item}>
                <h3>Team</h3>
                <ul className={styles.ul}>
                  <li>Senior UX Staff: Jordan Batch</li>
                  <li>SWE Director: Victor Tsai</li>
                  <li>PM: Ryan Adzima</li>
                  <li>QA: Kevin Friday</li>
                </ul>
              </div>

              <div className={styles.item}>
                <h3>Duration</h3>2 months
              </div>
            </div>
          </div>

          <div className={styles.padding}>
            <Image src={cover} />
          </div>

          <div className={styles.list}>
            <div>
              <h3>Deliverables</h3>
              <ul>
                <li>Significant feature onboarding and usability redesign</li>
                <li>Desktop and mobile environment mockups</li>
                <li>Screen inventory of both desktop and mobile user flows</li>
                <li>Component-based design system</li>
              </ul>
            </div>

            <div>
              <h3>Business Opportunity</h3>
              <ul>
                <li>
                  <b>Competitive features:</b> Auto-rotation and intuitive UX
                  are a competitive edge to retain existing customers and
                  attract new ones
                </li>
                <li>
                  <b>Save time and money:</b> Auto-rotation AI accomplishes
                  self-configuration of APs, which reduces significant
                  installation time and cost spanning thousands of stores for
                  franchises
                </li>
                <li>
                  <b>Relevance for customers:</b> Deliver personalized
                  experiences based on completion criteria of a floor-plan and
                  display context-based map detail levels
                </li>
                <li>
                  <b>Automation:</b> Auto-rotation AI eliminates AP orientation
                  accuracy issues and user fatigue in manual installation,
                  ensuring quality of location services
                </li>
              </ul>
            </div>
            <div>
              <h3>Goals</h3>
              <ul>
                <li>
                  Design a clear, intuitive, and highly usable product
                  implementation of Mist AI’s Live View environment
                </li>
                <li>
                  Improve customer satisfaction and loyalty with user-centered
                  interactions and design features
                </li>
                <li>
                  Empathize with users in the design process by user research,
                  user journey maps, and feature feedback
                </li>
                <li>
                  Implement competitive features, including auto-rotation of
                  access points (APs) and intuitive UX, to the current design
                </li>
              </ul>
            </div>
            <div>
              <h3>Outcome</h3>
              Predicted (in usability testing phase):
              <ul>
                <li>
                  <b>XX%</b> shorter time to set the orientation of an AP,
                  reducing significant overhead for larger franchises
                </li>
                <li>
                  <b>XX%</b> reduced number of clicks for AP installation
                </li>
                <li>
                  <b>XX%</b> improved accuracy across AP orientations
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div>
            <h2>User Journey Map</h2>
            <p className={styles.p}>
              In the user journey map writing process, we discovered that
              administrators spend significant overhead manually setting
              multiple APs for a floor-plan, which can multiply across thousands
              of stores in a franchise. This is a problem because administrators
              face lost time and installation fatigue from precisely rotating
              virtual APs according to physical specifications.
            </p>
          </div>
          <div className={styles.padding}>
            <Image src={userJourneyMap} />
          </div>
        </div>

        <div className={styles.section}>
          <h2>The Current Experience</h2>
          <p className={styles.p}>
            After conducting the user interview process with product management,
            we identified primary sources of friction in our existing UI.
          </p>

          <div>
            <ol>
              <li className={styles.p}>Disorganized UI</li>
              <p className={styles.p}>
                Actions on the current Live View environment were cluttered with
                little semantic relation to their placement. Important tasks
                were nested under menus; features weren’t thought of
                holistically.
              </p>
              <li className={styles.p}>Confusing navigation</li>
              <p className={styles.p}>
                While researching users and auditing the “Live View” page, we
                discovered that users were confused on the navigation and
                structure of live view.
              </p>
              <li className={styles.p}>Repetitive tasks</li>
              <p className={styles.p}>
                Administrators will need to go through multiple clicks and
                manual checking with specifications to install a single AP. For
                customers with thousands of stores and 10-15 APs per store,
                accurately placing all the APs takes a lot of time.
              </p>
            </ol>
          </div>

          <div className={styles.padding}>
            <ImgCaption
              img={liveViewInitial}
              caption="The initial Live View environment prior to redesign"
            />
          </div>
        </div>

        <div className={styles.section}>
          <h2>Spring Cleaning</h2>

          <p className={styles.p}>
            With the new settings page, users are able to view important
            information about a floorplan from a glance. Additionally, this new
            settings page serves as a single-step solution for the initial
            setup.
          </p>

          <div className={styles.padding}>
            <ImgCaption
              img={liveViewAfter1}
              caption="Aligning navigation closer to user's mental model"
            />
          </div>

          <p className={styles.p}>
            Before designing the experience for Auto Placement and Orientation,
            I did some preliminary cleanup of the interface. Based on user
            feedback from Quality Assurance, I addressed various pain points by
            reorganizing actions to semantic groups. In this process, I decided
            to create a new Floorplan Settings page to address a glaring issue:
            there is no central interface to modify the floorplan.
          </p>

          <div className={styles.padding}>
            <ImgCaption
              img={liveViewAfter2}
              caption="A new settings page optimizing for sitewide actions"
            />
          </div>
        </div>

        <div className={styles.section}>
          <h2>Set Sail</h2>

          <p className={styles.p}>
            For administrators to use the new Auto Placement and Orientation
            Features, the floorplan requires three APs to be designated as
            anchors for triangulation on a virtual floorplan. I introduced a
            visual concept of anchors (designated by a ship anchor as an
            accessible mental prototype) so users can see any AP related to
            anchor designation at a glance.
          </p>
          <div className={styles.padding}>
            <ImgCaption
              img={anchorQuickEdit}
              caption="UX flow for designating anchors"
            />
          </div>
        </div>

        <div className={styles.section}>
          <h2>Auto Placement</h2>

          <p className={styles.p}>
            Administrators can set all their APs on a floorplan in two clicks,
            two minutes (approximated). They can also view precise value changes
            with an AP table prior to accepting placement. A preview of the
            floorplan APs allows administrators to see the changes with a visual
            guide.
          </p>

          <div className={styles.padding}>
            {" "}
            <ImgCaption
              img={autoPlacement}
              caption="UX flow for Auto Placement"
            />
          </div>
        </div>

        <div className={styles.section}>
          <h2>Auto Orientation</h2>

          <div>
            <p className={styles.p}>
              Because Mist AI processes Auto Orientation overnight, I designed a
              distinct UI for interacting with the processing queue.
              Administrators can easily add and remove floorplans queued for
              Auto Orientation, receiving a notification the next day when the
              process is done.
            </p>
            <p className={styles.p}>
              In this process, I also developed a modular component system for
              modal windows, adapting existing design guidelines for novel use
              cases.
            </p>
          </div>

          <div className={styles.padding}>
            {" "}
            <ImgCaption
              img={autoOrientation}
              caption="UX flow for Auto Orientation"
            />
          </div>
        </div>

        <div className={styles.section}>
          <h2>Outcome</h2>

          <p className={styles.p}>
            Through this process, we overhauled the user environment with
            optimized feature navigation and a new solution for administrators
            to set the placement and rotation of access points automatically.
          </p>

          <p className={styles.p}>
            Through this project, I learned how to identify and prioritize pain
            points based on user research, the importance of distinct UI
            elements, and how to successfully overhaul legacy interfaces.
          </p>

          <p className={styles.p}>
            Once user data is available upon feature testing rollout, we will
            quantitatively determine the impact of this feature via user metrics
            (total clicks and time spent on AP adjustment).
          </p>
        </div>
      </div>
    </Layout>
  );
}
