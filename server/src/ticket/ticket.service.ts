import { Injectable } from '@nestjs/common';
import { TestTicketService } from '../test-ticket/test-ticket.service';
import { TicketInterface } from './ticket';
import { UserTestHistoryService } from '../user-test-history/user-test-history.service';

@Injectable()
export class TicketService {
  constructor(
    private Tickets: TestTicketService,
    private History: UserTestHistoryService,
  ) {}

  async test() {
    return await this.History.test();
  }

  async getAllTickets() {
    return await this.Tickets.all();
  }

  async findTicket(id: number): Promise<TicketInterface> {
    const ticket = await this.Tickets.findOne(id);

    return ticket;
  }

  async buyTicket(request: Record<string, any>, id: number, token?: string) {
    return await this.Tickets.buyTicket(request, id, token);
  }

  async getHistory(token: string) {
    return await this.History.getHistories(token);
  }

  async adminGetAllTicket() {
    return await this.History.all();
  }

  async adminAddTicket(request: Record<string, any>) {
    return await this.Tickets.addTicket(request);
  }

  async adminEditTicket(request: Record<string, any>) {
    return await this.Tickets.editTicket(request);
  }

  async adminDeleteTicket(id: number) {
    return await this.Tickets.deleteTicket(id);
  }
}
