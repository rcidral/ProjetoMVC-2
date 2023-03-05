import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('caminhao')
export class Caminhao {
        
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    placa: string;
    
    @Column()
    motorista: string;  
}