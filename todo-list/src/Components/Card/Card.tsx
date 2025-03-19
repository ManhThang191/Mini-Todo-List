import React from 'react'
import Todo from '../Todos/Todo'
import { Input } from "antd";
function Card() {
    return (
        <>
            <div className='container' style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div className='card' style={{
                    width: "40%",
                    height: "70%",
                    background : "#345",
                    padding: "30px",
                    borderRadius: "20px"
                }}>
                    <div className='header' style={{
                        color: 'wheat',
                        fontSize: "30px",
                        textAlign: "center"
                    }}>TODOS LIST</div>
                    <div>
                        <Input placeholder='Nhap Cong Viec'/>
                    </div>
                    <div>
                        <Todo content="hoc bai"/>
                        <Todo/>
                        <Todo/>
                        <Todo/>
                        <Todo/>
                    </div>
                </div>
            </div>

            
        </>



    )
}

export default Card