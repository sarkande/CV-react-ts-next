import ProjectThumbnail from '@/components/ProjectThumbnail'
import Head from 'next/head'
import styles from './portfolio.module.scss'
import { useState } from 'react'

import { OpenThumbnailContext } from '@/context/OpenThumbnailContext'

export default function Portfolio() {
  const [openThumbnail, setOpenThumbnail] = useState<string>('')

  return (
    <>
      <OpenThumbnailContext.Provider
        value={{
          openThumbnail,
          setOpenThumbnail,
        }}
      >
        <Head>
          <title>Allan Perez - Portfolio</title>
        </Head>
        <h1 className={styles.title}>Formation ReactJS</h1>
        <div className={styles.portfolio}>
          <ProjectThumbnail
            title="Modale"
            thumbnail="project/openclassrooms/projet14-modale/2.png"
            carousel={[
              'project/openclassrooms/projet14-modale/1.png',
              'project/openclassrooms/projet14-modale/2.png',
              'project/openclassrooms/projet14-modale/3.png',
            ]}
            tags={['ReactJS', 'REDUX', 'Npm']}
          >
            <h1>Projet HRNet</h1>
            <a target="_blank" href="https://github.com/sarkande/Projet_14">
              Lien github: Projet_14
            </a>
            <p>
              Il s'agit du dernier projet de la formation ReactJS. Ce projet
              consistait à gérer une page de gestion d'employé pour un service
              RH. Il fallait refaire le système actuel fonctionnant sous JQuery
              pour passer à du ReactJS et un module parmi plusieurs possible
              devait etre coder. J'ai personnellement choisis la fenêtre modale,
              et ai du ensuite upload le composant sur npm et donc pour ça creer
              un fichier webpackJS.
            </p>
            <p>
              Pour ce module, j'ai fait en sorte de créer quelques chose de
              flexible et facilement parametrable pour que les eventuels
              utilisateurs qui telechargerait ce module, puissent faire ce qu'il
              souhaitait sans trop de difficultés
            </p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="ArgentBank"
            thumbnail="project/openclassrooms/projet13-argentbank/2.png"
            carousel={[
              'project/openclassrooms/projet13-argentbank/1.png',
              'project/openclassrooms/projet13-argentbank/2.png',
              'project/openclassrooms/projet13-argentbank/3.png',
            ]}
            tags={['ReactJS', 'REDUX', 'REST']}
          >
            <h1>Projet ArgentBank</h1>
            <a target="_blank" href="https://github.com/sarkande/Projet_13">
              Lien github: Projet_13
            </a>
            <p>
              Pour ce projet, le but était de réaliser une application de
              gestion de compte bancaire, et principalement d'utiliser Redux
              comme state manager.
            </p>
            <p>
              Une api backend était fourni, il fallait donc gérer les requetes
              pour pouvoir recupérer un token et le stocker dans le state
              manager
            </p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="SportSee"
            thumbnail="project/openclassrooms/projet12-sportsee/2.png"
            carousel={[
              'project/openclassrooms/projet12-sportsee/1.png',
              'project/openclassrooms/projet12-sportsee/2.png',
              'project/openclassrooms/projet12-sportsee/3.png',
            ]}
            tags={['ReactJS', 'D3JS', 'REST']}
          >
            <h1>Projet SportSee</h1>
            <a target="_blank" href="https://github.com/sarkande/Projet_12">
              Lien github: Projet_12
            </a>
            <p>
              Pour ce projet, le but était de réaliser une application react
              permettant d'afficher un panel de statistiques détaillés pour un
              utilisateur en fonction de ses performances physiques.
            </p>
            <p>
              J'ai travailler en utilisant la bibliotheque d3, qui est très
              puissante mais relativement compliqué à prendre en main. Par la
              suite, j'ai rajouté des animations lors de la construction des
              graphiques, ce qui permettait de rendre la page plus attractive et
              pousser plus loin ma decouverte de la bibliotheque.
            </p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Kasa"
            thumbnail="project/openclassrooms/projet11-kasa/2.png"
            carousel={[
              'project/openclassrooms/projet11-kasa/1.png',
              'project/openclassrooms/projet11-kasa/2.png',
              'project/openclassrooms/projet11-kasa/3.png',
            ]}
            tags={['ReactJS', 'REST']}
          >
            <h1>Projet Kasa</h1>
            <a target="_blank" href="https://github.com/sarkande/Projet_11">
              Lien github: Projet_11
            </a>
            <p>
              Pour ce projet, le but était de réaliser une application react
              pour agence immobilière. Le site devait être compatible mobile et
              recuperait les données depuis une API.
            </p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Maquettage"
            thumbnail="project/openclassrooms/projet10-maquettage/3.png"
            carousel={[
              'project/openclassrooms/projet10-maquettage/1.png',
              'project/openclassrooms/projet10-maquettage/2.png',
              'project/openclassrooms/projet10-maquettage/3.png',
              'project/openclassrooms/projet10-maquettage/4.png',
            ]}
            tags={['UI/UX', 'Figma']}
          >
            <h1>Projet Learn@school</h1>
            <a target="_blank" href="https://github.com/sarkande/Projet_13">
              Lien github: Learn@school
            </a>
            <p>
              Ce projet consistait à créer un ensemble de maquette sur figma, en
              se basant sur les besoins d'une association
            </p>
            <p>
              Les maquettes devait faire en sorte d'être adapté pour PC et
              smartphone
            </p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Billed"
            thumbnail="project/openclassrooms/projet9-Billed/2.png"
            carousel={[
              'project/openclassrooms/projet9-Billed/1.png',
              'project/openclassrooms/projet9-Billed/2.png',
              'project/openclassrooms/projet9-Billed/3.png',
              'project/openclassrooms/projet9-Billed/4.png',
            ]}
            tags={['JS', 'Tests', 'Jest']}
          >
            <h1>Billed app</h1>
            <a
              target="_blank"
              href="https://github.com/sarkande/Billed-app-FR-Front"
            >
              Lien github: Billed-app-FR-Front
            </a>
            <p>
              Ce projet consistait à mettre en place un système de connexion en
              se basant sur une API et Redux pour permettre à un utilisateur
              d'avoir accès à son compte bancaire
            </p>
            <p>
              L'utilisateur était connecté au moyen d'un token de connexion et
              j'ai fais en sorte de mettre en place des sécurités pour prevenir
              de l'altération du token dans les cookies.
            </p>
            <p>
              Une fois la partie Redux terminé, j'ai mis en place une
              documentation des futurs endpoints que l'application bancaire
              aurait besoin
            </p>
          </ProjectThumbnail>

          <ProjectThumbnail
            title="Les petits plats"
            thumbnail="project/openclassrooms/projet7-lespetitsplats/1.png"
            carousel={[
              'project/openclassrooms/projet7-lespetitsplats/1.png',
              'project/openclassrooms/projet7-lespetitsplats/2.png',
              'project/openclassrooms/projet7-lespetitsplats/3.png',
              'project/openclassrooms/projet7-lespetitsplats/4.png',
            ]}
            tags={['JS', 'REST', 'Npm']}
          >
            <h1>Les petits plats</h1>
            <a target="_blank" href="https://github.com/sarkande/projet07">
              Lien github: Projet 07
            </a>
            <p>
              Ce projet consistait à réaliser un site "livre de cuisine"
              permettant de pouvoir trouver efficacement des recettes en
              fonction d'ingredients, d'ustensiles et/ou d'outils
            </p>
            <p>
              Le projet à été réalisé en JS natif et le back-end n'etant pas
              encore fini, j'exploitais les données depuis un fichier JSON. Des
              mesures ont été prises pour qu'au moment où le back end serait
              terminé, on puisse très facilement l'integrer à la place de notre
              JSON.
            </p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Fisheye"
            thumbnail="project/openclassrooms/projet6-fisheye/1.png"
            carousel={[
              'project/openclassrooms/projet6-fisheye/1.png',
              'project/openclassrooms/projet6-fisheye/2.png',
            ]}
            tags={['JS', 'Accessibility']}
          >
            <h1>FishEye</h1>
            <a
              target="_blank"
              href="https://github.com/sarkande/Front-End-Fisheye"
            >
              Lien github: Projet 06
            </a>
            <p>
              Ce projet consistait à mettre en place un site web permettant de
              promouvoir le travail d'artistes photographes.
            </p>
            <p>
              Ce site a été codé en JS natif, et a pour objectif de mettre en
              place des outils d'accessibilité afin que le site soit accessible
              pour n'importe qui.
            </p>
          </ProjectThumbnail>

          <ProjectThumbnail
            title="GameOn"
            thumbnail="project/openclassrooms/projet4-gameon/1.png"
            carousel={[
              'project/openclassrooms/projet4-gameon/1.png',
              'project/openclassrooms/projet4-gameon/2.png',
            ]}
            tags={['JS', 'Regex']}
          >
            <h1>GameOn</h1>
            <a
              target="_blank"
              href="https://github.com/sarkande/GameOn-website-FR"
            >
              Lien github: Projet 04
            </a>
            <p>
              Ce projet consistait à reprendre un projet de sites web mettant en
              place des evenements de jeux videos.{' '}
            </p>
            <p>
              Le principale interet de ce projet était de faire en sorte
              d'utilité des validateurs fort, notamment des regex, sur un
              formulaire
            </p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="OhMyFood"
            thumbnail="project/openclassrooms/projet3-ohmyfood/5.png"
            carousel={[
              'project/openclassrooms/projet3-ohmyfood/1.png',
              'project/openclassrooms/projet3-ohmyfood/2.png',
              'project/openclassrooms/projet3-ohmyfood/3.png',
              'project/openclassrooms/projet3-ohmyfood/4.png',
              'project/openclassrooms/projet3-ohmyfood/5.png',
            ]}
            tags={['HTML', 'SASS']}
          >
            <h1>OhMyFood</h1>
            <a
              target="_blank"
              href="https://github.com/sarkande/AllanPEREZGONZALEZ_3_28022022"
            >
              Lien github: Projet 03
            </a>
            <p>
              Ce projet consistait à créer une application web orienté pour
              mobile et permettant de developper des compétences en SASS
            </p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Booki"
            thumbnail="project/openclassrooms/projet2-booki/1.png"
            carousel={[
              'project/openclassrooms/projet2-booki/1.png',
              'project/openclassrooms/projet2-booki/2.png',
              'project/openclassrooms/projet2-booki/3.png',
            ]}
            tags={['HTML', 'CSS']}
          >
            <h1>Booki</h1>
            <a href=""></a>
            <p>
              Ce projet basique servait d'introduction à cette formation, et
              consistait à un site statique de location immobiliere
            </p>
            <p></p>
          </ProjectThumbnail>
        </div>
        <h1 className={styles.title}>Projets</h1>
        <div className={styles.portfolio}>
          <ProjectThumbnail
            title="Foundry VTT Naheulbeuk"
            thumbnail="project/naheulbeuk/1.png"
            carousel={[
              'project/naheulbeuk/1.png',
              'project/naheulbeuk/2.png',
              'project/naheulbeuk/3.png',
              'project/naheulbeuk/4.png',
            ]}
            tags={['JS', 'Framework']}
          >
            <h1>Foundry VTT - Naheulbeuk</h1>
            <a href="https://gitlab.com/aperezgo74/naheulbeuk">
              Lien: Foundry VTT - Naheulbeuk
            </a>
            <p>
              Ce projet consistait à créer un système pour FoundyVTT. Foundry
              est un logiciel permettant de mettre en place du jeu de role en
              ligne, et il n'existait pas de système de jeu pour le jeu de role
              naheulbeuk.
            </p>
            <p>
              Ce projet a été fait en JS avec le framework specifique de
              l'application foundry
            </p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Talents-Affinity"
            thumbnail="project/talents-affinity/3.png"
            carousel={[
              'project/talents-affinity/1.png',
              'project/talents-affinity/2.png',
              'project/talents-affinity/3.png',
              'project/talents-affinity/4.png',
              'project/talents-affinity/5.png',
              'project/talents-affinity/6.png',
            ]}
            tags={['AngularJS', 'RubyOnRails', 'SHELL']}
          >
            <h1>Talents Affinity</h1>
            <a href="">Lien: Talents Affinity</a>
            <p>
              Projet réalisé durant mon stage de DUT, puis j'ai continué de
              travailler pendant 1 mois pour l'entreprise
            </p>
            <p>
              Ce projet a été codé en AngularJS pour le front end et RubyOnRails
              pour le back end. L'application consistait à permettre à des
              employés de grandes entreprise de renseigner un eensemble de
              compétences qu'ils ont pu acquerir pour ensuite permettre à ces
              employés d'être associé à des mentors ou des postes specifiques.
            </p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Site AngularJS/RubyOnRails Goldrush"
            thumbnail="project/goldrush.png"
            tags={['AngularJS', 'RubyOnRails']}
            carousel={['project/goldrush.png']}
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="OrcWar"
            thumbnail="project/orcwar/2.png"
            carousel={[
              'project/orcwar/1.png',
              'project/orcwar/2.png',
              'project/orcwar/3.png',
            ]}
            tags={['Unity3D', 'C#', 'Android']}
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Jonquille Sportive Reignier"
            thumbnail="project/jonquille/1.png"
            carousel={['project/jonquille/1.png', 'project/jonquille/2.png']}
            tags={['PHP']}
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Bujinkan-kanji"
            thumbnail="project/bujinkan-kanji.png"
            carousel={['project/bujinkan-kanji.png']}
            tags={['WordPress', 'PHP']}
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="RPG 3D Unity"
            thumbnail="project/rpg3d/1.png"
            carousel={[
              'project/rpg3d/1.png',
              'project/rpg3d/2.png',
              'project/rpg3d/3.png',
              'project/rpg3d/4.png',
            ]}
            tags={['Unity3D', 'C#', 'Maya 3D']}
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="RPG tactical 3D Unity"
            thumbnail="project/tactical/1.png"
            carousel={['project/tactical/1.png']}
            tags={['Unity3D', 'C#', 'Maya 3D']}
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="android Unity"
            thumbnail="project/android/1.png"
            carousel={['project/android/1.png']}
            tags={['Unity3D', 'C#', 'Android']}
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="OCR Discord"
            thumbnail="project/OCR_discord/1.png"
            carousel={['project/OCR_discord/1.png']}
            tags={['JS', 'API Google']}
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="OCR Dofus"
            thumbnail="project/OCR_app/1.png"
            carousel={['project/OCR_app/1.png', 'project/OCR_app/2.png']}
            tags={['JS', 'NeutralinoJS', 'Tesseract']}
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Navigateur web simplifié"
            thumbnail="project/mini/2.png"
            carousel={['project/mini/1.png', 'project/mini/2.png']}
            tags={['JS', 'NeutralinoJS']}
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Lecteur multimédia wpf"
            thumbnail="project/PFAudio.png"
            carousel={['project/PFAudio.png']}
            tags={['WPF', 'C#']}
          >
            <p>Test</p>
          </ProjectThumbnail>
        </div>

        <h1 className={styles.title}>Vieux projets</h1>
        <div className={styles.portfolio}>
          <ProjectThumbnail
            title="WakeOnLan PHP"
            thumbnail=""
            tags={['PHP']}
          ></ProjectThumbnail>
          <ProjectThumbnail title="Fnac PHP" thumbnail="" tags={['PHP']}>
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Bloc notes C++"
            thumbnail=""
            tags={['C++', 'Qt']}
          >
            <p>Test</p>
          </ProjectThumbnail>

          <ProjectThumbnail
            title="Bot discord parsing"
            thumbnail=""
            tags={['JS']}
          >
            <p>Test</p>
          </ProjectThumbnail>
          <ProjectThumbnail
            title="Logiciel de chat en réseau winform"
            thumbnail=""
            tags={['WinForm', 'C#']}
          >
            <p>Test</p>
          </ProjectThumbnail>
        </div>
      </OpenThumbnailContext.Provider>
    </>
  )
}
