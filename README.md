# Deliver Jokes Microservice

This microservice provides random jokes to users. Users can select from various joke types and receive a random joke on demand.

## Features

- Retrieve a random joke.
- Filter jokes by type.
- View available joke types.

## Technologies

- **Nest.js**: Framework for creating efficient, scalable Node.js applications.
- **MongoDB Atlas**: Cloud-hosted NoSQL database for storing jokes.

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Laughfy/deliver-jokes-microservice.git
   cd deliver-jokes-microservice
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   - Create a `.env` file with the following:
     ```plaintext
     MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/laughfy
     ```

4. **Start the service**:
   ```bash
   npm run start:dev
   ```

## Endpoints

- **GET /jokes/random**: Retrieve a random joke.

  - Optional query parameter: `type`
  - Example: `/jokes/random?type=dad`

- **GET /jokes/types**: Get a list of all available joke types.

## Docker Instructions

1. **Build Docker image**:

   ```bash
   docker build -t deliver-jokes-service .
   ```

2. **Run Docker container**:
   ```bash
   docker run -p 3000:3000 --env-file .env deliver-jokes-service
   ```

## License

Licensed under the MIT License.
