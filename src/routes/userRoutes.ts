import { FastifyInstance } from 'fastify';
import { getAllUsers } from '../controllers/userController';

export async function userRoutes(fastify: FastifyInstance) {
  fastify.get('/users', async (request, reply) => {
    return getAllUsers(request, reply); 
  });
}
