import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

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

  await prisma.user.createMany(
   {
    data :  [
      {
  
        "email": "malika@alimny.tn",
        "password": `${bcrypt.hashSync('admin', 10)}`,
        "fullName": "malika",
        "phone": "string",
        "address": "string",
        "isStudent": false,
        "role": "admin",
        "imageUrl" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrStCiO2IfbiUQlP_BHs7vt7rnZirDbzOPw255QdplCw&s",
        "aboutMe" : "my name is malika i love coding and i am a student"
      },
      {
  
        "email": "malika2@alimny.tn",
        "password": `${bcrypt.hashSync('teacher', 10)}`,
        "fullName": "teacher",
        "phone": "string",
        "address": "string",
        "isStudent": false,
        "role": "teacher"
      },
      {
  
        "email": "malika22@alimny.tn",
        "password": `${bcrypt.hashSync('teacher', 10)}`,
        "fullName": "teacher",
        "phone": "string",
        "address": "string",
        "isStudent": false,
        "role": "teacher"
      },
      {
  
        "email": "malek@alimmny.tn",
        "password": `${bcrypt.hashSync('student', 10)}`,
        "fullName": "malek-fridhi",
        "phone": "string",
        "address": "string",
        "isStudent": true,
        "role": "student"
      },
      {
  
        "email": "mraya9@alimmny.tn",
        "password": `${bcrypt.hashSync('student', 10)}`,
        "fullName": "mraya9",
        "phone": "string",
        "address": "string",
        "isStudent": true,
        "role": "student"
      }
    ]
   }
  )
  await prisma.course .createMany({
    data :  [
      {
        name: 'Introduction to Programming',
        description: 'This course covers the basics of programming, including data types, variables, and control flow.'
      },
      {
        name: 'Data Structures and Algorithms',
        description: 'This course explores the use of data structures and algorithms to solve problems efficiently.'
      },
      {
        name: 'Web Development',
        description: 'This course covers the fundamentals of web development, including HTML, CSS, and JavaScript.'
      },
      {
        name: 'Database Systems',
        description: 'This course introduces students to the design and implementation of database systems.'
      },
      {
        name: 'Artificial Intelligence',
        description: 'This course explores the field of artificial intelligence, including machine learning and natural language processing.'
      }
    ]
    
    
  })

  await prisma.module.createMany({
    data : [
      {
        name:"module1",
        description:"module 1 description",
        courseId : 1},
    
        {name:"module2",
        description:"module 2 description",
        courseId : 2},
      
        {name:"module3",
        description:"module 3 description",
        courseId : 3},
      
        {name:"module4",
        description:"module 4 description",
        courseId : 4},
      
        {name:"module5",
        description:"module 5 description",
        courseId : 5},
      
    ]
  })

  await prisma.courseContent.createMany({
    data : [
      {
        name:"Pdf",
        type:"pdf",
        courseId : 1},
    
        {name:"Video",
        type:"video",
        courseId : 2},
      
        {name:"Quiz",
        type:"quiz",
        courseId : 3},
      
        {name:"Exercice",
        type:"exercice",
        courseId : 4},
    ]
  })
  await prisma.programmeModule.createMany({
    data : [
      {
        programmeId:1,
        moduleId:1},
      {
        programmeId:2,
        moduleId:2},
      {
        programmeId:3,
        moduleId:3},
      {
        programmeId:4,
        moduleId:4}]})

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
