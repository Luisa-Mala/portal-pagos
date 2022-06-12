import { useEffect, useState } from 'react';
import { dataFake } from './dataFake';
import './Table.css';

export const Table = ({data}) =>{
    const [dataFilter, setDataFilter] = useState([])
    
    
    useEffect(()=>{
        if(data !== null){
            const dataFilterResult = dataFake.filter(
                (item) => item.factura ===  data
            )
            setDataFilter(dataFilterResult)
        }else{
            setDataFilter(dataFake)
        }
    },[data])

    return(
        <section className="table">
            <div className="table__grid">
                <div className="table__grid--head">
                    <div className="table__grid--head-item">
                        <p>Número de factura</p>
                    </div>
                    <div className="table__grid--head-item">
                        <p>Valor</p>
                    </div>
                    <div className="table__grid--head-item">
                        <p>Vencimiento</p>
                    </div>
                    <div className="table__grid--head-item">
                        <p>Pagar</p>
                    </div>
                </div>
                {dataFilter.length > 0 ? (
                    dataFilter.map((item, idx)=>(
                        <div className="table__grid--body" key={idx}>
                            <div className="table__grid--body-item">
                                <p>{item.factura}</p>
                            </div>
                            <div className="table__grid--body-item">
                                <p>{item.valor}</p>
                            </div>
                            <div className="table__grid--body-item">
                                <p>{item.vence}</p>
                            </div>
                            <div className="table__grid--body-item">
                                <p>Pagar</p>
                            </div>
                        </div>
                    ))
               
               ) : <p className='no-result'>No hay resultados</p>
            
            }
            </div>
        </section>
    )
}