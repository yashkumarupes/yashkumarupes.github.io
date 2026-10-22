export const portfolio = {
  personal: {
    name: 'Yash Kumar',
    title: 'AI & Full-Stack Developer',
    headline: 'AI & Full-Stack Developer Building Reliable, Intelligent and Data-Driven Applications.',
    summary: 'Computer Science and Engineering undergraduate specializing in Data Science with hands-on experience developing LLM-powered applications, intelligent workflows and backend-integrated AI systems. Skilled in building end-to-end solutions with a focus on reliability, privacy, structured responses, rapid prototyping and real-world problem-solving.',
    email: 'yashkumar.29.26@gmail.com', phone: '+91-9905715825',
    github: 'https://github.com/yashkumarupes', linkedin: 'https://www.linkedin.com/in/yash-kumar-upes1234/',
    image: '/assets/yash-kumar-profile.png', resume: '/assets/yash-kumar-resume.pdf'
  },
  nav: [['home','Home'],['about','About'],['skills','Skills'],['experience','Experience'],['projects','Projects'],['education','Education'],['certifications','Certifications'],['achievements','Achievements'],['contact','Contact']],
  skills: {
    'Programming Languages':['Java','Python','JavaScript'], Frontend:['React.js','HTML5','CSS3'],
    'Backend & Frameworks':['Node.js','Express.js','FastAPI','Flask','Streamlit'],
    'Generative AI & Data':['Generative AI','Large Language Models','RAG Pipelines','Prompt Engineering','Machine Learning','Natural Language Processing','Computer Vision','Local LLMs'],
    'ML Technologies':['OpenCV','Keras','CNN','MobileNetV2'], Databases:['MySQL','MongoDB','SQLite','Snowflake'],
    'Data Analytics':['Power BI','Data Cleaning','Data Visualization','Analytical Reporting'],
    'Development Tools':['Git','GitHub','Docker','Axios','Puppeteer','Cheerio'],
    'Cloud & Platforms':['Oracle Cloud Infrastructure','Microsoft Azure','Azure Database Administration']
  },
  tickerSkills: ['Power BI','Java','Docker','MySQL','Systems Programming','Python','Generative AI','React.js','Snowflake','Machine Learning','Node.js','Data Analytics'],
  experience: [
    { role:'Software Engineering Intern – AI & Data Analytics', company:'Tata Steel, Jamshedpur', duration:'Jun 2026 – Jul 2026', bullets:['Developed a chatbot to answer natural-language queries related to industrial machine and IoT data.','Integrated Snowflake with the backend for secure and accurate retrieval of machine-performance data.','Implemented query-validation and response-handling mechanisms to improve accuracy and reliability.'], tags:['Python','Snowflake','Generative AI','Natural Language Processing','Backend Development','IoT Analytics'] },
    { role:'Software Developer Intern', company:'Innovixa Services Private Ltd., Jamshedpur', duration:'Jun 2025 – Jul 2025', bullets:['Collaborated with the development team to build a facial-recognition-based employee attendance system.','Implemented real-time face detection, identity verification and automated check-in/check-out tracking.','Integrated attendance records with a centralized database and an administrative monitoring dashboard.'], tags:['Python','Computer Vision','Facial Recognition','Database Integration','Dashboard Development'] }
  ],
  projects: [
    { title:'SEO Website Analyzer', category:'Full-Stack Web Application', description:'A full-stack SEO auditing platform designed to analyse website content, technical SEO factors and keyword optimization.', tags:['Node.js','Express.js','JavaScript','HTML','CSS','SQLite using sql.js','Axios','Puppeteer','Cheerio'], details:['Built a weighted SEO scoring engine.','Added keyword-relevance analysis.','Generated actionable SEO recommendations.','Implemented secure authentication.','Added scan-history functionality.','Added PDF-report export.','Used a modular backend architecture.'], github:'', demo:'' },
    { title:'Password Strength Analyzer Suite', category:'Generative AI and Cybersecurity', description:'A privacy-focused offline password-analysis suite combining deterministic security checks with local AI-powered diagnostics.', tags:['Python','Flask','Local LLM','SSE Streaming','Shannon Entropy','zxcvbn','llama-cpp-python'], details:['Combined rule-based analysis, Shannon entropy and zxcvbn.','Streamed brute-force time estimates using Server-Sent Events.','Reduced perceived interface latency by approximately 50%.','Integrated a local LLM without an external API.','Kept password diagnostics private and offline.'], github:'', demo:'' },
    { title:'Facial Emotion Detection System', category:'Machine Learning and Computer Vision', description:'A real-time computer-vision system that detects faces and predicts facial emotions from live webcam input.', tags:['Python','OpenCV','Keras','CNN','MobileNetV2'], details:['Developed real-time emotion detection using OpenCV and Keras.','Created a custom CNN for grayscale inputs.','Evaluated MobileNetV2 transfer learning.','Applied image preprocessing.','Used frame averaging to improve prediction stability.'], github:'', demo:'' }
  ],
  education: [
    { institution:'UPES, Dehradun', degree:'Bachelor of Technology (Hons.) in Computer Science and Engineering', meta:'Data Science · Aug 2023 – May 2027', score:'CGPA 7.74 / 10' },
    { institution:'Vidya Bharati Chinmaya Vidyalaya, Jamshedpur, Jharkhand', degree:'Class XII – CBSE Board', meta:'Apr 2022 – May 2023', score:'81.6%' },
    { institution:'Taurian World School, Ranchi, Jharkhand', degree:'Class X – CBSE Board', meta:'Apr 2020 – May 2021', score:'93%' }
  ],
  certifications: [{ title:'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional', issuer:'Oracle University' },{ title:'Microsoft Certified: Azure Database Administrator Associate', issuer:'Microsoft DP-300' }],
  achievements: [
    { title:'Head, Documentation Team – Avishkarnam, UPES', description:'Led documentation and coordination for national-level literary events.' },
    { title:'Associate Secretary – NSS UPES', description:'Led and coordinated social-service initiatives and community drives.' },
    { title:'Represented University and SOCS Football Team', description:'Represented the university in intra- and inter-college football tournaments.' }
  ]
};
