import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "/components/layout.js";
import styles from "/components/home.module.css";
import { useEffect } from "react";
import Zdog from "zdog";

// import me from "/public/me.jpg";

export default function About() {
  useEffect(() => {
    let isSpinning = true;

    let illo = new Zdog.Illustration({
      element: '.zdog-canvas',
      dragRotate: true,
      // stop spinning when drag starts
      onDragStart: function() {
        isSpinning = false;
      },
    });

    // tree
    new Zdog.Shape({
      addTo: illo,
      stroke: 160,
      color: 'goldenrod',
      translate: {y: -100},
    })

    new Zdog.Shape({
      addTo: illo,
      stroke: 120,
      color: 'goldenrod',
      translate: { z: 50, y: -50 },
    })

    new Zdog.Shape({
      addTo: illo,
      stroke: 140,
      color: 'goldenrod',
      translate: { x: 50, z: -50, y: -50 },
    })

    new Zdog.Shape({
      addTo: illo,
      stroke: 130,
      color: 'goldenrod',
      translate: { x: -50, z: -50, y: -50 },
    })

    // leaves
    new Zdog.Shape({
      addTo: illo,
      stroke: 20,
      color: 'goldenrod',
      translate: { z: -20, y: 100 },
    })

    new Zdog.Shape({
      addTo: illo,
      stroke: 30,
      color: 'goldenrod',
      translate: { x: -50, z: -50, y: 50 },
    })

    // tree trunk
    new Zdog.Shape({
      addTo: illo,
      path: [
        { x: -60, y: -60 },   // start
        { bezier: [
          { x:  20, y: -60 }, // start control point
          { x:  20, y:  60 }, // end control point
          { x:  60, y:  60 }, // end point
        ]},
      ],
      closed: false,
      stroke: 20,
      color: 'saddlebrown',
      translate: { y: 50 },
      rotate: { z:-90 },
    });

    // ground
    new Zdog.Ellipse({
      addTo: illo,
      diameter: 160,
      stroke: 20,
      fill: true,
      color: 'antiquewhite',
      translate: { y: 150 },
      rotate: {x: 1.570796},
    });
    
    function animate() {
      illo.rotate.y += isSpinning ? 0.03 : 0;
      illo.updateRenderGraph();
      requestAnimationFrame( animate );
    }
    animate();
  });

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>About</title>
        </Head>
        <div className={styles.about_container}>
          <div className={styles.about}>
            <p>Hi, I'm Chris.</p>
            <p>
              I'm curating aesthetics and creating new forms through design. I
              love working with my senses—photography, music production, dance,
              and digital painting. I find ways to express my imagination
              through projects with visuals and music.
            </p>
            <p>
              I'm from Las Vegas, NV, where I freelanced in graphic design prior
              to studying Cognitive Science at Pomona College in Claremont, CA.
              I found my space in visual aesthetics, happily exploring my
              surroundings in a search for inspiration in the smallest
              spaces—from corner cafes to neighborhood trails. I want to use
              design to share this happiness in the little details throughout my
              community.
            </p>
            <p>
              Always open to talking about that obscure genre of music you found
              or your next big vision. Contact me at:
            </p>
            <br />
            <span>
              &#8594;{" "}
              <a href="mailto: cchungdesign@gmail.com">
                {" "}
                cchungdesign@gmail.com
              </a>
            </span>
            <br />
            <span>
              &#8594;{" "}
              <a href="https://www.linkedin.com/in/cchungdesign/"> LinkedIn</a>
            </span>
            {/* <br />
            <br />
            <p>
              P.S. I built this website using React and Next.js to share my
              creative projects {":)"}
            </p> */}
          </div>
          <div className="styles.canvas">
            <canvas className="zdog-canvas" width="400" height="480"></canvas>
          </div>
        </div>
      </div>
    </Layout>
  );
}
