import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const programmes = [
    { categoryId :1,
            name: 'Formation complète en développement web',
      description:
        'Cette formation couvre les fondamentaux ',
    },

    { categoryId :1,
      name: 'Certification en cybersécurité avancée',
      description:
        'Ce programme de certification approfondi explore les techniques avancées' 
    },

    { categoryId :1,
      name: 'Formation en intelligence artificielle et apprentissage automatique',
      description:
        "Cette formation pratique vous apprendra les bases de l'intelligence artificielle"
    },

    { categoryId :1,
      name: "Cours avancé de développement d'applications mobiles",
      description:
        "Ce cours avancé se concentre sur le développement d'applications mobiles natives pour iOS et Android",
    },
  ];

  await prisma.category.create({
    data : {
      id: 1 , 
      name : "web dev"
    }
  })
  for (let programme of programmes) {
    await prisma.programme.create({
      data:programme
    });
  }

  // const post2 = await prisma.student.upsert({
  //   where: { firstname : "What's new in Prisma? (Q1/22)" },
  //   update: {},
  //   create: {
  //     firstname : "What's new in Prisma? (Q1/22)",
  //     body: 'Our engineers have been working hard, issuing new releases with many improvements...',
  //     description:
  //       'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
  //     published: true,
  //   },
  // });

  // console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
