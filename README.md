# jarurat_care_assignment
1. Prerequisites
Ensure the following are installed on your system:

Node.js (v14 or higher recommended)
npm (comes with Node.js)
MongoDB (local installation or access to a MongoDB cloud instance)

2. Clone the Project
Clone the repository to your local system:
bash
Copy code
git clone <repository-url>
Navigate to the project directory:
bash
Copy code
cd <project-folder>


3. Install Dependencies
Install the required Node.js packages listed in package.json:

bash
Copy code
npm install


4. Set Up the Environment
Create a .env file in the root directory:

bash
Copy code
touch .env
Add the following configuration values (modify as needed):

env
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/<your-database-name>
Replace <your-database-name> with your desired MongoDB database name.
If using MongoDB Atlas (cloud), replace MONGO_URI with the connection string from your MongoDB dashboard.
5. Start MongoDB
If you're using a local MongoDB instance, ensure the database is running:

bash
Copy code
mongod
6. Run the Project
Start the Node.js server:

bash
Copy code
npm start
By default, the server will run on the port defined in the .env file (e.g., http://localhost:5000).
