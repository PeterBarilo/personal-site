import React from 'react';
import Typewriter from 'typewriter-effect';
import ProjectCard from './projectCard';
import { useEffect, useState } from 'react';

const Projects = () => {
  const projects = [

    {
      name: 'Kidney-Wise',
      language: ['Python', 'Machine Learning'],
      skills: ['Machine Learning', 'Data Manipulation', 'Jupyter Notebook'],
      intro: 'Kidney-Wise is a machine learning-based solution developed to aid in the early detection and diagnosis of kidney disease. The goal of the project is to provide healthcare practitioners with a predictive tool that can analyze patient data, such as medical history, lab test results, and demographic information, to determine the likelihood of kidney disease. Early diagnosis is crucial in preventing the progression of chronic kidney conditions and reducing the risk of severe complications.',
      introTitle : 'Kidney-Wise: A Predictive Machine Learning Model for Kidney Disease Diagnosis',
      approach: ['Data Collection and Preprocessing: The foundation of Kidney-Wise is the dataset of patient records. The dataset likely includes various features such as blood pressure, age, glucose levels, and other vital health indicators that contribute to kidney health. Data preprocessing plays a significant role in cleaning the dataset by handling missing values, normalizing data, and feature scaling to ensure the algorithm receives standardized input. Techniques like data imputation are used to address missing values, and exploratory data analysis (EDA) helps identify the most relevant features for predicting kidney disease.', 'Model Selection: A key step in the Kidney-Wise project is choosing the appropriate machine learning model. Algorithms such as logistic regression, decision trees, random forests, or support vector machines (SVM) were likely considered. The model is trained on historical patient data, with features that indicate whether a patient has kidney disease or not. The training process involves tuning hyperparameters to optimize the model\'s accuracy and reduce overfitting.', 'Evaluation Metrics: After training, the model\s performance is evaluated using metrics such as accuracy, precision, recall, and the F1 score. Since kidney disease diagnosis is a critical task, precision and recall are important, with a focus on minimizing false negatives to ensure no cases of kidney disease go undetected.', 'Deployment: Once the model is trained and validated, the next challenge is integrating the solution into a usable platform. This could be done by creating a web-based interface where healthcare practitioners can input patient data and instantly receive predictions regarding the likelihood of kidney disease. A user-friendly interface helps make the model accessible to non-technical users in the medical field.'],
      challenges: ['Data Imbalance: Medical datasets often suffer from imbalanced classes, with fewer positive cases (i.e., patients with kidney disease) compared to negative ones. Handling this imbalance requires techniques such as oversampling, undersampling, or applying algorithms like SMOTE (Synthetic Minority Over-sampling Technique) to ensure the model learns effectively from the minority class.', 'Model Interpretability: In healthcare applications, it is crucial that the model\'s predictions can be explained to medical professionals. Ensuring transparency and building trust in machine learning models is a challenge. Techniques like SHAP (SHapley Additive exPlanations) or LIME (Local Interpretable Model-Agnostic Explanations) can help explain how certain features affect the predictions.', 'Generalization: Ensuring the model generalizes well across different populations and does not overfit to the specific training data is essential. The model needs to be evaluated on a wide range of test cases to confirm its robustness in real-world scenarios.'],
      outcome: 'The Kidney-Wise project is a successful demonstration of applying machine learning in healthcare for predictive diagnostics. By providing clinicians with a decision support tool, this solution enables earlier detection of kidney disease, ultimately leading to better patient outcomes. The project exemplifies how machine learning can be leveraged to automate and improve diagnosis processes, with the potential for future expansion to other medical conditions.',
      description: 'The Kidney Disease Classifier algorithm is a machine learning solution designed to analyze patient data and detect the presence of kidney disease. This algorithm demonstrates machine learning techniques in healthcare for predictive diagnosis.',
      codeLink: 'https://github.com/PeterBarilo/Kidney-Wise',
      img: '/kidneywise.png',
      disabled: false
    },
    {
      name: 'ColorSplash',
      language: ['React', 'Node JS', 'MongoDB', 'Express'],
      skills: ['Web Development', 'UX Design', 'Database Management', 'CyberSecurity', 'AWS', 'Frontend Development', 'Backend Development'],
      introTitle: 'ColorSplash: A Full-Stack E-Commerce Platform for Custom Jewelry',
      intro: 'ColorSplash is a fully functional, full-stack e-commerce platform developed for selling custom earrings. The platform is designed to provide a seamless shopping experience for customers while offering comprehensive tools for administrators to manage products and orders efficiently. Built using the MERN stack (MongoDB, Express, React, Node.js) and integrated with Stripe for secure payment processing, ColorSplash showcases modern web development practices in both the frontend and backend.',
      approach:['Responsive and Intuitive User Interface: The frontend of ColorSplash is built using React, ensuring a dynamic and responsive user experience. The UI is designed to be visually appealing, with clean layouts, product categorization, and a smooth shopping flow. Customers can browse the catalog, add products to their cart, and securely checkout in just a few clicks.', 'Product Management for Admins: ColorSplash includes a dedicated admin panel for managing products, prices, and inventory. Administrators can add, edit, or remove products easily through a user-friendly interface. The admin panel is built to streamline the day-to-day management of the e-commerce store, ensuring that administrators can keep the product catalog updated without needing to interact with the database directly.', 'Backend Integration: The Node.js and Express backend serves as the core of the platform, handling all API requests, data management, and server-side logic. The MongoDB database is used to store information about products, orders, users, and inventory. The backend is designed with scalability in mind, making it capable of handling a growing user base and increased order volume as the business expands.', 'Secure Payment Processing: One of the standout features of ColorSplash is its integration with Stripe for secure payment processing. Stripe handles all payment transactions, ensuring that customer data is securely processed and stored according to industry standards. This seamless integration allows customers to make payments using credit/debit cards, with Stripe taking care of the complexities of security, encryption, and fraud prevention.'],
      challenges:['Ensuring Secure Payments: Integrating Stripe required careful attention to security, particularly with handling sensitive customer payment data. By utilizing Stripe\'s API, ColorSplash ensures that all payments are securely processed, adhering to industry standards for data protection.', 'Product and Inventory Management: Building the admin panel presented a challenge in terms of creating a simple yet powerful interface for administrators. The challenge was to ensure that admins could perform complex tasks like updating inventory and managing orders in an intuitive and non-technical way.', 'Optimizing Performance: Managing data between the backend and frontend required optimizing API calls and ensuring that the system could handle a growing number of users and transactions without performance degradation.'],
      outcome:'ColorSplash is a scalable, secure, and easy-to-use e-commerce platform designed for small businesses. It combines a sleek, user-friendly shopping experience with powerful administrative tools, making it ideal for both customers and business owners. The integration with Stripe provides a seamless and secure payment process, ensuring that customers can shop with confidence. As a full-stack project, ColorSplash demonstrates expertise in both frontend and backend development, as well as proficiency in working with third-party services like Stripe.',
      description: 'ColorSplash is a fully functional E-Commerce site. It utilizes Stripe for payment processing and features a dedicated admin panel for efficient product management.',
      codeLink: 'https://github.com/PeterBarilo/ecommerce_jewelry',
      img: '/colorsplsh.png',
      link: 'https://store.colorsplashearrings.com',
      disabled: false
    },  
    {
      name: 'UFC Predictor',
      language: ['Python', "React", "Tailwind", 'JavaScript'],
      skills: ['Machine Learning', 'Programming', 'Data Manipulation', 'Web Development', 'Frontend Development', 'Backend Development'],
      introTitle: 'UFC Predictor: A Machine Learning-Based Sports Prediction Tool',
      intro: 'UFC Predictor is a dynamic web application designed to predict the outcomes of UFC fights using machine learning algorithms. Developed with a React frontend and a Flask API for backend services, this project demonstrates the integration of predictive models into a modern web application, allowing users to input fighter matchups and receive probabilistic predictions for fight outcomes. By analyzing historical fight data and various statistical attributes of the fighters, the UFC Predictor app brings the power of machine learning to sports enthusiasts who are eager to see how fighters stack up.',
      approach: ['Predictive Model Using Machine Learning: At the core of the UFC Predictor app is a machine learning model based on a Random Forest Classifier. This model is trained on a dataset of historical UFC fight data, including features like fighter reach, height, age, strikes landed, takedowns, and more. By training the model to recognize patterns in these data points, it can make informed predictions about future fights. The model takes into account various fighter statistics, including win streaks, total fight experience, and days since the last competition, making the predictions more reliable and contextually aware.', 'Data Collection and Processing: The app leverages a dataset that contains detailed statistics of UFC fighters and fights from 2016 onwards. The data preprocessing includes handling missing values, feature selection, and creating ranked features specific to different fight divisions (e.g., lightweight, heavyweight). This ensures that the model is trained on the most relevant and clean data for predicting outcomes in the UFC landscape.', 'API-Based Architecture: The backend of the UFC Predictor app is built with Flask, which provides an API to handle requests from the frontend. Users input the names of two fighters they want to compare, and the backend processes this input, retrieves fighter data, and uses the trained model to predict the winner. The API returns the predicted winner, along with a probability percentage for each fighter\'s chance of winning.', 'Frontend Integration: The React frontend allows users to interact with the model in a clean and intuitive way. Users can input their fighter choices, view the predicted winner, and see each fighter\'s chances of winning as a percentage. The app also highlights how previous matchups between the fighters might influence the prediction, taking into account if they have fought each other before.', 'Custom Feature Ranking by Division: The app\'s model does not treat all UFC divisions equally. Different weight divisions have their own ranked features based on their unique data distributions. For example, heavyweights may rely more on knockout power, while lighter divisions may prioritize speed and technique. This division-specific ranking system helps improve the model\'s accuracy by tailoring predictions to the characteristics of each weight class.'],
      challenges: ['Handling Imbalanced Data: One of the challenges faced was dealing with imbalanced data between fighters. Certain fighters might have significantly more data due to longer careers, while others have fewer recorded fights. To ensure that the predictions are accurate, techniques such as resampling and careful feature selection were used to maintain data quality.', 'Division-Specific Rankings: Another challenge involved ranking features differently for each weight division. Some divisions favor specific statistics (e.g., knockout power in heavyweights vs. submission attempts in lighter divisions). Handling these variations required the creation of division-specific rankings to ensure that the model could account for the nuances of different divisions.', 'Predicting Catch Weight Fights: Predicting fights between fighters from different divisions was a challenge. In such cases, the app employs a "catch weight" ranking system to adjust for differences in fighter attributes that may come from competing in different divisions. This allows for more accurate cross-division predictions.'],
      outcome: 'The UFC Predictor app is a powerful tool for UFC fans and sports enthusiasts, providing them with data-driven insights into upcoming fights. By leveraging machine learning, it offers more than just subjective analysis—it provides a probabilistic model based on historical data and fighter attributes, making predictions more reliable and grounded in statistical evidence.The app demonstrates the integration of machine learning into a modern web application, combining a clean, interactive user interface with a robust backend powered by Flask and a machine learning pipeline. This project highlights key skills in both frontend and backend development, as well as expertise in data science and machine learning.',
      description: 'The UFC Predictor app is a React-based web application that leverages machine learning algorithms to predict the outcomes of UFC fights. As a coding project, this app demonstrates the integration of frontend development with machine learning techniques to create a predictive tool for sports enthusiasts.',
      img:'/ufcpred.png',
      codeLink: 'https://github.com/PeterBarilo/UFCPredictor',
      disabled: false
    },
    {
      name: 'AES Online Encrypt',
      language: ['Python', 'React', 'JavaScript'],
      skills:['Encryption', 'CyberSecurity', 'Web Development', 'Frontend Development', 'Backend Development'],
      introTitle: 'AES Online Encrypt: A Web Application for Secure Text Encryption',
      intro: 'AES Online Encrypt is a web application that allows users to securely encrypt and decrypt text using the Advanced Encryption Standard (AES) algorithm. Developed with a Python Flask backend and a React frontend, this project provides users with an easy-to-use interface for encrypting sensitive information and obtaining the encrypted output in a downloadable format. The AES encryption process ensures high levels of security by using modern cryptographic techniques, with the backend built on PyCryptodome, a popular Python library for cryptography.',
      approach: ['AES Encryption with PyCryptodome: At the core of the application is the AES encryption algorithm, implemented using the PyCryptodome library in Python. The encryption process utilizes AES.MODE_EAX, which provides both confidentiality and integrity to the encrypted data. When a user inputs text, the backend encrypts it using a 16-byte randomly generated secret key, producing a secure ciphertext, a nonce (used to ensure randomness), and an authentication tag. The user can then download the encrypted data (in hexadecimal format) for secure storage or sharing.', 'Decryption for Data Retrieval: In addition to encryption, the application also supports decryption. Users can input previously encrypted data (ciphertext, nonce, and tag) to recover the original plaintext. The backend verifies the authenticity of the message using the authentication tag, ensuring that any tampering or corruption during transmission is detected. If the integrity check fails, the app notifies the user that the message may have been compromised.', 'RESTful API for Encryption and Decryption: The backend, powered by Flask, exposes two RESTful API endpoints for encryption and decryption', 'Cross-Origin Resource Sharing (CORS): To facilitate seamless interaction between the React frontend and Flask backend, CORS (Cross-Origin Resource Sharing) is enabled. This ensures that the frontend, running on a different domain or port, can securely communicate with the backend without facing cross-origin restrictions.', 'User-Friendly Frontend: The React frontend offers a clean and intuitive interface where users can easily input text, trigger the encryption or decryption process, and view or download the results. The interface provides instant feedback, informing users of the encryption output and handling error states in the case of compromised or invalid messages.'],
      challenges: ['Security Implementation: One of the key challenges was implementing AES encryption and decryption while ensuring the integrity and confidentiality of the encrypted data. By using AES.MODE_EAX, the app addresses both issues by generating an authentication tag, which provides an additional layer of security.', 'Data Handling in Flask: Managing secure communication between the frontend and backend was a challenge, particularly in ensuring that sensitive data was not exposed or misused during API interactions. The app uses Flask\'s secure methods for handling incoming requests and responding with encrypted or decrypted data.', 'User Error Handling: When providing encryption services, it was essential to build in robust error-handling mechanisms. Ensuring that users are notified if the encrypted message has been compromised or altered was a critical aspect of the decryption process.'],
      outcome: 'AES Online Encrypt successfully demonstrates the implementation of modern cryptography in a user-friendly web application. By integrating Flask, PyCryptodome, and React, the project provides a secure and seamless way for users to encrypt sensitive information and later decrypt it with verification. The use of AES encryption ensures high levels of security, making this tool ideal for personal or professional use cases where data privacy is paramount. The project also highlights skills in full-stack web development, cryptography, and API integration.',
      img: '/aesonline.png',
      description: "A Web Application that allows users to input text and receive an AES encrypted output that can be downloaded or saved.",
      codeLink: 'https://github.com/PeterBarilo/AES_Encryption_App',
      disabled: false

    },  
    {
        name: 'Airline Price Prediction',
        language: ['Python', 'Machine Learning'],
        skills: ['Machine Learning', 'Data Manipulation', 'Jupyter Notebook'],
        introTitle: 'Airline Price Prediction: A Machine Learning Model for Forecasting Airfare',
        intro: 'The Airline Price Prediction project leverages machine learning techniques to forecast airline ticket prices, providing insights into airfare trends and helping users identify the best time to book flights. By analyzing historical airfare data and applying advanced predictive algorithms, this project demonstrates the integration of machine learning for price forecasting in the travel industry.',
        approach: ['Data Collection and Preprocessing: The project uses a dataset containing various features that influence airline prices, including factors like airline, flight route, departure and arrival times, duration, stops, and date of booking. Data preprocessing plays a key role in cleaning and transforming the raw data into a format suitable for machine learning. The preprocessing steps likely include handling missing data, normalizing features, and converting categorical data into numerical representations using techniques such as one-hot encoding.', 'Feature Engineering: To improve the accuracy of the predictions, additional features are engineered based on the existing data. For example, extracting information such as day of the week, time to departure, or seasonal factors can provide more granular insights into how these variables impact price fluctuations. This feature engineering helps the model capture hidden patterns in the data that are critical for predicting ticket prices.', 'Machine Learning Model: The core of the project is a regression model trained to predict future ticket prices. The model is likely built using popular machine learning algorithms such as Random Forest Regression, Gradient Boosting, or Linear Regression, which are well-suited for forecasting continuous values like prices. By training the model on historical price data, it learns to recognize the relationships between the input features (e.g., airline, route, booking time) and the target variable (ticket price).', 'Model Evaluation and Optimization: Once the model is trained, it is evaluated using metrics like Mean Squared Error (MSE), Root Mean Squared Error (RMSE), or R-squared to assess its performance in predicting airfare. The project likely involves optimizing hyperparameters to enhance the model\'s accuracy and generalization capabilities. Techniques like cross-validation and grid search are used to fine-tune the model and avoid overfitting.', 'Airfare Trend Analysis: In addition to making specific price predictions, the model can also provide insights into broader airfare trends. For example, it can highlight how ticket prices fluctuate based on booking windows, seasonal changes, or specific routes. This information can be valuable for consumers and businesses alike, helping them optimize travel plans or pricing strategies.'],
        challenges: ['Handling Missing Data: Airline pricing data often contains missing or incomplete values due to the variability in airline practices, flight schedules, and market factors. Handling this missing data, either through imputation techniques or careful removal of incomplete records, is crucial for maintaining the quality of the dataset.', 'Feature Selection: With many potential factors influencing ticket prices, selecting the most relevant features for the model is a challenge. Feature selection techniques, such as Mutual Information Regression (MIR) or feature importance rankings, help in identifying which variables have the most significant impact on price predictions.', 'Price Variability: Airline prices are known to fluctuate frequently based on factors like demand, time to departure, and external influences (e.g., holidays or events). Capturing these dynamic changes accurately in the model while ensuring it generalizes well across different routes and airlines requires careful model tuning.'],
        outcome: 'The Airline Price Prediction project successfully demonstrates how machine learning can be applied to predict and analyze airfare trends. By providing a model that forecasts ticket prices based on historical data, this project offers practical value for both travelers and businesses. The model enables users to make informed decisions about when to book flights to get the best deals, while travel agencies and airlines can use the insights to optimize their pricing strategies. The project highlights key skills in data science, machine learning, and feature engineering, making it an excellent example of how predictive modeling can be applied to real-world scenarios.',
        img: '',
        description: 'The Airline Price Prediction algorithm forecasts airline ticket prices using a regression model. This algorithm showcases the utilization of Mutual Information Regression (MIR) in predicting airfare trends.',
        codeLink: 'https://github.com/PeterBarilo/AirlinePriceModel',
        disabled: false
      },  
      {
        name: 'Developer Secure',
        language: ['React', 'JavaScript', 'SEO'],
        description: "Developer Secure is a dynamic and innovative software development company specializing in impoving client's web presence through sleek and modern web design as well as expert SEO services",
        codeLink: 'https://github.com/PeterBarilo/software-solutions-site',
        disabled: true

      },  
      {
        name: 'EZPC',
        language: ['React', 'JavaScript'],
        description: "Created a website using React and Python to sell custom-made computers. Developed a successful business plan and sold 7 computers for totaling 10k of revenue within 2 months of running the site.",
        disabled: true
      },  
      
      
  ];


  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`font-custom text-terminal`}>
      <div className='text-center mt-10 text-terminal rounded-lg  text-2xl'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pasteString("> ").typeString("My Projects").pauseFor(500).start().typeString(": ").pauseFor(600).typeString(" ")
          }}
        />
      </div>
      <div className={`flex flex-col mx-[20vw] mt-[3vw] mb-[-9vw] ${show ? 'opacity-100' : 'opacity-0'}`} style={{ transition: 'opacity 2s' }}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            language={project.language}
            description={project.description}
            codeLink={project.codeLink}
            introTitle  = {project.introTitle}
            intro = {project.intro}
            approach = {project.approach}
            challenges = {project.challenges}
            outcome = {project.outcome}
            skills = {project.skills}
            img = {project.img}
            link = {project.link}
            disabled = {project.disabled}
          />
        ))}
      </div>
      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
          .scroll-indicator {
            position: relative;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 20px;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)); 
          }
        `}
      </style>
    </div>
  );
};

export default Projects;
