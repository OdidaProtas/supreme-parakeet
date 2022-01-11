import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Ticket {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fullName: string;

  @Column()
  company: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  anydesk: string;

  @Column()
  status: string;

  @Column()
  subject: string;

  @Column()
  body: string;
}
