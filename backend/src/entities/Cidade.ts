import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Rota } from './Rota';

@Entity('cidade')
export class Cidade {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nome: string;

    @OneToOne(() => Rota, rota => rota.cidade_origem_id)
    rotaOrigem: Rota

    @OneToOne(() => Rota, rota => rota.cidade_destino_id)
    rotaDestino: Rota


    
}