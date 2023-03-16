import ProjectThumbnail from '@/components/ProjectThumbnail'
import Head from 'next/head'
import styles from './portfolio.module.scss'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Allan Perez - Portfolio</title>
      </Head>
      <h1 className={styles.title}>Formation ReactJS</h1>
      <div className={styles.portfolio}>
        <ProjectThumbnail title="Projet 14" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Projet 13" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Projet 12" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Projet 11" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Projet 10" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Projet 9" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Projet 8" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Projet 7" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Projet 6" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Projet 5" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Projet 4" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Projet 3" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Projet 2" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
      </div>
      <h1 className={styles.title}>Projets</h1>
      <div className={styles.portfolio}>
        <ProjectThumbnail
          title="Foundry VTT Naheulbeuk"
          thumbnail="project/naheulbeuk.jpg"
          carousel={[
            'project/naheulbeuk/1.png',
            'project/naheulbeuk/2.png',
            'project/naheulbeuk/3.png',
            'project/naheulbeuk/4.png',
          ]}
        >
          <a href="https://gitlab.com/aperezgo74/naheulbeuk">
            gitlab: naheulbeuk
          </a>
          <p>
            Projet permettant de rajouter un système donjon de naheulbeuk à
            foundryVTT un logiciel permettant de mettre en place du jeu de rôle
          </p>
        </ProjectThumbnail>
        <ProjectThumbnail
          title="Talents-Affinity"
          thumbnail="project/talents.jpg"
        >
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail
          title="Site AngularJS/RubyOnRails Goldrush"
          thumbnail="project/goldrush_grand.png"
        >
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="OrcWar" thumbnail="project/orcwar.png">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Jonquille Sportive Reignier" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Bujinkan-kanji" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="RPG 3D Unity" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
      </div>

      <h1 className={styles.title}>Vieux projets</h1>
      <div className={styles.portfolio}>
        <ProjectThumbnail title="WakeOnLan PHP" thumbnail=""></ProjectThumbnail>
        <ProjectThumbnail title="Fnac PHP" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Bloc notes C++" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="OCR Discord" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="OCR Dofus" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Navigateur web simplifié" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Bot discord parsing" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail
          title="Logiciel de chat en réseau winform"
          thumbnail=""
        >
          <p>Test</p>
        </ProjectThumbnail>
        <ProjectThumbnail title="Lecteur multimédia wpf" thumbnail="">
          <p>Test</p>
        </ProjectThumbnail>
      </div>
    </>
  )
}
