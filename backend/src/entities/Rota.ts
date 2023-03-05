import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Caminhao } from './Caminhao';
import { Cidade } from './Cidade';

@Entity('rota')
export class Rota {
        
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    data: Date;

    @OneToOne(() => Cidade, cidade => cidade.id)
    @JoinColumn({ name: 'cidade_origem_id' })
    cidade_origem_id: Cidade
        
    @OneToOne(() => Cidade, cidade => cidade.id)
    @JoinColumn({ name: 'cidade_destino_id' })
    cidade_destino_id: Cidade

    @OneToOne(() => Caminhao, caminhao => caminhao.id)
    @JoinColumn({ name: 'caminhao_id' })
    caminhao_id: Caminhao
}