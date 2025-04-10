import { FastifyReply, FastifyRequest } from 'fastify';
import { getAllUsersFromDb } from '../models/userModel';

export async function getAllUsers(request: FastifyRequest, reply: FastifyReply) {
  try {
    const users = await getAllUsersFromDb(); 
    if (!users) {
      return reply.status(404).send({ message: 'No users found' });
    }
    return reply.send(users); 
  } catch (err) {
    return reply.status(500).send({ message: 'Internal Server Error' });
  }
}
