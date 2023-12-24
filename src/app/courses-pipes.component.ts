import { Component } from "@angular/core";

@Component({
  selector:'app-course-pipe',
  template:`
  {{course.title | uppercase}} <br/>
  {{course.rating | number}} <br/>
  {{course.students | number}} <br/>
  {{course.price | currency:'INR':true}} <br/>
  {{course.releaseDate | date}}
  {{course.customPipeText | StringLimit :200}}
  `
})
export class CoursesPipesComponent{
  course={
    title:"The Complete Angular Course",
    rating:4.9745,
    students:30123,
    price:190.15,
    releaseDate:new Date(2016,3,1),
    customPipeText:"With Angular, you're taking advantage of a platform that can scale from single-developer projects to enterprise-level applications."
  }
}
