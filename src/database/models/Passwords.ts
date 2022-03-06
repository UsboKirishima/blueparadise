import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn
} from 'typeorm';


@Entity()
export default class Passwords {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}