import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Rota } from './Rota';

@Entity('caminhao')
export class Caminhao {
        
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    placa: string;
    
    @Column()
    motorista: string;  

    @Column()
    rotas: number;

    @Column()
    faturamento: number;

    @OneToOne(() => Rota, rota => rota.caminhao_id)
    rota: Rota
}