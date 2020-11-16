# UserTraffic

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Installation of project
    Go to github
        - https://github.com/satishsookun/user-traffic/tree/alpha
    Clone project
        - git clone https://github.com/satishsookun/user-traffic.git
    After cloning the project
        - npm i
        - ng serve -o
        
## Project

> Web app component
    
    - Header
    
        - Animation was done using simple css transition, a more fluid animation can be done using angular animations. (Time constraint)
        
        - Idea behing calendar
            > Two calendar was implemented to be able to filter by dates range and the users need to be filtered by this dates range
                info: Filter by date not completed
            > Search was implemented but not completed, i.e you can't do search right now.
    
    - Sidebar(Nav)
        - sidebar is functional and load views on lazy loading, that is the interface is loaded in DOM only when it is called via route
        
    Content
        - Top Content: Behave like a breadcrumb, where the steps info are provided
        
        - A graph chart was implemented with static value (time constraint). This graph will give global info about total users and the steps they reached.
        
        - Left content, is where the lazy loading of module is being done, where the content are loading according the active step.
            - You will be allow to sort the users by `Newest` or `Oldest`
            - A next and previous button is also provided to help user to navigate.
            
> Responsiveness
    
    - The web app is only responsive on Desktop (>= 1024px)