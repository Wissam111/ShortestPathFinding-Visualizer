# Shortest Path - Visualizer

![Builds](https://github.com/project-chip/connectedhomeip/workflows/Builds/badge.svg)





## The Project In Action

-Dijkstra

https://user-images.githubusercontent.com/70629274/189345348-db722912-f457-49f0-a9f5-e8e592e2bc2f.mp4

-A*pathFinding


https://user-images.githubusercontent.com/70629274/189345444-2d63d420-38d1-43cd-be51-012b270dbf37.mp4




</br>

## Project Overview

 Shortest Path-Visualizer, The objective is to find the shortest path from src Node
 to dest Node with obstacles and rewards along the way.

</br>

## How To Run
 

From the terminal run the server:  

- npm install npm 
- npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

</br>



## What has been done ?
- ### Visulaizer
    
    - Mines: increase the weight of an Edge by 10
    - Healing Salve: decrease the weight of current node by 3
    - Toss Coin: Choose randomly a number between [50,80] for how many Healing Salves
                 to place randomly on the grid(at can be only done once)
    - Shortest Path: at the end showes the shortest path colored by green.
    - Wall: add Node wall that cant be visited 


- ### Data Structures

    - Min Heap
    - List
    
- ### Graph Algorithms

    - Dijkstra
    - A*PathFinding
    - BFS

</br>


## Authors

* **Wissam Kabha**  - Linkdin -> https://www.linkedin.com/in/wissam-kabha-7a20b1226/

</br>

## References

https://en.wikipedia.org/wiki/A*_search_algorithm#:~:text=A*%20is%20an%20informed%20search,shortest%20time%2C%20etc.).

https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm

https://en.wikipedia.org/wiki/Min-max_heap
