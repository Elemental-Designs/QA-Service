# Question & Answers Service


## Tech Stack

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) 
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) 
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) 
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)

## Project Overview

> Service to store and retrieve Questions & Answers data

<!-- <img src="/repo/qaDiagram.png" alt="drawing" width="90%"/> -->

![Service Diagram](/repo/qaDiagram.png)

***

# Q&A Performance

## Questions Get Request Performance

  * Before - Utilizing 1 Server Instance & 1 DBMS Instance
  
    > Max RPS: 1600 clients/sec over 1 minute
    
    > Response Time: 1986ms 
    
    > Error Rate: 0%
  
  * After - Utilizing a Load Balancer Instance with 2 Server Instances & 1 DBMS Instance
  
    > RPS: 1600 clients/sec over 1 minute
    
    > Response Time: 79ms
    
    > Error Rate: 0%
    
  Before             |  After 
  :-------------------------:|:-------------------------:
  before  |  after
  
  * Max RPS - Utilizing a Load Balancer Instance with 2 Server Instances & 1 DBMS Instance
  
    > RPS:
    
    > Response Time:
    
    > Error Rate:

  |   Max   |
  |  :---:  |
  |  **Figure 1.**  |

## Answers Get Request Performance

  * Before - Utilizing 1 Server Instance & 1 DBMS Instance
  
    > Max RPS: 1500 clients/sec over 1 minute
    
    > Response Time: 1989ms 
    
    > Error Rate: 0%
  
  * After - Utilizing a Load Balancer Instance with 2 Server Instances & 1 DBMS Instance
  
 
    > RPS: 1500 clients/sec over 1 minute
    
    > Response Time: 82ms
    
    > Error Rate: 0.1%
    
  Before             |  After 
  :-------------------------:|:-------------------------:
  before  |  after
  
  * Max RPS - Utilizing a Load Balancer Instance with 2 Server Instances & 1 DBMS Instance
  
    > RPS:
    
    > Response Time:
    
    > Error Rate:

  |   Max   |
  |  :---:  |
  |  **Figure 1.**  |

***

# Contributors

### Jerome Rodriguez

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jeromemtrodriguez/)

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JeromeMTR)
