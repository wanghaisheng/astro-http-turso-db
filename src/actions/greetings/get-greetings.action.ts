import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const getGreeting = defineAction({
        input: z.object({
          name: z.string(),
          age: z.number(),
          isActive: z.boolean(),
        }),
        handler: async ({name,age, isActive}) => {
          return console.log({name,age,isActive});
          
        }
      });

      