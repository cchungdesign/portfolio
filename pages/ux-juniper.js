import Head from "next/head";
import Image from "next/image";
import styles from "../components/projectpage.module.css";
import Layout from "../components/layout.js";

import cover from "../public/ux/juniper/cover.png";
import userJourneyMap from "../public/ux/juniper/user-journey-map.png";
import liveViewInitial from "../public/ux/juniper/live-view-initial.png";
import liveViewAfter1 from "../public/ux/juniper/live-view-after1.png";
import liveViewAfter2 from "../public/ux/juniper/live-view-after2.png";
import anchorQuickEdit from "../public/ux/juniper/anchor-quickedit.png";
import autoPlacement from "../public/ux/juniper/auto-placement.png";
import autoOrientation from "../public/ux/juniper/auto-orientation.png";

export default function About() {
  return (
    <Layout>
      <div className={styles.hero}>
        <Image src={cover} />
      </div>

      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.overview}>
            <div className={styles.description}>
              <h1 className={styles.title}>
                Mist AI Auto Placement & Orientation
              </h1>
              <p className={styles.p}>
                Location services administrators spend significant overhead
                manually setting multiple APs for a floor-plan, which can
                multiply across thousands of stores in a franchise. The
                multiplying costs of time, administrative resources, and lower
                fidelity of services can risk a loss of revenue for businesses,
                which results in frustration for both administrators and
                installers.
              </p>
              <p className={styles.p}>
                We designed a new solution to set the rotation of access points
                (APs) automatically, <b>saving time and increasing accuracy</b>{" "}
                for small businesses to scaling franchises seeking user-centered
                location services. We also{" "}
                <b>overhauled the existing location services environment</b>{" "}
                based on user research.
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
                  <li>Mentor, Senior Staff UX Designer: Jordan Batch</li>
                  <li>Manager, Software Engineering Director: Victor Tsai</li>
                  <li>Product Management: Ryan Adzima</li>
                  <li>Quality Assurance: Kevin Friday</li>
                </ul>
              </div>

              <div className={styles.item}>
                <h3>Duration</h3>2 months
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className={styles.section}>
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
                <b>Competitive features:</b> Auto-rotation and intuitive UX are
                a competitive edge to retain existing customers and attract new
                ones
              </li>
              <li>
                <b>Save time and money:</b> Auto-rotation AI accomplishes
                self-configuration of APs, which reduces significant
                installation time and cost spanning thousands of stores for
                franchises
              </li>
              <li>
                <b>Relevance for customers:</b> Deliver personalized experiences
                based on completion criteria of a floor-plan and display
                context-based map detail levels
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
        <hr />
      </div>

      <div className={styles.hero}>
        <div className={styles.section}>
          <Image src={userJourneyMap} />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.section}>
          <div>
            <h3>User Journey Map</h3>
            <p className={styles.p}>
              In the user journey map writing process, I discovered that
              administrators spend significant overhead manually setting
              multiple APs for a floor-plan, which can multiply across thousands
              of stores in a franchise. This is a problem because administrators
              face lost time and installation fatigue from precisely rotating
              virtual APs according to physical specifications.
            </p>
          </div>
        </div>
        <hr />
      </div>
    </Layout>
  );
}
