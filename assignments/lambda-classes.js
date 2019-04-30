// CODE here for your Lambda Classes
class Person {
    constructor(baseclass) {
        this.name = baseclass.name;
        this.age = baseclass.age;
        this.location = baseclass.location;
        this.gender = baseclass.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(info) {
        super(info);
        this.specialty = info.specialty;
        this.favLanguage = info.favLanguage;
        this.catchphrase = info.catchphrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, className) {
        return `${student} receives a perfect score on ${className}`;
    }
}

class Student extends Person {
    constructor(sinfo) {
        super(sinfo);
        this.previousBackground = sinfo.previousBackground;
        this.className = sinfo.className;
        this.favSubjects = sinfo.favSubjects;
    }
    listsSubjects(){
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor(pminfo) {
        super(pminfo);
        this.gradClassName = pminfo.gradClassName;
        this.favInstructor = pminfo.favInstructor;
    }
    standUp(channelname) {
        return `${this.name} announces to ${channelname}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}.​​​​​`;
    }
}


const kevin = new Student({
    name: 'Kevin',
    location: 'Indianapolis',
    age: 32,
    gender: 'male',
    favSubjects:[
        'science',
        'math',
        'english',
    ],
    className: 'FSWEB',
    previousBackground: `Army`
});

const keiran = new Instructor({
    name: 'Keiran',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const brandon = new ProjectManager({
    name: 'Brandon',
    location: 'everywhere',
    age: 25,
    gender: 'male',
    favLanguage: 'html',
    specialty: 'back-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'WEBPT6',
    favInstructor: 'Keiran'
  });

  console.log(kevin.PRAssignment('Javascript 4'));
  console.log(kevin.sprintChallenge('Javascript 4'));
  kevin.listsSubjects();
  console.log(kevin.speak());
  console.log(keiran.demo('React'));
  console.log(keiran.grade(kevin.name, 'React'));
  console.log(brandon.standUp('SPRINT 3'));
  console.log(brandon.debugsCode(kevin.name, 'LESS'))