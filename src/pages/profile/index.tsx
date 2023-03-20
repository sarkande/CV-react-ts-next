import Head from 'next/head'
import styles from './profile.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Allan Perez - Parcours informatique</title>
      </Head>

      <section className={styles.section}>
        <h1 id="whoami">
          Mon parcours professionnel/personnel en informatique
        </h1>
        <p>
          Mon parcours informatique en tant que développeur à commencer au
          collège, en 4ème, j'ai eu l'idée avec des amis de créer un MMORPG,
          Dofus étant la grande mode de l'époque. Nous avons donc commencé à
          apprendre le C ensemble, puis nous nous sommes très vite rendu compte
          que le projet n'allait mener nulle part et avons stoppé le projet.
          Tout le groupe à décider d'arrêter d'apprendre à coder mis à part moi.
        </p>
        <p>
          Après avoir réussi à me débrouiller pour apprendre des bases en
          utilisant le peu de ressource française qui existait à l'époque,
          developpez.com et les prémices du site du zéro, j'ai appris le C et le
          C++ puis je me suis dirigé vers le langage xHTML et CSS puis PHP. La
          principale difficulté à laquelle j'ai dû faire face, est que je
          n'avais pas Internet chez moi. Je devais donc trouver des ressources
          sur Internet au CDI du collège et ensuite chez moi me débrouiller avec
          ce que j'avais pu ramener sur ma clé USB, par exemple la documentation
          en anglais de la SDL, lors de la création d'ébauche de jeu 2d.
        </p>
        <p>
          Étant pas mal impliqué dans les activités de club que proposait le
          collège, je me suis lancé dans la création, avec l'aval du directeur
          du collège de l'époque, de créer un club d'informatique où je pouvais
          aider les autres élèves à apprendre à créer leur site web. J'ai fait
          ça jusqu'à la fin de la 3ème, et ça m'a permis de consolider mes
          bases.
        </p>
        <p>
          La même année dans laquelle je créais ce club, j'ai eu mon premier pc
          portable, un asus EEEPC 701. C'était un des premiers notebook, qui
          avait l'avantage de ne pas coûter très cher, mais qui avait le défaut
          de fonctionner sur une distribution modifiée de linux, Xandros, qui ne
          permettait de lancer que des applications préinstaller. J'ai donc
          commencé par apprendre le fonctionnement d'un terminal UNIX, que l'on
          pouvait lancer en bidouillant un peu.
        </p>
        <p>
          Par la suite, j'ai pu installer une autre distribution, Ubuntu.
          L'avantage d'avoir commencé la programmation et le système aussi
          jeune, et à un moment où Internet était beaucoup moins accessible, est
          que j'ai pu apprendre à me débrouiller complètement pour chercher des
          ressources, que ce soit en anglais ou juste en essayant.
        </p>
        <p>
          Arrivé en 3ème, j'ai eu mon premier stage à faire, un mini stage de 2
          semaines, que j'ai effectué dans la mairie de Saint-Julien, où j'ai pu
          travailler en complète autonomie pour réinstaller des machines
          tournant sous Windows XP. L'idée était de réparer les machines qui ne
          tournaient plus correctement, et de démonter les tours HS pour pouvoir
          combiner plusieurs ordinateurs (disque dur, lecteur de disques ou RAM
          principalement). J'ai également créé ma première application, un
          éditeur de texte fonctionnant en C++ sous QT.
        </p>
        <p>
          Par la suite, je suis arrivé au lycée, et j'ai beaucoup moins
          programmé par rapport au collège pour me concentrer sur des
          réparations d'ordinateur. J'ai tout de même pu coder 2 projets dont je
          me souviens, un WakeOnLan basé sur PHP permettant d'allumer des PCs
          directement depuis le réseau et enfin un projet que j'ai du réaliser
          en C pour le bac, la programmation d'une carte arduino et d'un module
          bluetooth controlé par portable servant à faire tourner des
          servomoteurs pour controller un ballon sonde. C'est à ce moment-là que
          j'ai commencé à m'intéresser à Unity3D qui fonctionnait à l'époque sur
          du JS.
        </p>
        <p>
          Arrivé en DUT, j'ai pu consolider mes connaissances, notamment en BDD,
          où j'ai eu l'occasion de travailler sur du PostGres, de l'oracle et du
          MSQL. Je possédais déjà de très forte connaissances en développement,
          ce qui à fait que je n'ai eu aucunes difficultés pour réussir le
          diplôme, et ai pu en profiter pour donner des cours de soutien,
          notamment en système et PHP, pour aider les élèves en difficultés.
        </p>
        <p>
          Pendant ces 2 années d'études, j'ai travaillé sur pas mal de projets,
          soit pour l'université en groupe, soit de mon côté pour apprendre de
          nouvelles choses, parmi les principaux et qui ont pris le plus de
          temps :
        </p>
        <ul>
          <li>
            En groupe de 5, Reproduction complète du site de la Fnac en ASP.net
            (sans la partie paiement)
          </li>
          <li>
            En groupe de 5 également, Un site pour une association de foot,
            Jonquille sportive reignier. J'étais chef de projet et nous avons
            d'abord commencé par coder le site en ASP.net mais trouvé un
            hébergeur à bas coût étant mission impossible, on a par la suite
            switch sur du PHP from scratch.
          </li>
          <li>
            En solo, venant de commencer les cours de c#, j'ai créer une
            application winform, qui était un logiciel permettant de chatter en
            réseau en utilisant le protocole TCP/ip
          </li>
          <li>En solo, un lecteur multimédia en c# et en utilisant les wpf</li>
          <li>
            En groupe de 3, une application android, avec android studio et
            java, permettant d'afficher l'ensemble des plats de la semaine pour
            chacun des 3 selfs du campus
          </li>
        </ul>
        <p>
          En parallèle des études, continuant à réaliser des petits projets sur
          unity 3D, j'ai eu l'occasion de travailler en freelance sur un jeu
          mobile en 3D, OrcWarRTS. Étant en complète autonomie sur ce projet,
          j'ai pu apprendre de nombreuses choses, notamment sur l'importance
          d'être rigoureux dans la gestion des fichiers.
        </p>
        <p>
          Ça m'a permis d'améliorer mes bases et de créer des prototypes de
          jeux, la plupart en 3D et quelques-uns en réseaux. Ces projets sont
          néanmoins restés au stade de prototypes.
        </p>
        <p>
          J'ai également décidé de rejoindre un club d'arts martiaux (ninjutsu)
          pour rester en forme, et je me suis rendu compte que leur site était
          complètement laissé à l'abandon, donc j'ai commencé par le maintenir
          complétement bénévolement, il fonctionnait sur JOOMLA. Le précédent
          développeur qui s'occupait du renouvellement du domaine et de
          l'hébergeur, ayant oublié de s'en occuper, a provoqué la perte totale
          du site web.
        </p>
        <p>
          Je suis donc reparti de 0 en créant un site avec WordPress, puis en le
          modifiant en fonction des besoins du club. À ce jour, je continue de
          m'occuper du site, principalement en termes de webmastering, quelques
          fois en tant que développeur, pour rajouter des fonctionnalités
          interne (système de mail...). Mais une nouvelle version du site
          fonctionnant sur ReactJS est en cours de développement, puisque le
          club à décider de s'étendre dans d'autres régions.
        </p>
        <p>
          À la fin de mon DUT, j'ai dû effectuer un stage de 2 mois pour pouvoir
          valider le diplôme. J'ai donc eu la chance de travailler pendant 2
          mois en tant que stagiaire, puis 1 mois supplémentaire en freelance
          pour la start-up freshpigment. J'ai donc dû développer des
          fonctionnalités front end, avec angularJS; et back end, avec
          RubyOnRails et shell. Pour ce projet, j'étais en complète autonomie,
          et j'utilisais le trello de l'entreprise pour travailler en méthode
          agile. Le code était ensuite revu avec mon maître de stage pour
          pouvoir être merge avec l'actuel en utilisant git et bitbucket.
        </p>
        <p>
          Notre application faisant appel à des services externes au moyen d'une
          API d'une jeune entreprise, j'étais en relation avec leur
          lead-developer pour intégrer au mieux leur système ainsi que pour leur
          faire remonter les bugs que je trouvais.
        </p>
        <p>
          Pendant l'été, j'ai créé un site web utilisant AngularJS et
          RubyOnRails pour permettre de mettre en avant les activités de ma
          guilde, via un système de blog, sur le jeu DofusTouch qui venait de
          sortir sur android et iOS. Ça m'a permis de poursuivre l'apprentissage
          des technologies que j'avais pratiqué durant mon stage, et même si le
          projet n'est pas resté longtemps en vie, je n'en ai tiré que des
          bénéfices. En parallèle du site, j'ai également créer un bot discord
          permettant de parser et mettre en forme des données de plusieurs sites
          afin de faciliter l'avancé des gens qui jouaient au jeu.
        </p>

        <p>
          Après le DUT, je me suis dirigé vers une Licence 3 Informatique, mais
          dû à des problèmes administratif, je n'ai pas pu terminer mon année.
          J'ai donc travaillé à Auchan Drive, jusqu'en septembre où j'ai décidé
          de partir à Grenoble pour étudier l'anglais et le japonais dans le but
          de pouvoir trouver du travail en informatique partout dans le monde.
        </p>

        <p>
          J'ai donc commencer par une année de L0 avec uniquement du Japonais,
          ce qui permettait d'avoir un niveau théorique égale à une personne qui
          sort du bac en ayant choisis le Japonais en deuxième langue. Puis j'ai
          fait 2 années de licence anglais et japonais. Je n'ai pas pu terminer
          la dernière année (bourse et covid) mais ce n'est pas très important,
          car mon but initial en commençant cette licence était de renforcer mes
          bases d'Anglais et d'améliorer mon japonais que j'avais travaillé
          pendant 2 années en option pendant le DUT. Je suis donc retourner sur
          Annecy, avec l'objectif de travailler en tant que développeur, en
          effet bien que j'étudiais les langues à Grenoble, je n'ai pas cessé de
          faire des projets, principalement en JS et en c# avec Unity3D.
        </p>

        <p>
          Malgré le fait que j'ai énormément d'expériences sur des projets
          personnels, je n'ai que peu d'expériences professionnel, j'ai décidé
          de faire une formation me permettant d'améliorer ça et d'avoir une
          équivalence bac+3/4. La formation était une formation pour apprendre
          ReactJS, et j'ai dû réaliser 14 projets professionnels soumis à chaque
          fois à un jury différent. En parallèle de cette formation, j'ai décidé
          de passer mon permis que j'ai eu sans trop de difficultés.
        </p>

        <p>
          Actuellement, je suis en recherche d'emploi, et si vous avez lu ce
          pavé, vous comprendrez que ma principale qualité est que je suis
          autodidacte. Idéalement, je cherche un emploi en full remote, qui
          permettrait donc à terme de pouvoir travailler depuis d'autres pays.
          Si du full remote n'est pas possible, déménager ne me dérange pas si
          l'entreprise peut m'aider pour l'installation.
        </p>
      </section>
    </>
  )
}
