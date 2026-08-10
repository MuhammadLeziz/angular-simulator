import { Injectable } from '@angular/core';
import { IMessages } from '../models/interfaces/IMessages';
import { Messages } from '../enums/Messages';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageServiceService {
  private messageSubject = new BehaviorSubject<IMessages[]>([]);
  messages$: Observable<IMessages[]> = this.messageSubject.asObservable();
  private id = 1;

  private addMessage(type: Messages, text: string) {
    const id = this.id++;
    const newMessage: IMessages = {
      id,
      text,
      type,
    };
    const currentMessages = this.messageSubject.getValue();
    this.messageSubject.next([newMessage, ...currentMessages]);
    setTimeout(() => {
      this.closeMessage(id);
    }, 5000);
  }

  showWarn(text: string) {
    this.addMessage(Messages.WARN, text);
  }

  showError(text: string) {
    this.addMessage(Messages.ERROR, text);
  }

  showSuccess(text: string) {
    this.addMessage(Messages.SUCCESS, text);
  }

  showInfo(text: string) {
    this.addMessage(Messages.INFO, text);
  }

  closeMessage(id: number) {
    const currentMessages = this.messageSubject.getValue();
    const filteredMessages = currentMessages.filter((el) => el.id !== id);
    this.messageSubject.next(filteredMessages);
  }
}
