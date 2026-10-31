import React from "react";

const Skills = () => {
  const skills = [
    { name: "DSA (Java)", percentage: 90, color: "#F0931C" },
    { name: "HTML", percentage: 90, color: "#DD4B25" },
    { name: "CSS", percentage: 90, color: "#633194" },
    { name: "JavaScript", percentage: 90, color: "#EFD81D" },
    { name: "React JS", percentage: 90, color: "#087A9F" },
    { name: "Node JS", percentage: 90, color: "#313131" },
    { name: "Express JS", percentage: 90, color: "#E9BE0F" },
    { name: "Tailwind CSS", percentage: 90, color: "#36B7F0" },
    { name: "MongoDB", percentage: 90, color: "#002A4D" },
    { name: "SQL", percentage: 90, color: "#D47131" },
    { name: "Bootstrap", percentage: 90, color: "#7710F1" },
    { name: "MaterialUI", percentage: 90, color: "#6C10ED" },
    { name: "Restful API's", percentage: 90, color: "#007EC0" },
    
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-sm font-medium dark:text-gray-300 text-gray-700">
              Expertise
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900">
            My <span className="text-red-500 dark:text-red-400">Skills</span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and problem-solving skills I use to build projects and
            develop efficient solutions.
          </p>
        </div>

        {/* Skill Circles */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="group relative flex items-center gap-2.5 rounded-full px-4 py-2.5 border border-gray-300/70 dark:border-gray-700 bg-transparent cursor-default transition-all duration-300 hover:-translate-y-0.5"
              style={{ "--skill-color": skill.color }}
            >
              {/* Hover tint + border in the skill's color */}
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  backgroundColor: `${skill.color}14`,
                  boxShadow: `inset 0 0 0 1px ${skill.color}80, 0 4px 18px ${skill.color}22`,
                }}
              ></span>

              {/* Colored dot */}
              <span
                className="relative w-2.5 h-2.5 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
                style={{
                  backgroundColor: skill.color,
                  boxShadow: `0 0 8px ${skill.color}99`,
                }}
              ></span>

              {/* Name */}
              <span className="relative text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

// import React from "react";

// const Skills = () => {
//   // Add as many skills as you like: just a name and a brand color
//   const skills = [
//     { name: "React JS", color: "#61DAFB" },
//     { name: "Tailwind CSS", color: "#06B6D4" },
//     { name: "DSA (Java)", color: "#4BC08D" },
//     { name: "JavaScript", color: "#F7DF1E" },
//     // { name: "Node JS", color: "#68A063" },
//     // { name: "HTML", color: "#E34F26" },
//   ];

//   return (
//     <section
//       id="skills"
//       className="min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative"
//     >
//       {/* Background Effects */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-4xl mx-auto w-full relative z-10">
//         {/* Heading */}
//         <div className="text-center mb-14" data-aos="fade-up">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5">
//             <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
//             <span className="text-sm font-medium dark:text-gray-300 text-gray-700">
//               Expertise
//             </span>
//           </div>

//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900">
//             My <span className="text-red-500 dark:text-red-400">Skills</span>
//           </h2>

//           <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Technologies and problem-solving skills I use to build projects and
//             develop efficient solutions.
//           </p>
//         </div>

//         {/* Skill Chips */}
//         <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
//           {skills.map((skill, index) => (
//             <div
//               key={skill.name}
//               data-aos="fade-up"
//               data-aos-delay={index * 50}
//               className="group relative flex items-center gap-2.5 rounded-full px-4 py-2.5 border border-gray-300/70 dark:border-gray-700 bg-transparent cursor-default transition-all duration-300 hover:-translate-y-0.5"
//               style={{ "--skill-color": skill.color }}
//             >
//               {/* Hover tint + border in the skill's color */}
//               <span
//                 className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//                 style={{
//                   backgroundColor: `${skill.color}14`,
//                   boxShadow: `inset 0 0 0 1px ${skill.color}80, 0 4px 18px ${skill.color}22`,
//                 }}
//               ></span>

//               {/* Colored dot */}
//               <span
//                 className="relative w-2.5 h-2.5 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
//                 style={{
//                   backgroundColor: skill.color,
//                   boxShadow: `0 0 8px ${skill.color}99`,
//                 }}
//               ></span>

//               {/* Name */}
//               <span className="relative text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
//                 {skill.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
