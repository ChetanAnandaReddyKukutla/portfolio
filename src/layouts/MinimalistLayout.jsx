import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import projectsData from "../data/projects.json";

export default function MinimalistLayout() {
  const [openCategories, setOpenCategories] = useState({
    Education: false,
    Certificates: false,
    Projects: false, // Added "Projects" to the state
  });

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Filter projects with the category "projects"
  const filteredProjects = projectsData.filter(
    (project) => project.category === "projects"
  );

  return (
    <div className="flex min-h-screen justify-center bg-zinc-900">
      <div className="flex flex-col gap-4 p-4 py-4 text-zinc-50 md:w-3/5 md:gap-6 md:p-0 md:py-8 lg:gap-8 lg:py-12 xl:w-1/3">
        <section>
          <h1 className="mb-1 text-lg font-semibold md:text-xl lg:text-2xl">About me</h1>
          <p className="text-zinc-300">
            I’m Chetan Ananda Reddy Kukutla, a Computer Science student with a passion for full-stack development and building real-time web apps. I enjoy turning ideas into interactive, user-friendly experiences and constantly strive to learn and grow through hands-on projects.
          </p>
        </section>
        <section>
          <h2 className="mb-1 text-lg font-semibold md:text-xl lg:text-2xl">Education</h2>
          <div className="flex flex-col gap-2">
            <button
              className={`flex w-full items-center justify-between border border-zinc-700 px-2 py-0.5 font-semibold hover:cursor-pointer md:text-lg ${
                openCategories["Education"] ? "rounded-t" : "rounded"
              }`}
              onClick={() => toggleCategory("Education")}
            >
              Education
              <FaChevronDown
                className={`ml-2 text-base transition-transform duration-200 ${
                  openCategories["Education"] ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`transition-max-height overflow-hidden duration-300 ease-in-out ${
                openCategories["Education"] ? "max-h-screen" : "max-h-0"
              }`}
            >
              <ul className="rounded-b border border-t-0 border-zinc-700 px-2 py-1">
                <li className="mb-2">
                  <p className="text-cyan-500 font-semibold">Lovely Professional University</p>
                  <p className="text-zinc-300">Since Aug 2022</p>
                  <p className="text-zinc-300">Computer Science and Engineering — CGPA: 7.5</p>
                  <p className="text-zinc-300">Jalandhar, Punjab</p>
                </li>
                <li className="mb-2">
                  <p className="text-cyan-500 font-semibold">Sri Chaitanya Junior Kalasala</p>
                  <p className="text-zinc-300">Jun 2022</p>
                  <p className="text-zinc-300">Intermediate — GPA: 8.5</p>
                  <p className="text-zinc-300">Hyderabad, Telangana</p>
                </li>
                <li className="mb-2">
                  <p className="text-cyan-500 font-semibold">Sri Chaitanya School</p>
                  <p className="text-zinc-300">Mar 2020</p>
                  <p className="text-zinc-300">Matriculation — GPA: 10</p>
                  <p className="text-zinc-300">Hyderabad, Telangana</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h2 className="mb-1 text-lg font-semibold md:text-xl lg:text-2xl">Certificates</h2>
          <div className="flex flex-col gap-2">
            <button
              className={`flex w-full items-center justify-between border border-zinc-700 px-2 py-0.5 font-semibold hover:cursor-pointer md:text-lg ${
                openCategories["Certificates"] ? "rounded-t" : "rounded"
              }`}
              onClick={() => toggleCategory("Certificates")}
            >
              Certificates
              <FaChevronDown
                className={`ml-2 text-base transition-transform duration-200 ${
                  openCategories["Certificates"] ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`transition-max-height overflow-hidden duration-300 ease-in-out ${
                openCategories["Certificates"] ? "max-h-screen" : "max-h-0"
              }`}
            >
              <ul className="rounded-b border border-t-0 border-zinc-700 px-2 py-1">
                <li className="mb-2">
                  <p className="text-cyan-500 font-semibold">Python, Data Science & Machine Learning Integrated Course</p>
                  <p className="text-zinc-300">Jul 2024</p>
                  <p className="text-zinc-300">Cipher Schools</p>
                </li>
                <li className="mb-2">
                  <p className="text-cyan-500 font-semibold">AI and Machine Learning</p>
                  <p className="text-zinc-300">Nov 2023</p>
                  <p className="text-zinc-300">LinkedIn Learning</p>
                </li>
                <li className="mb-2">
                  <p className="text-cyan-500 font-semibold">Web Development Certification</p>
                  <p className="text-zinc-300">Nov 2023</p>
                  <p className="text-zinc-300">Internshala</p>
                </li>
                <li className="mb-2">
                  <p className="text-cyan-500 font-semibold">Full-Stack Web Developer Certification</p>
                  <p className="text-zinc-300">Feb 2023</p>
                  <p className="text-zinc-300">LinkedIn Learning</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h2 className="mb-1 text-lg font-semibold md:text-xl lg:text-2xl">Projects</h2>
          <div className="flex flex-col gap-2">
            <button
              className={`flex w-full items-center justify-between border border-zinc-700 px-2 py-0.5 font-semibold hover:cursor-pointer md:text-lg ${
                openCategories["Projects"] ? "rounded-t" : "rounded"
              }`}
              onClick={() => toggleCategory("Projects")}
            >
              Projects
              <FaChevronDown
                className={`ml-2 text-base transition-transform duration-200 ${
                  openCategories["Projects"] ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`transition-max-height overflow-hidden duration-300 ease-in-out ${
                openCategories["Projects"] ? "max-h-screen" : "max-h-0"
              }`}
            >
              <ul className="rounded-b border border-t-0 border-zinc-700 px-2 py-1">
                {filteredProjects.map((project) => (
                  <li className="mb-2" key={project.id}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-500 font-semibold underline hover:text-cyan-400"
                    >
                      {project.title}
                    </a>
                    <p className="text-zinc-300">{project.short_desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h3 className="mb-1 text-lg font-semibold md:text-xl lg:text-2xl">Interests</h3>
          <ul className="ml-4 list-disc text-zinc-300">
            <li>Full-stack dev</li>
            <li>Technology</li>
            <li>Web3</li>
            <li>graphic designing</li>
            <li>Art</li>
            <li>Design</li>
          </ul>
        </section>
        <section>
          <h4 className="mb-1 text-lg font-semibold md:text-xl lg:text-2xl">Links & contact</h4>
          <span className="flex flex-wrap gap-2 text-sm text-zinc-300">
            <a
              target="_blank"
              className="rounded border border-zinc-700 px-2 py-0.5 duration-150 hover:bg-zinc-700 hover:text-zinc-50"
              href="https://github.com/ChetanAnandaReddyKukutla"
            >
              Github
            </a>
            <a
              target="_blank"
              className="rounded border border-zinc-700 px-2 py-0.5 duration-150 hover:bg-zinc-700 hover:text-zinc-50"
              href="https://www.linkedin.com/in/chetananandareddykukutla/"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              className="rounded border border-zinc-700 px-2 py-0.5 duration-150 hover:bg-zinc-700 hover:text-zinc-50"
              href="https://x.com/Itona300"
            >
              X
            </a>
            <a
              target="_blank"
              className="rounded border border-zinc-700 px-2 py-0.5 duration-150 hover:bg-zinc-700 hover:text-zinc-50"
              href="mailto:chetananandareddykukutla@gmail.com"
            >
              Gmail
            </a>
          </span>
        </section>
      </div>
    </div>
  );
}