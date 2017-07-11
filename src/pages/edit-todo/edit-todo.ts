import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-todo',
  templateUrl: 'edit-todo.html',
})
export class EditTodoPage {

  todo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.todo = {
      title: '',
      description: ''
    };

  }

  ionViewDidLoad() {

  }

  save(){
    console.log('TODO: finish save function');
  }

}
