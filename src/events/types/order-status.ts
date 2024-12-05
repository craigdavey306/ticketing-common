export enum OrderStatus {
  /** Order created, but ticket has not been reserved. */
  Created = 'order:created',
  /** The ticket the order is trying to reserve has already been reserved,
   *  or when the user has cancelled the order, or the order expires before payment.
   */
  Cancelled = 'order:cancelled',
  /** Order has successfully reserved the ticket. */
  AwaitingPayment = 'order:awaiting-payment',
  /** Order reserved the ticket, and the user has successfully paid. */
  Complete = 'order:complete',
}
