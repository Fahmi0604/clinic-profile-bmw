// src/lib/models/user.model.ts
import { prisma } from "@/lib/prisma";

/**
 * Find all users
 * @returns Array of all users
 */
export async function findAllUsers() {
  return prisma.user.findMany();
}

/**
 * Find a user by ID
 * @param id - The user ID
 * @returns The user or null if not found
 */
export async function findUserById(id: number) {
  return prisma.user.findUnique({
    where: { id },
  });
}

/**
 * Create a new user
 * @param data - User data (name and email)
 * @returns The created user
 */
export async function createUser(data: { name: string; email: string }) {
  return prisma.user.create({
    data,
  });
}
