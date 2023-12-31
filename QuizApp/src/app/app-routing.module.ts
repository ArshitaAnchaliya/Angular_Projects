import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path:'',redirectTo:'welcomepage',pathMatch:"full"},
  {path:"welcomepage", component:WelcomepageComponent},
  {path:"question", component:QuestionComponent},
  {path:"result",component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
