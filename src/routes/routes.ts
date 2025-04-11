import { FastifyInstance } from 'fastify';
import { getAllEvents, getAllUsers } from '../controllers/controllers';

export async function routes(fastify: FastifyInstance) {
  fastify.get('/api/users', async (request, reply) => {
    return getAllUsers(request, reply); 
  });

  fastify.get('/api/events', async (request, reply) => {
    return getAllEvents(request, reply); 
  });
}
