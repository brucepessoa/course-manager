import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Form',
                imageurl: '',
                price: 99.99,
                code: 'XPS_8796',
                duration: 120,
                rating: 5.4,
                releaseDate: 'November, 2, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageurl: '',
                price: 45.99,
                code: 'LKL_1064',
                duration: 80,
                rating: 4.2,
                releaseDate: 'December, 4, 2019'
            }
        ]
    }

}