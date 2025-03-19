import React from 'react'
import { Checkbox } from "antd";
import {CloseOutlined} from "@ant-design/icons"
function Todo( prop) {

    type Todo = {
        name :string;
        id : number;
        complete : boolean;
    }
    

  return (
    <div className='container'>
        <div className='todo'  
            style={{
                background: "#597",
                margin: "10px",
                padding:" 10px",
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-between",
                borderRadius: "15px",
                color: "wheat"
            }}
        >
            <Checkbox/>
            {prop.content}
            <CloseOutlined />
        </div>
    </div>
  )
}

export default Todo