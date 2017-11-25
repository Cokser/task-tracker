import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {Project} from "./Project";

@Injectable()
export class ProjectsService {

  projectsCollection: AngularFirestoreCollection<Project>;
  projects: Observable<any[]>;
  projectDoc: AngularFirestoreDocument<Project>;

  constructor(public afs: AngularFirestore) {
    this.projects = this.afs.collection('projects').valueChanges();
    this.projectsCollection = this.afs.collection('projects', ref => ref.orderBy('projectName', 'asc'));

    // this.projects = this.projectsCollection.snapshotChanges().map(changes => {
    //   return changes.map(a => {
    //     const data = a.payload.doc.data() as Project;
    //     data.id = a.payload.doc.id;
    //     return data;
    //   });
    // });
  }

  getProjects() {
    return this.projects;
  }

  addProject(project: Project) {
    this.projectsCollection.add(project);
  }

  // deleteProject(project: Project) {
  //   this.projectDoc = this.afs.doc(`projects/${project.id}`);
  //   this.projectDoc.delete();
  // }
  //
  // updateProject(project: Project) {
  //   this.projectDoc = this.afs.doc(`projects/${project.id}`);
  //   this.projectDoc.update(project);
  // }
}
