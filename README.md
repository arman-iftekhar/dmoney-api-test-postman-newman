# Dmoney API Automation
## Project Summary : 
Performed Integration and API testing on dmoney API. Here I have automated the CRUD functionalities for a user.

## Technologies I have used :
- Postman
- Newman
- nodeJs

## How to run :
**1. Clone the repository**  
`git clone https://github.com/arman-iftekhar/dmoney-api-test-postman-newman.git`

**2. Navigate into the cloned folder**  
`cd dmoney-api-test-postman-newman`

**3. Initialize npm (if not already initialized)**  
`npm init -y`  
This generates a package.json file (used by Node/npm).

**4. Install Newman locally**  
`npm i newman`  
This installs Newman (Postman’s CLI runner) into the project.

**5. Run the Postman collection with Newman**  
`npx newman run .\collection\dmoney-test.postman_collection.json`  
This executes all API tests defined in the collection JSON.

**6. Install Newman Reporter**
`npm i newman-reporter-htmlextra`  
This is needed to generate a readable HTML report from Postman/Newman run.

**7. Generate/print the test report**  
`node .\report.js`  
This runs a custom report script included in the repo.

## Documentation fo the API :
https://documenter.getpostman.com/view/19433483/2sBXVmdo2Z

## Output :
<img width="556" height="561" alt="Screenshot_2284" src="https://github.com/user-attachments/assets/fd59e53d-71b4-4393-8ac3-2d33e4336657" />
