@startuml
frontend -> backendserver: /GET pizza_menu
backendserver -> datastore: select * from pizza
datastore <- backendserver: resultset of pizzas
frontend <- backendserver: [...pizzas]

@startuml

route -> service
service -> model
model -> orm
orm -> database

@startuml