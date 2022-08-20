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

## Table of Contents
- [Project Overview](#project-overview)
- [Performance & Optimizations](#performance--optimizations)

## Project Overview

> Initially implemented service to replace API and query from a Relational Database

> Handled & ETL 10 million rows of data into Postgres

> Service initially handled 100 Clients per second with a response time of 62ms 

> Optimized and horizontally scaled service to handle web scale traffic up to 2000 Clients per second with a response time of 98ms


### Initial Service Diagram 
<img src="/repo/qaDiagram.png" alt="drawing" width="70%"/>


### Integrating Load Balancer Diagram
<img src="/repo/LoadBalancerDiagram.png" alt="drawing" width="70%"/>

<!--- ![Service Diagram](/repo/qaDiagram.png)

![Load Balancer Diagram](/repo/LoadBalancerDiagram.png)

1 Server & 1 Database            |  Load Balancer w/ 2 Servers 
  :-------------------------:|:-------------------------:
  ![Service Diagram](/repo/qaDiagram.png)  |  ![Load Balancer Diagram](/repo/LoadBalancerDiagram.png)
  
 --->

***

# Performance & Optimizations

## Requesting to Retrieve Questions Performance

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
  ![Before Load Balancing](/repo/getQuestionMax.png)  |  ![afterLoadBalancing](/repo/getQLoadBalancer.png)
  
  * Max RPS - Utilizing a Load Balancer Instance with 2 Server Instances & 1 DBMS Instance
  
    > RPS: 2000 clients/sec over 1 minute
    
    > Response Time: 144ms
    
    > Error Rate: 0.1%

  |   Max   |
  |  :---:  |
  |  ![Service Diagram](/repo/maxQLoadBalancer.png)  |

## Requesting To Retrieve Answers Performance

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
  ![Before Load Balancing](/repo/getAnswersMax.png)  |  ![afterLoadBalancing](/repo/getALoadBalancers.png)
  
  * Max RPS - Utilizing a Load Balancer Instance with 2 Server Instances & 1 DBMS Instance
  
    > RPS: 2000 clients/sec over 1 minute
    
    > Response Time: 98ms
    
    > Error Rate: 0.1%

  |   Max   |
  |  :---:  |
  |  ![Service Diagram](/repo/maxALoadBalancer.png)  |

***

# Contributors

### Jerome Rodriguez

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jeromemtrodriguez/)

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JeromeMTR)
