import React from 'react';
import { Github, Linkedin, Mail, FileCode2, Database, PenTool as Tool, Code2, BrainCircuit } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Award } from "lucide-react";

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-md transition-colors ${
        isActive
          ? 'bg-red-600 text-white'
          : 'text-gray-300 hover:text-white hover:bg-red-900'
      }`}
    >
      {children}
    </Link>
  );
}

function Navigation() {
  return (
    <nav className="bg-gradient-to-r from-black via-red-950 to-black py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/experience">Experience</NavLink>
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative w-48 h-48 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-900 rounded-full blur-md transform -rotate-6"></div>
            <img
              src="icon/profile_pic.jpg"
              alt="Profile picture"
              className="relative w-full h-full object-cover rounded-full border-4 border-red-500 transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-red-500">Shivam Raj</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            MCA Student at Dayananda Sagar College of Arts Science and Commerce
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/Cyb3r3x3r" className="text-gray-400 hover:text-red-500 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/shivamraj008" className="text-gray-400 hover:text-red-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:shivamraj878@gmail.com" className="text-gray-400 hover:text-red-500 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-gradient-to-r from-black via-red-950 to-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a passionate MCA student with a strong foundation in various programming languages and technologies.
              Currently pursuing my Master's in Computer Applications, I am eager to apply my knowledge in real-world
              projects and continue learning new technologies. With hands-on experience in chatbot development and
              various software projects, I am constantly expanding my skillset.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Programming Languages */}
            <div className="bg-gradient-to-br from-black to-red-950 rounded-lg p-6 hover:from-red-950 hover:to-black transition-all duration-300 border border-red-900">
              <FileCode2 className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Python</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>C</li>
              </ul>
            </div>

            {/* Web Technologies */}
            <div className="bg-gradient-to-br from-black to-red-950 rounded-lg p-6 hover:from-red-950 hover:to-black transition-all duration-300 border border-red-900">
              <Database className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Web Technologies</h3>
              <ul className="space-y-2 text-gray-300">
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Django</li>
                <li>MySQL</li>
              </ul>
            </div>

            {/* Tools & Technologies */}
            <div className="bg-gradient-to-br from-black to-red-950 rounded-lg p-6 hover:from-red-950 hover:to-black transition-all duration-300 border border-red-900">
              <Tool className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Docker</li>
                <li>Git</li>
                <li>Jira</li>
                <li>Rasa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Additional Qualification Section */}
<section className="bg-gradient-to-r from-black via-red-950 to-black py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Education & Additional Qualifications</h2>
    
    <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
      
      {/* Education Section */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">Education</h3>
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-black to-red-950 rounded-lg p-6 border border-red-900">
            <h4 className="text-xl font-semibold mb-2">Master of Computer Applications (MCA)</h4>
            <p className="text-gray-300">Dayananda Sagar College of Arts Science and Commerce</p>
            <p className="text-gray-400">Present</p>
          </div>
          <div className="bg-gradient-to-br from-black to-red-950 rounded-lg p-6 border border-red-900">
            <h4 className="text-xl font-semibold mb-2">Maths Hons. in Bachelor of Science (B.Sc)</h4>
            <p className="text-gray-300">Veer Kunwar Singh University, Arrah, Bihar</p>
            <p className="text-gray-400">2017-2020</p>
          </div>
          <div className="bg-gradient-to-br from-black to-red-950 rounded-lg p-6 border border-red-900">
            <h4 className="text-xl font-semibold mb-2">Intermediate in Science (I.Sc)</h4>
            <p className="text-gray-300">M. V. College, Buxar, Bihar</p>
            <p className="text-gray-400">2015-2017</p>
          </div>
          <div className="bg-gradient-to-br from-black to-red-950 rounded-lg p-6 border border-red-900">
            <h4 className="text-xl font-semibold mb-2">10th Matric</h4>
            <p className="text-gray-300">Saraswati Vidya Mandir, Buxar, Bihar</p>
            <p className="text-gray-400">2015</p>
          </div>
        </div>
      </div>

      {/* Additional Qualifications Section */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">Additional Qualifications</h3>
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-black to-red-950 rounded-lg p-6 border border-red-900">
            <h4 className="text-xl font-semibold mb-2">Advanced Diploma in Computer Applications (ADCA)</h4>
            <p className="text-gray-300">Alma Computer Institute, Buxar</p>
            <p className="text-gray-400">2017-2018</p>
          </div>
          <div className="bg-gradient-to-br from-black to-red-950 rounded-lg p-6 border border-red-900">
            <h4 className="text-xl font-semibold mb-2">Post Graduate Diploma in Computer Applications (PGDCA)</h4>
            <p className="text-gray-300">Indira Gandhi National Open Univeristy,New Delhi</p>
            <p className="text-gray-400">2021-2022</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
    </>
  );
}

function ExperiencePage() {
  return (
    <div className="py-16">
      {/* Internship Section */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-black to-red-950 rounded-lg p-8 border border-red-900">
          <div className="flex items-start gap-4">
            <BrainCircuit className="w-12 h-12 text-red-500 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Chatbot Developer Intern</h3>
              <p className="text-xl text-red-500 mb-2">Infosys Springboard</p>
              <p className="text-gray-300 mb-4">
              A conversational AI chatbot with a UI using Streamlit and built using Rasa that provides personalized recommendations for 
              learning resources, including videos, books, and courses. Additionally, 
              the chatbot leverages a Hugging Face Google/Flan-t5-large model to 
              generate detailed explanations for various topics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* SkillSahyog */}
          <div className="bg-gradient-to-br from-black to-red-950 rounded-lg p-6 hover:from-red-950 hover:to-black transition-all duration-300 border border-red-900">
            <Code2 className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">SkillSahyog</h3>
            <p className="text-gray-300 mb-4">
              Full-stack web platform for peer-to-peer skill exchange using OTP-based login,
              AI skill matching, real-time chat, feedback, and admin moderation.
              Built with Django, WebSockets, and PostgreSQL.
            </p>
            <a href="https://github.com/Cyb3r3x3r/skillsahyog" className="text-red-500 hover:text-red-400 flex items-center gap-2">
              <Github size={20} />
              View on GitHub
            </a>
          </div>

          {/* Cybscan */}
          <div className="bg-gradient-to-br from-black to-red-950 rounded-lg p-6 hover:from-red-950 hover:to-black transition-all duration-300 border border-red-900">
            <Code2 className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cybscan</h3>
            <p className="text-gray-300 mb-4">
              Command-line WordPress vulnerability scanner with multithreading, plugin/theme detection,
              WPVulnDB integration, user enumeration, honeypot checks, and internal link crawling.
            </p>
            <a href="https://github.com/Cyb3r3x3r/cybscan" className="text-red-500 hover:text-red-400 flex items-center gap-2">
              <Github size={20} />
              View on GitHub
            </a>
          </div>

          {/* Sentiment Analysis Microservice */}
          <div className="bg-gradient-to-br from-black to-red-950 rounded-lg p-6 hover:from-red-950 hover:to-black transition-all duration-300 border border-red-900">
            <Code2 className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sentiment Analysis Microservice</h3>
            <p className="text-gray-300 mb-4">
              End-to-end microservice with a FastAPI backend, React frontend, and Docker Compose setup
              for sentiment prediction using Hugging Face transformers. Includes live inference and fine-tuning support.
            </p>
            <a href="https://github.com/Cyb3r3x3r/sentiment-predictor" className="text-red-500 hover:text-red-400 flex items-center gap-2">
              <Github size={20} />
              View on GitHub
            </a>
          </div>

          {/* Personalized Learning Chatbot */}
          <div className="bg-gradient-to-br from-black to-red-950 rounded-lg p-6 hover:from-red-950 hover:to-black transition-all duration-300 border border-red-900">
            <Code2 className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personalized Learning Chatbot</h3>
            <p className="text-gray-300 mb-4">
              Rasa-based chatbot with Streamlit UI to suggest learning resources and explain concepts
              using Flan-T5 model. Built during Infosys Springboard Internship 5.0.
            </p>
            <a href="https://github.com/your-username/personalized-learning-chatbot" className="text-red-500 hover:text-red-400 flex items-center gap-2">
              <Github size={20} />
              View on GitHub
            </a>
          </div>

          {/* TodoWoo */}
          <div className="bg-gradient-to-br from-black to-red-950 rounded-lg p-6 hover:from-red-950 hover:to-black transition-all duration-300 border border-red-900">
            <Code2 className="w-10 h-10 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">TodoWoo</h3>
            <p className="text-gray-300 mb-4">
              A Django-based to-do manager with user authentication, task creation, completion,
              and prioritization features. Designed for simplicity and functionality.
            </p>
            <a href="https://github.com/Cyb3r3x3r/TodoWoo" className="text-red-500 hover:text-red-400 flex items-center gap-2">
              <Github size={20} />
              View on GitHub
            </a>
          </div>
        </div>
      </section>
      {/* Certifications & Courses Section */}
<section className="container mx-auto px-4 mt-20">
  <h2 className="text-3xl font-bold text-center mb-12">Certifications & Courses</h2>
  <div className="max-w-4xl mx-auto bg-gradient-to-br from-black to-red-950 rounded-lg p-8 border border-red-900 space-y-6">
    
    {/* Strategy Formulation and Data Visualization */}
    <div className="flex items-start gap-4">
      <Award className="w-12 h-12 text-red-500 flex-shrink-0" />
      <div>
        <h3 className="text-2xl font-semibold mb-2">Strategy Formulation and Data Visualization</h3>
        <p className="text-xl text-red-500 mb-2">IIT Madras | February 2024</p>
        <p className="text-gray-300">Organized by: Centre for Outreach and Digital Education</p>
      </div>
    </div>

    {/* Programming in Java */}
    <div className="flex items-start gap-4">
      <Award className="w-12 h-12 text-red-500 flex-shrink-0" />
      <div>
        <h3 className="text-2xl font-semibold mb-2">Programming in Java</h3>
        <p className="text-xl text-red-500 mb-2">IIT Kharagpur | Jan 2024 - Apr 2024</p>
        <p className="text-gray-300">Instructor: Prof. Debasis Samantha</p>
        <p className="text-gray-300">Organized by: NPTEL Swayam</p>
      </div>
    </div>

    {/* TCS iON Career Edge - Young Professional */}
    <div className="flex items-start gap-4">
      <Award className="w-12 h-12 text-red-500 flex-shrink-0" />
      <div>
        <h3 className="text-2xl font-semibold mb-2">TCS iON Career Edge - Young Professional</h3>
        <p className="text-xl text-red-500 mb-2">TCS iON | Mar 2024 - May 2024</p>
        <p className="text-gray-300">A soft skills development course covering communication, workplace ethics, and professional grooming.</p>
      </div>
    </div>

  </div>
</section>

    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-black via-red-950 to-black text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
        
        {/* Footer */}
        <footer className="bg-gradient-to-r from-black via-red-950 to-black py-8 mt-20">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>© 2025 Shivam Raj. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;