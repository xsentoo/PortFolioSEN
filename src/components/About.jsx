import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Qu'est-ce que le BTS SIO ?
          </p>
        </div>

        <p className="text-xl mt-8">
          Le Brevet de Technicien Supérieur en Services Informatiques aux Organisations (BTS SIO) s'adresse à ceux qui souhaitent acquérir une formation complète en deux ans dans les domaines de l'administration réseau ou du développement informatique. Cette formation vise à préparer les étudiants soit à intégrer directement le marché du travail, soit à poursuivre des études supérieures dans le domaine de l'informatique.
        </p>

        <div className="pb-8 mt-8">
          <p className="text-2xl font-bold inline border-b-4 border-gray-500">
            Le BTS SIO propose deux spécialités :
          </p>
        </div>

        <div className="text-xl mt-4">
          <p className="font-bold">Option SISR</p>
          <p>
            L’option Solution d’infrastructure, systèmes et réseaux forme des professionnels des réseaux et équipements informatiques (installation, maintenance, sécurité). En sortant d’un BTS SIO SISR, vous serez capables de gérer et d’administrer le réseau d’une société et d’assurer sa sécurité et sa maintenance. Les techniciens supérieurs en informatique option SISR peuvent accéder aux métiers de :
          </p>
          <ul className="list-disc pl-8 mt-4">
            <li>Administrateur systèmes et réseaux</li>
            <li>Informaticien support et déploiement</li>
            <li>Pilote d’exploitation</li>
            <li>Support systèmes et réseaux</li>
            <li>Technicien d’infrastructure</li>
            <li>Technicien de production</li>
            <li>Technicien micro et réseaux</li>
          </ul>
        </div>

        <div className="text-xl mt-8">
          <p className="font-bold">Option SLAM</p>
          <p>
            L’option Solutions logicielles et applications métiers forme des spécialistes des logiciels (rédaction d’un cahier des charges, formulation des besoins et spécifications, développement, intégration au sein de la société). Les techniciens supérieurs en informatique option SLAM sont préparés aux métiers de :
          </p>
          <ul className="list-disc pl-8 mt-4">
            <li>Développeur d’applications informatiques</li>
            <li>Développeur informatique</li>
            <li>Analyste d’applications ou d’études</li>
            <li>Analyste programmeur</li>
            <li>Programmeur analyste</li>
            <li>Programmeur d’applications</li>
            <li>Responsable des services applicatifs</li>
            <li>Technicien d’études informatiques</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
