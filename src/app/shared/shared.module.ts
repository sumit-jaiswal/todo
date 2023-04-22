import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './services/todo.service';
import { LoadingComponent } from './components/loading/loading.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [LoadingComponent],
  providers: [TodoService],
})
export class SharedModule {}
