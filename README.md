# Voicebot for Accounting Software

<strong>Natural Language Processing Project Details </strong> <br><br>
<strong>Collaborators are - <strong><br>
1. Maniar Kunj Jignesh <br>
2. Bhuvnesh Pratap Singh <br>

Project details: <br>
  Software Architecture -------- MVC <br>
  Application method ---------- CRUD <br>
  Templating engine ----------- jinja2<br>
  Backend Web Framework ---- Flask<br>
  Database --------------------- MongoDB <br>

<strong>List of modules:</strong>
#1. Automatic Speech Recognizer
#2. Text to MongoDB
#3. Database Output Processing
#4. Collective changes in User Interface


<hr>
<h2><strong> Abstract </strong></h2><br>
In today's business-oriented world, time is of the essence to everyone. There is no more place 
for manual transactions in the industry.Even businesses are taken with the flow and become 
digitized fairly quickly. However, to operate digital transactions and records, a fairly 
tech-savvy person is constantly needed. To combat this issue, we propose an interactive bot
which will take in commands as voice and will execute the necessary changes in the accounting 
application used by the business. This software is, in essence, a business intelligent accounting
software which interacts and functions on voice commands. <br>
The main business accounting website will be built with small and medium scale businesses in mind
with unique features to aid in their digitized record keeping. Adding to this, we will add an
intelligent voice-bot which makes the changes in the database. The user’s voice is transcoded to
natural language which is stemmed and converted to appropriate MongoDB queries with the help of a
translation algorithm. This translation algorithm will use the concept of the complete backend of
the project is built on python using multiple frameworks and tools. <br>

<strong>Keywords</strong> – Voice-bot, Database, Query, Natural Language, Transactions, Accounting, 
Google Cloud Speech to Text API<br>

<hr>
<h2><strong> Conclusion </strong></h2><br>
In this project we proposed the user interface that will be applicable for the accounting applications,
provides easy to the user by reducing their part of recalling complex database language syntax. Natural
Language Processing can bring powerful enhancements to virtually any computer program interface, because
language is so natural and ease to use for humans. The Intelligent Accounting System, is no exception. 
Alternatives for integrating a database NLP component into queries were considered and assessed.<br><br>

Graphical user interface to database queries is presented in this project. The system will accept English
sentence as a query and gives output in English itself. It is very much useful for the people who do not
have any prior knowledge of database and its queries languages. We are using different rule along with the
NLP to perform operation such as insert, update, delete, select. This system can be enhanced by making it 
more generic by adding the aggregate functions such as min, max, sum, avg etc. We can also implement it for
very complex queries like join operations & order by operations. To make the system more friendly the 
dialogue-based system has been used in which user will provide the input (English) through speech interface.<br><br>

Natural Language Processing can bring powerful enhancements to virtually any computer program, because human language
is so natural and easy to use for humans. We provide a system which is capable of handling English query to access 
database instead of structured query language. The proposed application provides a convenient as well as reliable means
of querying access, hence, a realistic potential for bridging the gap between computer and the casual end users. To get
the maximum performance, the data dictionary of the system will have to be regularly updated with words that are specific 
to the particular system. The application is relatively recent area of research as compared to other fields of information 
technology, there have been sufficient successes to date that suggest that NLP-based information access technologies will 
continue to be a major area of research and development in information systems now and far into the future. The system we 
developed is a specific problem-based system and currently can handle standard join conditions.<br><br>

<hr>
<h2><strong>To Run the Project</strong></h2><br>
<h4>1. Using Command Prompt </h4>

CREATE VIRTUAL ENVIRIONMENT

For flask to run from cmd we need to follow some steps 

1.   ------------To set Virtual Environement ------------------
 <Path_to_your_venv>\<name_of_venv>\Scripts\activate.bat

2.  ------------------To run the main file -------------------
cd<to project path>
SET FLASK_APP=<Project_Folder>/src.run

3. -----------------To set environment type-------------
set FLASK_ENV=development

4. flask run

<h4>2. Using Netbeans Pycharm IDE </h4>
1. Create virtual environment
2. Just run the run.py file it handles the above process in background for you.

