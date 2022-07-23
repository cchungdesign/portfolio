import React from 'react'
import Image from 'next/image'
import styles from './project.module.css'
import Link from 'next/link';

// function ProjectImage(props) {
//     return (
//         <Image className={styles.img} src={imgsrc} alt={imgalt} width="400" height="300"/>
//     )
// }

export default function Project(props) {
    // const project = [
    //     {company: "Juniper Networks",
    //     year: "2022",
    //     name: "Mist AI Live View",
    //     description: "Designing a solution for Juniper Network's Mist AI to set the rotation of access points automatically, saving time and increasing accuracy for location services administrators.",
    //     role: "UI/UX Design, User Research, Copywriting, Prototyping"
    // }
    // ]
    return (
          <div className={styles.project}> 
            <div className={styles.projectdesc}>
              <p>{props.company}<br/><text className={props.subtext}>{props.year}</text></p>
              <h2>{props.name}</h2>
              
              <p>{props.description}</p>
              <p className={styles.subtext}><b>Role:</b> {props.role}</p>
              
              <p><a href="">Read more {'->'}</a></p>
            </div>
            <Image className={styles.img} src={props.img} alt={props.imgalt} width="400" height="300"/>
          </div>
        )
    }