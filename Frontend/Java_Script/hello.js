
//creating object

 const student={
    name:"John",
    age:23,
    marks:80
 };

//  console.log(student);

 // adding new property
 student.city="delhi";

 // console.log(student);

 // deleting existing property

 delete student.age;

 // console.log(student);

 // modifying existing property

 student.age=25;

 // console.log(student.age);

 // using emty object

  let student1={};

  student1.name="Harsh";
  student1.age=17;
  student1.city="delhi";

 // console.log(student1);

 // nested object

 const student2={
    name:"Ravi",
    age:22, 
    marks:75,
    studentAddress:{
        city:"Mumbai",
        pincode:400001,
        state:"Maharashtra"
    }
 };

    // console.log(student2);

    // console.log(student2.studentAddress.city);
                           
    // new object creation using object constructor function
      
    
//     function  persons (myname, myage, mycity){
//         this.name=myname;
//         this.age=myage;
//         this.city=mycity;
//     }
//     student4= new persons ("Ajay",21,"Bangalore");



//   student4.name="harsh"

//     console.log(student4);

      function form (yourname, yourage, yourcity){
        this.name=yourname;
        this.age=yourage;
        this.city=yourcity;
      }

      harsh= new form ("Harsh",18,"Delhi");
      ravi= new form ("Ravi",22,"Mumbai");   

      // console.log(harsh);
      // console.log(ravi);



      // creating array using literal

      //   let arr= [12,23,34,56,78 ];
         // console.log(arr);


   // creating empty array and adding elements later


   //  const arr=[];
   //  arr[1]= 24;
   //  arr[0]=12;
   //  arr[2]=36;
   //    arr[3]=48;
   //     console.log(arr);


   // creating array using multiple data types
   // const arr=[12,"Hello", true, {name:"Harsh", age:18} ,45.67, [1,2,3]];
   // console.log(arr);

   //accessing array elements using index

     let arr = [12,34,566,7,7,88,65]

   //   arr[0]=100;

      // console.log(arr.__proto__);


      // looping on array

   //  for (i=4; i< arr.length; i++) {
   //      console.log(arr[i]);
   //  }

   
=======
//creating object

 const student={
    name:"John",
    age:23,
    marks:80
 };

//  console.log(student);

 // adding new property
 student.city="delhi";

 // console.log(student);

 // deleting existing property

 delete student.age;

 // console.log(student);

 // modifying existing property

 student.age=25;

 // console.log(student.age);

 // using emty object

  let student1={};

  student1.name="Harsh";
  student1.age=17;
  student1.city="delhi";

 // console.log(student1);

 // nested object

 const student2={
    name:"Ravi",
    age:22, 
    marks:75,
    studentAddress:{
        city:"Mumbai",
        pincode:400001,
        state:"Maharashtra"
    }
 };

    // console.log(student2);

    // console.log(student2.studentAddress.city);
                           
    // new object creation using object constructor function
      
    
//     function  persons (myname, myage, mycity){
//         this.name=myname;
//         this.age=myage;
//         this.city=mycity;
//     }
//     student4= new persons ("Ajay",21,"Bangalore");



//   student4.name="harsh"

//     console.log(student4);

      function form (yourname, yourage, yourcity){
        this.name=yourname;
        this.age=yourage;
        this.city=yourcity;
      }

      harsh= new form ("Harsh",18,"Delhi");
      ravi= new form ("Ravi",22,"Mumbai");   

      // console.log(harsh);
      // console.log(ravi);



      // creating array using literal

      //   let arr= [12,23,34,56,78 ];
         // console.log(arr);


   // creating empty array and adding elements later


   //  const arr=[];
   //  arr[1]= 24;
   //  arr[0]=12;
   //  arr[2]=36;
   //    arr[3]=48;
   //     console.log(arr);


   // creating array using multiple data types
   // const arr=[12,"Hello", true, {name:"Harsh", age:18} ,45.67, [1,2,3]];
   // console.log(arr);

   //accessing array elements using index

     let arr = [12,34,566,7,7,88,65]

   //   arr[0]=100;

      // console.log(arr.__proto__);


      // looping on array

   //  for (i=4; i< arr.length; i++) {
   //      console.log(arr[i]);
   //  }



