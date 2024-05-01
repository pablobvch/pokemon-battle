# Pokemons battle

## Introduction

This README provides instructions for setting up and running the backend and fronted of the Pokemon Battle project. It includes details on system requirements, installation, execution, and the solution process.

## System Requirements

- Node.js
- npm

## Challenge Overview

The Pokemon Battle application simulates battles between Pokemons. Each Pokemon has different stats such as attack and defense, and they must be made to battle each other.

### Backend Objectives

- Implement database migrations to populate a table with Pokemon data.
- Implement an endpoint to list all Pokemon.
- Implement an endpoint to battle Pokemon.
- Save battle results in a table.

### Frontend Objectives

- Implement UI/UX to list and select Pokemon.
- Implement the Pokemon card to display stats.
- Automatically and randomly select a different opponent when initiating a battle, then display the result.
- Implement basic responsiveness.

### Battle Algorithm

For battle calculation, consider the following:

- The Pokemon with the highest speed attacks first; if equal, the one with the highest attack goes first.
- To calculate damage, subtract the defender's defense from the attacker's attack (attack - defense). If the attack is equal to or less than the defense, the damage is 1.
- Subtract the damage from the defender's HP.
- Pokemon battle in turns. All turns are calculated in the same request, so the endpoint should return the winner's data in the same call.
- The winner is the one whose opponent's HP is reduced to zero.

### Backend Technology Stack

- NestJS
- TypeORM
- SQLite

### Frontend Technology Stack

- React
- MaterialUI

## Installation and Execution - Backend

1. Clone this repository:

```bash
git clone https://github.com/pablobvch/pokemon-battle.git
```

2. Within the backend folder, install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run start:dev
```

4. Access the API at `http://localhost:3000`

## Solution Process and Rationale

- **Database Setup:** SQLite is used as the database system for simplicity and ease of setup. TypeORM is used as the ORM to interact with the database.
- **API Endpoints:** The backend provides 2 endpoints for getting Pokemon data, and conducting battles saving their results afterwards.
- **Error Handling:** The backend has some basic validations before running the battles. ???????? pasar a middleware