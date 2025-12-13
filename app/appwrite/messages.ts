// ~/appwrite/messages.ts
import { Query } from "appwrite";
import { tablesDB, appwriteConfig } from "./client";

// Define the Message type here
export interface Message {
  $id: string;
  name: string;
  email: string;
  message: string;
  $createdAt: string;
  createdAt?: string;
}

export interface MessageData {
  name: string;
  email: string;
  message: string;
}

export async function createMessage(messageData: MessageData) {
  try {
    const message = await tablesDB.createRow({
      databaseId: appwriteConfig.databaseId,
      tableId: appwriteConfig.messageid,
      rowId: 'unique()',
      data: {
        name: messageData.name,
        email: messageData.email,
        message: messageData.message,
      },
    });
    return message;
  } catch (error) {
    console.error("Error creating message:", error);
    throw error;
  }
}
// ~/appwrite/messages.ts - Add this function
export async function getMessageCount(): Promise<number> {
  try {
    const messages = await tablesDB.listRows({
      databaseId: appwriteConfig.databaseId,
      tableId: appwriteConfig.messageid,
      queries: [Query.limit(1)], // Just to get total
    });
    return messages.total;
  } catch (error) {
    console.error("Error counting messages:", error);
    return 0;
  }
}
export async function getMessages(limit: number = 5, offset: number = 0): Promise<Message[]> {
  try {
    const messages = await tablesDB.listRows({
      databaseId: appwriteConfig.databaseId,
      tableId: appwriteConfig.messageid,
      queries: [
        Query.limit(limit),
        Query.offset(offset),
        Query.orderDesc("$createdAt"),
      ],
    });

    if (messages.total === 0) {
      return [];
    }

    // Cast to Message[] and ensure all fields exist
    return messages.rows.map((row: any) => ({
      $id: row.$id || '',
      name: row.name || '',
      email: row.email || '',
      message: row.message || '',
      $createdAt: row.$createdAt || '',
      createdAt: row.createdAt || '',
    }));
  } catch (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
}