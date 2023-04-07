import React from 'react';
import styled from 'styled-components';
import { globalColors } from '../../GlobalStyle/globalcolors';

function Offers(props) {
    return (
        <OffersStyle>
            <div className="heading">
                <h2>What You Get</h2>
            </div>
            <div className="cards-container">
                <div className="card">
                    <h2>Service</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore dolore atque odio et earum ullam similique qui vero voluptate eaque! Fugit ea natus facere iure? Sint expedita recusandae</p>

                </div>
                <div className="card">
                    <h2>Service</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore dolore atque odio et earum ullam similique qui vero voluptate eaque! Fugit ea natus facere iure? Sint expedita recusandae</p>

                </div>
                <div className="card">
                    <h2>Service</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore dolore atque odio et earum ullam similique qui vero voluptate eaque! Fugit ea natus facere iure? Sint expedita recusandae</p>

                </div>
            </div>
        </OffersStyle>
    );
}
const OffersStyle = styled.div`
    margin-top: 2rem;
    .heading{
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
       
h2{
     font-size: 2rem;
     width: fit-content;
    border-bottom: 4px solid ${globalColors.main};
}
    }
    .cards-container{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 2rem;
        padding: 0 5%;
        .card{
            width: 20rem;
            h2{
                font-weight: 600;
            }
            p{
                font-weight: 300;
                font-size: .95rem;
            }
        }
    }
`
export default Offers;