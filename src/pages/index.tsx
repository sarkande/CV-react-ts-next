import Head from "next/head";
import { NavBar } from "@/components/NavBar";

export default function Home() {

   return (
      <>
         <Head>
            <title>Home</title>
         </Head>
         <h1>SI VOUS ETES UN RECRUTEUR ET QUE VOUS PASSEZ PAR LA</h1>
         <h2>Ce site est encore en construction, dans le pavé en dessous, 
            je raconte ma vie et je ne me suis pas encore relu donc il peut manquer des choses ou a contrario je peux en avoir un peu trop dit sur moi</h2>
         <section><h1>Bienvenue sur mon site</h1>
         <p>Ce site à vocation à m'aider à promouvoir mes capacités dans le but de trouver un emploi.</p>
         <p>Dans cette partie du site, vous aurez accès à un petit résumé permettant de me présenter</p>
         <p> Dans la partie CV vous pourrez visualiser directement mon CV complet ou télécharger une version pdf plus condensé </p>
         <p>Dans la partie Portfolio, une liste non exhaustive de l'ensemble de mes projets.
             Vous y trouverez donc des screenshots et en fonction de l'anciennete du projet*, des codes source.</p>
             <p>* a condition bien sur que le projet soit publique et que j'ai encore les sources</p>
             
             <p>En haut à droite, vous pourrez accéder directement à mon répertoire Github, mon bitbucket ainsi que mon linkedin</p>
     
               <p>Dans le but de m'améliorer en React JS, ce site est codé avec le framework Next.JS</p>
             </section>

             <section><h1>Qui suis-je ?</h1>
             <h2>Mon parcours professionnel/personnel en informatique</h2>
               <p>J'ai commencé l'informatique vers mes 11 ans puisque c'est à ce moment là que j'ai eu mon premier ordinateur, un windows 95 dont je ne pouvais pas faire grand chose mis à part lire des demos de jeux, mais ça m'a appris un peu à bidouiller et des bases d'anglais.
               Arrivé au collège, en 4ème, j'ai eu l'idée avec des amis de créer un MMORPG, Dofus étant la grande mode de l'époque. Donc on a commencer à essayer d'apprendre le C ensemble, puis nous nous somme très vite rendu compte que le projet n'aller mener nulle part donc ils ont décider d'arreter le code mais pas moi. 
               Après avoir réussi à me débrouillé pour apprendre des bases en utilisant le peu de ressource francaise qui existait à l'époque, developpez.com et les prémices du site du zéro, j'ai appris le C et le C++ puis je me suis dirigé vers le langage xHTML et CSS puis PHP. La principale difficulté auquel j'ai du faire face,
               est que je n'avais pas internet chez moi. Je devais donc trouver des ressources sur internet au cdi du collège et ensuite chez moi me debrouiller avec ce que j'avais trouvé, par exemple la documentations en anglais de la SDL, lors de la création d'ébauche de jeu 2d. 
               Etant pas mal impliqué dans les activités de club que proposait le collège, je me suis lançé dans la création, avec l'aval du directeur du collège de l'époque, de créer un club d'informatique où je pouvais aider les autres élèves à apprendre à créer leur site web.
               J'ai fait ça jusqu'à la fin de la 3ème, et ça m'a permis de consolider mes bases. La même année où laquelle je créais ce club, j'ai eu mon premier pc portable, un asus EEEPC 701. C'était un des premiers notebook, qui avait l'avantage de ne pas couter très cher, mais qui avait le défaut de fonctionner sur une distribution modifié de linux,
               Xandros, qui ne permettait de lancer que des applications préinstaller. J'ai donc commencé par apprendre le fonctionnement du terminal, que l'on pouvait lancer en bidouillant un peu. Par la suite, j'ai pu installer une autre distribution, Ubuntu. L'avantage d'avoir commencé la programmation et le système aussi jeune, et à un moment où internet était beaucoup moins accessible,
               est que j'ai pu apprendre à me débrouiller completement pour chercher des ressources, que ce soit en anglais ou juste en essayant.
               
               Arrivé en 3ème, j'ai eu mon premier stage à faire, un mini stage de 2 semaines, que j'ai effectué dans la mairie de saint julien, où j'ai pu travailler en complète autonomie pour reinstaller des machines tournant sous windows xp. L'idée était de réparer les machines qui ne tournait plus correctement, et de démonter les tours HS pour pouvoir combiner plusieurs ordinateurs. (Disque dur, lecteur de disque ou ram principalement)
               Par la suite je suis arrivé au lycée, et j'ai beaucoup moins programmé par rapport au collège pour me concentrer sur des réparations d'ordinateur. J'ai tout de même pu coder 3 projets dont je me souviens, un editeur de texte fonctionnant en C++ sous QT, un WakeOnLan basé sur PHP permettant d'allumer des pcs directement depuis le réseau et enfin un projet que j'ai du réaliser en C pour le bac, 
               la programmation d'une carte arduino et d'un module bluetooth controlé par portable servant à faire tourner des servomoteurs pour controller un ballon sonde. C'est à ce moment là que j'ai commencé à m'interesser à Unity3D qui fonctionnait à l'époque sur du JS.

               Arrivé en DUT, j'ai pu consolider mes connaissances, notamment en BDD, où j'ai eu l'occasion de travailler sur du PostGres, de l'oracle et du MSQL. Je possédais déjà de très forte connaissances en développement, ce qui à fait que je n'ai eu aucune difficultés pour réussir le diplome, et ai pu en profiter pour donner des cours de soutien, notamment en système et PHP pour 
               aider les élèves en difficultés. On a du faire nombreux projets pendant les 2 années d'études, parmi les principaux et qui ont pris le plus de temps:
               </p>
               <ul>

                  <li>En groupe de 5, Reproduction complète du site de la fnac en ASP.net (sans la partie paiement)</li>
                  <li>En groupe de 5 également, Un site pour une association de foot, Jonquille sportive reignier. Nous avions d'abord commencé par coder le site en ASP.net mais trouvé un hébergeur à bas cout étant mission impossible, on a par la suite switch sur du PHP from scratch</li>
                  <li>En solo, venant de commencer les cours de c#, j'ai créer une application winform, qui était un logiciel permettant de chatter en réseau en utilisant le protocole TCP/ip</li>
                  <li>En solo, un lecteur multimédia en c# et en utilisant les wpf</li>
                  <li>En groupe de 3, une application android, avec android studio et java, permettant d'afficher l'ensemble des plats de la semaine pour chacun des 3 selfs du campus</li>
               </ul>


<p>
            En parallele des études, continuant à réaliser des petits projets sur unity 3D, j'ai eu l'occasion de travailler en freelance sur un jeu mobile en 3D, OrcWarRTS. Etant en complète autonomie sur ce projet, j'ai pu apprendre de nombreuses choses, notamment sur l'importance d'être rigoureux dans la gestion des fichiers.
            J'ai également décidé de rejoindre un club d'arts martiaux pour rester en forme, et je me suis rendu compte que leur site était completement laisser à l'abandon, donc j'ai commencé par le maintenir complétement benevolement, il fonctionnait sur JOOMLA. 
            Le précédent développeur qui s'occupait du renouvellement du domaine et de l'hebergeur, ayant completement oublié de s'en occuper, a provoquer la perte totale du site web. 
            Je suis donc reparti de 0 en créant un site avec wordpress, puis en le modifiant en fonction des besoins du club. A ce jour je continue de m'occuper du site, principalement en terme de webmastering. Mais une nouvelle version du site fonctionnant sur ReactJS est en cours de developpement, puisque le club à décider de s'etendre dans d'autres régions.
            A la fin de mon DUT, j'ai du effectué un stage de 2 mois pour pouvoir valider le diplome. J'ai donc eu la chance de travailler pendant 2 mois en tant que stagiaire, puis 1 mois supplementaire en freelance pour avancer le projet. J'ai donc du développer des fonctionnalités front end, avec angularJS; et back end, avec RubyOnRails et shell. 
            Pour ce projet j'était en complète autonomie, et j'utilisais le trello de l'entreprise pour travailler en méthode agile. Le code était ensuite revu avec mon maitre de stage pour pouvoir être merge avec l'actuel en utilisant git et bitbucket.

            Apres le DUT, je me suis dirigé vers une Licence 3 Informatique, mais du à des problèmes avec la bourse, je n'ai pas pu terminer mon année. J'ai donc travailler à Auchan Drive, jusqu'en Septembre où j'ai décidé de partir à Grenoble pour étudier l'anglais et le japonais dans le but de pouvoir trouver du travail en informatique partout dans le monde.
            J'ai donc commencer par une année de L0 avec uniquement du Japonais, ce qui permettait d'avoir un niveau théorique égale à une personne qui sort du bac en ayant choisis Japonais en deuxieme langue.Puis j'ai fait 2 année de licence anglais et japonais. Je n'ai pas pu terminer la dernière année (bourse et covid) mais ce n'est pas très important car mon but initiale en 
            commencant cette licence était de renforcer mes bases d'anglais et d'améliorer mon japonais que j'avais travaillé pendant 2 année en option pendant le DUT

            Je suis donc retourner sur Annecy, avec l'objectif de travailler en tant que developpeur, en effet malgrés que j'étudie les langues à Grenbole, je n'ai pas cesser de faire des projets, principalement en JS et en c# avec Unity3D.
            Malgré le fait que j'ai énormement d'experiences sur des projets personnel, je n'ai que peu d'experiences professionnel, j'ai décider de faire une formation me permettant d'améliorer ça et d'avoir une équivalence bac+3/4. 
            En parallele de cette formation j'ai decidé de passer mon permis que j'ai eu sans trop de difficultés.
               
               Actuellement je suis donc en recherche d'emploi, et si vous avez lu ce pavé, vous comprendrez que ma principale qualité est que je suis autodidacte. Idéalement je cherche un emploi en full remote, qui permettrait donc a terme de pouvoir travailler depuis d'autres pays
               </p>
             </section>
             <section>

               <h1>Mes principales compétences</h1>
               <h2>Capacités technique</h2>
               
               <p>J'ai principalement travaillé sur des projets c#,js et système. C'est dans ces points en particulier que j'excelle
               </p>

               <h2>Qualités humaines</h2>
               <h3>Autodidacte</h3>
               <p>J'adore apprendre, et je suis capable de me former très vite à une technologie</p>
               <h3>Passionné</h3>
               <p>J'adore travailler en informatique, et en particulier sur des nouveaux projets.</p>
               <h3>Gestion du stress</h3>
               <p>Je suis très efficaces sur les situations de rush, et j'arrive très bien à gérer mon stress</p>

               <h2>Défauts</h2>

               <p>Puisqu'il est aussi important de parler de ses défauts que de ses qualités, envoila quelques uns</p>
               <h3>Grammaire</h3>
               <p>Je ne suis pas très bon en grammaire, j'ai tendance à faire quelques fautes, mais je compense grâce aux correcteurs en ligne</p>
               <h3>Répétition de tâche</h3>
               <p>J'ai beaucoup de mal à faire longtemps la même chose en "débranchant" mon cerveau.(type travail usine) 
                  Ce que j'apprecie avec le developpement, c'est le fait d'avoir de nouveaux problemes à résoudre, de constamment essayer de trouver une meilleur solution à un probleme.</p>


               <h2>Langues: </h2>
               <p>Pour toutes les langues étrangères, mon principal défaut est la capacité de m'exprimer à l'oral. Je peux comprendre, lire ou écrire des textes sans problème, 
                  mais le manque de pratique fais qu'il m'est compliqué de trouvé des mots sur ce que je veux dire</p>
               <h3>Anglais</h3>
               <p>Je possède un très bon niveau d'anglais, notamment pour lire et écrire. 
                  Je peux sans problème comprendre et parler, mais je n'ai pas l'habitude donc je ne suis pas très à l'aise. </p>

                  <h3>Japonais</h3>
               <p>Je possède un niveau intermédiaire en japonais. Je peux écrire et lire/traduire des textes si j'ai suffisamment de temps devant moi, 
                  les conversations orales sont plus compliqués, je peux discuter sur une conversation de la vie courante mais j'en suis incapable d'improviser un dialogue dans une contexte professionnelle.
                </p>

                <h3>Espagnol</h3>
               <p>Je possède un niveau intermédiaire en espagnol. J'ai arreté d'en faire au lycée. 
                  Ayant de la famille qui parle espagnol, j'ai de bonne capacité pour le comprendre à l'oral mais je ne le parle que très rarement.
                </p>
               
               </section>
      </>
   );
}
