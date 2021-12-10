
# SNA Final project report
**Using Docker-Compose to deploy your application with frontend and backend.**

## Team: 
Daniil Gubaidullin, Amir Khuzin, Truong Nguyen, Kseniya Kudasheva

## Github repo:
>https://github.com/k05m0navt/sna_final_project

## Goal: 
Sometimes we are bored and feel like productive. However no ideas came to our mind. Our web-application is born to solve this problem. Randomly generate fun/useful/practical daily goals for users by just one click, we hope to fulfill your day with excitement and productivity.

## Technology stack:
Node js, Docker, Docker-compose, HTML, CSS

## Architecture
![sequence diagram](https://lh3.googleusercontent.com/pw/AM-JKLUqzs80uPNj9-t2_ZsEYi7dSP_jgRuoTdfP2BeeCDSKRI727mLR26cY5rUnatVMGdJyZLDc8UiOXCMMbmGDPg-2kOps_R6QjP6_NXllUEJLhA4W49boRG7iyhgJk74zaqCzJLyj7lzcAhJHrH5i5ICB=w522-h383-no?authuser=0)
Back-end: Generate activity to suggest user 
> http://localhost:3001/api/find_new_activity

Front-end: Interact with users, display generated activity
> http://localhost:3000/

## Deployment

1. Clone github:
> git clone https://github.com/k05m0navt/sna_final_project
2. Locate to "sna_final_project" folder:
> cd sna_final_project
3. Fetch docker image and run project:
> docker-compose up

The docker-compose file will locate Dockerfile's in each folder "client" and "server" and build and run the corresponding images and container.

Here the default port for:
| service      | port |
| ----------- | ----------- |
| client      | 3000       |
| server   | 3001        |

## Difficulty faced:
There's not so much difficulty during the development and deployment. However to further extend the project, a more efficient way of generating activity should be chosen.

## Conclusion:
A simple web-application using technologies learnt from SNA course has solved a fairly simple problem.
We sincerely express our gratefulness to Prof. Sillitti as well as all the TAs for guiding us through the course.
