# UserTraffic

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Installation of project
    Go to github
        - https://github.com/satishsookun/user-traffic/tree/alpha
    Clone project
        - git clone https://github.com/satishsookun/user-traffic.git
    After cloning the project
        - cd user-traffic
        - npm i
        - ng serve -o
        
## Project

> Single page application

  This project is a single page web app. There will be no browser refresh on navigation as the lazy loading will only load the module.

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
    
> Color Theming

    - There are to main color code were used, Green come from the theme color of shopimind and the dark gray was selected as it gives a good contrast where we can outstand important section on the page.
    
> SASS Pre-processing

    - SASS was used to style the project with the advance feature provided such as variable, nesting, mixing and so on ...
    - With the help of `SCSS Variables` we can easily change the `Theme color` of the page to adapt to client Corporate
    
> JSON API 
  
    - For steps provided by user, I was not able to get the complete idea of step 3, 4, 5 as no user reached these steps in the Json provided, but still I tried to do something out of it. 
